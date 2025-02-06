from rest_framework import serializers
from .models import Slot, Appointment,Doctor

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model=Doctor
        fields='__all__'
class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model=Slot
        fields='__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Appointment
        fields = '__all__'