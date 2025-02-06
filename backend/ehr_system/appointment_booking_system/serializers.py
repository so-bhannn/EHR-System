from rest_framework import serializers
from .models import Slot, Booking,Doctor

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model=Doctor
        fields='__all__'
class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model=Slot
        fields='__all__'

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model= Booking
        fields = '__all__'