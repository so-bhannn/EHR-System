from django.shortcuts import render
from accounts.serializers import PatientSerializer
from .serializers import MedicalRecordSerializer
from .models import Patient, MedicalRecord
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from drf_yasg.utils import swagger_auto_schema
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.

@api_view(['POST'])
@permission_classes([IsAuthenticated])
@swagger_auto_schema(request_body=PatientSerializer)
def register_patient(request):
    serializer=PatientSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
@swagger_auto_schema(request_body=MedicalRecordSerializer)
def create_medical_record(request):
    serializer=MedicalRecordSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_medical_records(request, patient_id):
    try:
        medical_record=MedicalRecord.objects.filter(patient_id=patient_id)
    except MedicalRecord.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer=MedicalRecordSerializer(medical_record, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
@swagger_auto_schema(request_body=MedicalRecordSerializer)
def update_record(request, record_id):
    try:
        record=MedicalRecord.objects.get(record_id=record_id)
    except MedicalRecord.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer=MedicalRecordSerializer(record, data=request.data)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_record(request, record_id):
    try:
        record=MedicalRecord.objects.get(record_id=record_id)
    except MedicalRecord.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    record.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)