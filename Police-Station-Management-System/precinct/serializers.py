from rest_framework import serializers
from precinct.models import (
    Officer, Complaint, Complainant, Suspect, Detective, Lawyer, MissingPerson, MostWanted,
    BountyHunter, Address, LastSeen, Shift, MissingPersonImage, MostWantedImage)


class OfficerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Officer
        fields = ['id', 'first_name', 'last_name', 'badge',
                  'id_number', 'phone', 'birth_date', 'general_duty']
    id = serializers.IntegerField(read_only=True)
    general_duty = serializers.CharField(read_only=True)


class SuspectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suspect
        fields = ['id', 'first_name', 'last_name',
                  'id_number', 'phone', 'age', 'address']



class ComplainantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complainant
        fields = ['id', 'first_name', 'last_name',
                  'id_number', 'phone', 'age', 'address']



class ComplaintSerializer(serializers.ModelSerializer):
    # complainant = serializers.HyperlinkedRelatedField(
    #     queryset=Complainant.objects.all(),
    #     view_name='complainant-detail'
    # )

    # recording_officer = serializers.HyperlinkedRelatedField(
    #     queryset=Complainant.objects.all(),
    #     view_name='complainant-detail'
    # )
    recording_officer = OfficerSerializer()

    complainant = ComplainantSerializer()
    
    suspects = SuspectSerializer(many=True)

    class Meta:
        model = Complaint
        fields = ['id', 'occurrence_book_number', 'placed_at', 'location',
                  'status', 'complainant', 'suspects', 'recording_officer', 'statement']



class DetectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Detective
        fields = ['id', 'complaint', 'officer',
                  'created_at', 'updated_at', 'report']


class LawyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lawyer
        fields = ['suspect', 'first_name', 'last_name',
                  'id_number', 'phone']


class BountyHunterSerializer(serializers.ModelSerializer):
    class Meta:
        model = BountyHunter
        fields = ['id', 'first_name', 'last_name',
                  'id_number', 'phone', 'age', 'address', 'claimed_at', 'most_wanted']


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['officer', 'city', 'street']


class LastSeenSerializer(serializers.ModelSerializer):
    class Meta:
        model = LastSeen
        fields = ['id', 'location', 'time']


class ShiftSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shift
        fields = ['id', 'start_time', 'end_time', 'officer']


class MissingPersonImageSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        missing_person_id = self.context['missing_person_id']
        return MissingPersonImage.objects.create(missing_person_id=missing_person_id, **validated_data)

    class Meta:
        model = MissingPersonImage
        fields = ['id', 'image']


class MostWantedImageSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        most_wanted_person_id = self.context['most_wanted_person_id']
        return MostWantedImage.objects.create(most_wanted_person_id=most_wanted_person_id, **validated_data)

    class Meta:
        model = MostWantedImage
        fields = ['id', 'image']


class MissingPersonSerializer(serializers.ModelSerializer):
    images = MissingPersonImageSerializer(many=True)

    class Meta:
        model = MissingPerson
        fields = ['id', 'first_name', 'last_name',
                  'id_number', 'age', 'images', 'complaint', 'last_seen']


class MostWantedSerializer(serializers.ModelSerializer):
    images = MostWantedImageSerializer(many=True)
    last_seen = LastSeenSerializer(many=True)
    complaint = ComplaintSerializer()

    class Meta:
        model = MostWanted
        fields = ['id', 'first_name', 'last_name',
                  'id_number', 'age', 'images', 'last_seen', 'complaint']
