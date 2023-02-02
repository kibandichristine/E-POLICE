from rest_framework.viewsets import ModelViewSet
from .models import (Officer, Complaint, Complainant,
                     Suspect, Detective, Lawyer, MissingPerson, MostWanted, BountyHunter, Address,
                     LastSeen, Shift, MissingPersonImage, MostWantedImage)
from .serializers import (
    OfficerSerializer, ComplaintSerializer, ComplainantSerializer, SuspectSerializer,
    DetectiveSerializer, LawyerSerializer, MissingPersonSerializer, MostWantedSerializer,
    BountyHunterSerializer, AddressSerializer, LastSeenSerializer, ShiftSerializer,
    MissingPersonImageSerializer, MostWantedImageSerializer)


class OfficerViewSet(ModelViewSet):
    queryset = Officer.objects.all()
    serializer_class = OfficerSerializer


class ComplaintViewSet(ModelViewSet):
    queryset = Complaint.objects.prefetch_related('suspects').all()
    serializer_class = ComplaintSerializer

    def get_serializer_context(self):
        return {'request': self.request}


class ComplainantViewSet(ModelViewSet):
    queryset = Complainant.objects.all()
    serializer_class = ComplainantSerializer


class SuspectViewSet(ModelViewSet):
    queryset = Suspect.objects.all()
    serializer_class = SuspectSerializer


class DetectiveViewSet(ModelViewSet):
    queryset = Detective.objects.all()
    serializer_class = DetectiveSerializer


class LawyerViewSet(ModelViewSet):
    queryset = Lawyer.objects.all()
    serializer_class = LawyerSerializer


class MissingPersonViewSet(ModelViewSet):
    queryset = MissingPerson.objects.prefetch_related('last_seen').all()
    serializer_class = MissingPersonSerializer


class MostWantedViewSet(ModelViewSet):
    queryset = MostWanted.objects.prefetch_related('last_seen').all()
    serializer_class = MostWantedSerializer


class BountyHunterViewSet(ModelViewSet):
    queryset = BountyHunter.objects.all()
    serializer_class = BountyHunterSerializer


class AddressViewSet(ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer


class LastSeenViewSet(ModelViewSet):
    queryset = LastSeen.objects.all()
    serializer_class = LastSeenSerializer


class ShiftViewSet(ModelViewSet):
    queryset = Shift.objects.all()
    serializer_class = ShiftSerializer


class MissingPersonImageViewSet(ModelViewSet):
    serializer_class = MissingPersonImageSerializer

    def get_serializer_context(self):
        return {'missing_person_id': self.kwargs['missing_person_pk']}

    def get_queryset(self):
        return MissingPersonImage.objects.filter(missing_person_id=self.kwargs['missing_person_pk'])


class MostWantedImageViewSet(ModelViewSet):
    serializer_class = MostWantedImageSerializer

    def get_serializer_context(self):
        return {'most_wanted_person_id': self.kwargs['most_wanted_person_pk']}

    def get_queryset(self):
        return MostWantedImage.objects.filter(most_wanted_person_id=self.kwargs['most_wanted_person_pk'])
