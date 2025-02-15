from django.db import models
from accounts.models import Patient,Doctor
import uuid

# Create your models here.
class Slot(models.Model):
    doctor=models.ForeignKey(Doctor, on_delete=models.CASCADE)
    start_time=models.DateTimeField()
    end_time=models.DateTimeField()
    is_booked=models.BooleanField(default=False)

    class Meta:
        constraints=[
            models.CheckConstraint(
                check=models.Q(end_time__gt=models.F('start_time')),
                name='end_time_after_start_time'
            )
        ]
    
    def __str__(self):
        return f"Slot for {self.doctor} from {self.start_time} to {self.end_time}"


class Appointment(models.Model):
    STATUS_CHOICES=[
        ('BOOKED', 'booked'),
        ('CANCELLED', 'cancelled'),
        ('RESCHEDULED','rescheduled'),
        ('COMPLETED', 'completed'),
    ]
    id=models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    patient=models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor=models.ForeignKey(Doctor, on_delete=models.CASCADE)
    slot=models.OneToOneField(Slot, on_delete=models.CASCADE)
    status=models.CharField(max_length=12,choices=STATUS_CHOICES, default='BOOKED')