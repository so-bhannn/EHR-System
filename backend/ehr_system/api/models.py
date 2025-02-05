from django.db import models
import uuid

# Create your models here.
class Patient(models.Model):
    GENDER_CHOICES=[
        ('M', 'Male'),
        ('F', 'Female')
    ]
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES, default=None)
    contact = models.IntegerField()
    patient_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    medical_history = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name

class MedicalRecord(models.Model):
    patient=models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='record')
    record_id=models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    diagnosis=models.CharField(max_length=100)
    treatment=models.CharField(max_length=100)
    created_on=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Record for {self.patient.name}"