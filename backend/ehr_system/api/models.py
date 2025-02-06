from django.db import models
from accounts.models import User
import uuid

# Create your models here.
class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    patient_id = models.CharField(max_length=20, unique=True)
    medical_record = models.TextField()

    def __str__(self):
        return f"Patient: {self.user.name}"

class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    doctor_id = models.CharField(max_length=20, unique=True)
    speciality = models.CharField(max_length=100)

    def __str__(self):
        return f"Doctor: {self.user.name}"

class MedicalRecord(models.Model):
    patient=models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='record')
    record_id=models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    diagnosis=models.CharField(max_length=100)
    treatment=models.CharField(max_length=100)
    created_on=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Record for {self.patient.name}"