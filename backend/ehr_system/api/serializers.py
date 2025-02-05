from rest_framework.serializers import ModelSerializer
from .models import Patient, MedicalRecord

class PatientSerializer(ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'

class MedicalRecordSerializer(ModelSerializer):
    class Meta:
        model = MedicalRecord
        fields = '__all__'