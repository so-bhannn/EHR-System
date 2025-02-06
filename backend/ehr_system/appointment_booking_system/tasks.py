from celery import shared_task
from django.core.mail import send_mail
from .models import Appointment

@shared_task
def send_booking_confirmation(appointment_id):
    appointment = Appointment.objects.get(id=appointment_id)
    subject = 'Appointment Confirmation'
    message = f'''
        Your appointment with Dr. {appointment.doctor.name}
        on {appointment.slot.start_time} is confirmed.
    '''
    recipient_list = [appointment.patient.contact]
    send_mail(subject, message, 'admin@ehr-system.com', recipient_list)