from rest_framework.serializers import ModelSerializer
from .models import MedicalRecord

class MedicalRecordSerializer(ModelSerializer):
    class Meta:
        model = MedicalRecord
        fields = '__all__'