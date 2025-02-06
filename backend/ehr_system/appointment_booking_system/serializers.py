from rest_framework import serializers
from .models import Slot, Appointment

class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model=Slot
        fields='__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Appointment
        fields = '__all__'
        extra_kwargs = {
            'start_time': {'required': True},
            'end_time': {'required': True}
        }