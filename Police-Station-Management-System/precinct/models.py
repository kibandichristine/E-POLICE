from django.db import models


class Officer(models.Model):
    GENERAL_DUTY_OFFICER_COMMANDING_STATION = "Officer Commanding Station"
    GENERAL_DUTY_OFFICER = "Officer"
    GENERAL_DUTY_DETECTIVE = "Detective"

    GENERAL_DUTY_CHOICES = [
        (GENERAL_DUTY_OFFICER_COMMANDING_STATION, "Officer Commanding Station"),
        (GENERAL_DUTY_OFFICER, "Officer"),
        (GENERAL_DUTY_DETECTIVE, "Detective")
    ]
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    badge = models.CharField(max_length=8)
    id_number = models.CharField(max_length=8)
    phone = models.CharField(max_length=255)
    birth_date = models.DateField()
    general_duty = models.CharField(
        max_length=255, choices=GENERAL_DUTY_CHOICES, default=GENERAL_DUTY_OFFICER)

    def __str__(self) -> str:
        return self.first_name

    class Meta:
        ordering = ["first_name", "last_name"]


class Address(models.Model):
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    officer = models.OneToOneField(
        Officer, on_delete=models.CASCADE, primary_key=True)


class Complainant(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    id_number = models.CharField(max_length=8, null=True)
    phone = models.CharField(max_length=255, null=True)
    age = models.PositiveSmallIntegerField()
    address = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.first_name

    class Meta:
        ordering = ["first_name", "last_name"]


class Suspect(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    id_number = models.CharField(max_length=8, null=True)
    phone = models.CharField(max_length=255, null=True)
    age = models.PositiveSmallIntegerField()
    address = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.first_name

    class Meta:
        ordering = ["first_name", "last_name"]


class Complaint(models.Model):
    STATUS_ACTIVE = 'Active'
    STATUS_SOLVED = 'Solved'
    STATUS_COLD = 'Cold'

    STATUS_CHOICES = [
        (STATUS_ACTIVE, 'Active'),
        (STATUS_SOLVED, 'Solved'),
        (STATUS_COLD, 'Cold'),
    ]
    occurrence_book_number = models.CharField(max_length=13)
    placed_at = models.DateTimeField(auto_now_add=True)
    statement = models.TextField()
    location = models.CharField(max_length=255)
    status = models.CharField(
        max_length=255, choices=STATUS_CHOICES, default=STATUS_ACTIVE)
    complainant = models.ForeignKey(Complainant, on_delete=models.PROTECT)
    suspects = models.ManyToManyField(Suspect)
    recording_officer = models.ForeignKey(
        Officer, on_delete=models.SET_NULL, null=True)

    def __str__(self) -> str:
        return self.occurrence_book_number

    class Meta:
        ordering = ["occurrence_book_number"]


class LastSeen(models.Model):
    location = models.CharField(max_length=255)
    time = models.DateTimeField()


class MostWanted(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    id_number = models.CharField(max_length=8, null=True)
    age = models.PositiveSmallIntegerField()
    complaint = models.ForeignKey(Complaint, on_delete=models.PROTECT)
    bounty = models.DecimalField(max_digits=9, decimal_places=2)
    last_seen = models.ManyToManyField(LastSeen)


class MostWantedImage(models.Model):
    most_wanted_person = models.ForeignKey(
        MostWanted, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='precinct/images/most-wanted')


class Lawyer(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    id_number = models.CharField(max_length=8)
    phone = models.CharField(max_length=255)
    suspect = models.OneToOneField(
        Suspect, on_delete=models.CASCADE, primary_key=True)


class BountyHunter(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    id_number = models.CharField(max_length=8, null=True)
    phone = models.CharField(max_length=255, null=True)
    age = models.PositiveSmallIntegerField()
    address = models.CharField(max_length=255)
    claimed_at = models.DateTimeField(auto_now_add=True)
    most_wanted = models.ForeignKey(
        MostWanted, on_delete=models.SET_NULL, null=True)


class Shift(models.Model):
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    officer = models.ForeignKey(Officer, on_delete=models.CASCADE)


class DayOff(models.Model):
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    officer = models.ForeignKey(Officer, on_delete=models.CASCADE)


class MissingPerson(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    id_number = models.CharField(max_length=8, null=True)
    age = models.PositiveSmallIntegerField()
    complaint = models.ForeignKey(Complaint, on_delete=models.PROTECT)
    last_seen = models.ManyToManyField(LastSeen)


class MissingPersonImage(models.Model):
    missing_person = models.ForeignKey(
        MissingPerson, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='precinct/images/missing-persons')


class Detective(models.Model):
    report = models.TextField()
    complaint = models.ForeignKey(
        Complaint, on_delete=models.PROTECT)
    officer = models.ForeignKey(Officer, on_delete=models.PROTECT)
    created_at = models.DateField(auto_now_add=True, null=True)
    updated_at = models.DateField(auto_now=True, null=True)

    def __str__(self):
        return f"{self.officer.first_name} {self.officer.last_name}"

    class Meta:
        ordering = ["created_at"]
