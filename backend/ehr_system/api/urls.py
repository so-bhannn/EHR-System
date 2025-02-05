from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('register-patient/', register_patient, name='register-patient' ),
    path('create-record/', create_medical_record, name='create-record' ),
    path('views-records/<str:patient_id>/', get_medical_records, name='view-record' ),
    path('update-record/<str:record_id>/', update_record, name='update-record' ),
    path('delete-record/<str:record_id>/', delete_record, name='delete-record' ),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
]