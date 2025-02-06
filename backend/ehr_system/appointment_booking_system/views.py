from django.db import transaction
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Slot, Appointment
from .serializers import SlotSerializer, AppointmentSerializer
from .tasks import send_notification

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def book_appointment(request):
    availability_id = request.data.get('availability_id')
    
    try:
        with transaction.atomic():
            availability = Slot.objects.select_for_update().get(
                id=availability_id,
                is_booked=False
            )
            
            appointment = Appointment.objects.create(
                patient=request.user,
                doctor=availability.doctor,
                availability=availability,
                status='BOOKED'
            )
            
            availability.is_booked = True
            availability.save()
            
            send_notification.delay(appointment.id)
            
            return Response(
                AppointmentSerializer(appointment).data,
                status=status.HTTP_201_CREATED
            )
            
    except Slot.DoesNotExist:
        return Response(
            {'error': 'Time slot not available or already booked'},
            status=status.HTTP_400_BAD_REQUEST
        )

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def reschedule_appointment(request, appointment_id):
    try:
        new_availability_id = request.data.get('new_availability_id')
        
        with transaction.atomic():
            appointment = Appointment.objects.select_for_update().get(
                id=appointment_id,
                patient=request.user,
                status='BOOKED'
            )
            
            old_availability = appointment.availability
            new_availability = Slot.objects.select_for_update().get(
                id=new_availability_id,
                is_booked=False
            )
            
            old_availability.is_booked = False
            old_availability.save()
            
            new_availability.is_booked = True
            new_availability.save()
            
            appointment.availability = new_availability
            appointment.status = 'RESCHEDULED'
            appointment.save()
            
            return Response(
                AppointmentSerializer(appointment).data,
                status=status.HTTP_200_OK
            )
            
    except (Appointment.DoesNotExist, Slot.DoesNotExist):
        return Response(
            {'error': 'Invalid rescheduling request'},
            status=status.HTTP_400_BAD_REQUEST
        )

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def cancel_appointment(request, appointment_id):
    try:
        with transaction.atomic():
            appointment = Appointment.objects.select_for_update().get(
                id=appointment_id,
                patient=request.user,
                status__in=['BOOKED', 'RESCHEDULED']
            )
            
            availability = appointment.availability
            availability.is_booked = False
            availability.save()
            
            appointment.status = 'CANCELLED'
            appointment.save()
            
            return Response(
                {'message': 'Appointment cancelled successfully'},
                status=status.HTTP_200_OK
            )
            
    except Appointment.DoesNotExist:
        return Response(
            {'error': 'Invalid appointment ID'},
            status=status.HTTP_404_NOT_FOUND
        )