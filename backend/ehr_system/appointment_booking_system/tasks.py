from celery import shared_task
from django.core.mail import send_mail
from .models import Appointment

@shared_task
def send_notification(appointment_id):
    appointment=Appointment.objects.get(id=appointment_id)
    status=appointment.status
    if status=='BOOKED':
        sub_msg='Confirmation'
        msg='confirmed'
    elif status=='CANCELLED':
        sub_msg='Cancellation'
        msg='cancelled'
    elif status=='RESCHEDULED':
        sub_msg='Reschedule'
        msg='rescheduled'
    else:
        sub_msg='Completion'
        msg='completed'
    subject=f'Appointment {sub_msg}'
    message=f'''
        Your appointment with Dr. {appointment.doctor.name}
        on {appointment.slot.start_time} has been {msg}.
    '''
    recipient_list=[appointment.patient.contact]
    send_mail(subject, message, 'admin@ehr-system.com', recipient_list)