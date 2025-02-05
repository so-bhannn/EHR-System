from django.db import models
import uuid

# Create your models here.
class Patient(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.Choices('Male','Female')
    contact = models.IntegerField()
    patient_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    medical_history = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name

class MedicalRecord(models.Model):
    patient=models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='record')
    diagnosis=models.CharField()
    treatment=models.CharField()
    created_on=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Record for {self.patient.name}"