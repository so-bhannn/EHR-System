from django.urls import path
from .views import *

app_name= 'appointment_booking_system'

urlpatterns = [
    path('slots/<str:doctor_id>', list_available_slots, name='slots_available'),
    path('book/', book_appointment, name='book_appointment'),
    path('reschedule/<str:appointment_id>', reschedule_appointment, name='reschedule_appointment'),
    path('cancel/<str:appointment_id>', cancel_appointment, name='cancel_appointment'),
]
