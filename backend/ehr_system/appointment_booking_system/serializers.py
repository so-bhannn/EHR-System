from rest_framework import serializers
from .models import Slot, Booking

class SlotSerializer(serializers.Serializer):
    class Meta:
        model=Slot
        fields=[all]

class BookingSerializer(serializers.Serializer):
    class Meta:
        model= Booking
        fields = [all]