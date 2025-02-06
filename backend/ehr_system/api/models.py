from django.db import models
from accounts.models import Patient
import uuid

# Create your models here.

class MedicalRecord(models.Model):
    patient=models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='record')
    record_id=models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    diagnosis=models.CharField(max_length=100)
    treatment=models.CharField(max_length=100)
    created_on=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Record for {self.patient.name}"