# EHR System

A comprehensive Electronic Health Record (EHR) System for managing patient records, appointments, and medical data.

## Table of Contents
- [Setup & Installation](#setup--installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Usage Guide](#api-usage-guide)
  - [Authentication](#authentication)
  - [Patient Endpoints](#patient-endpoints)
  - [Doctor Endpoints](#doctor-endpoints)
  - [Example Requests & Responses](#example-requests--responses)
- [Frontend Deployment](#frontend-deployment)
- [Live Demo](#live-demo)

## Setup & Installation

### Backend Setup

```bash
# Clone the repository
git clone <repository-url>
cd EHR-System_Dir/backend/ehr_system

# Create virtual environment
python -m venv env
source env/bin/activate  # On Windows: .\env\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Start server
python manage.py runserver
```

### Frontend Setup

```bash
Copy
# Navigate to frontend directory
cd EHR-System_Dir/frontend/ehr

# Install dependencies
npm install

# Start development server
npm run dev
```
# API Usage Guide
## Authentication
### Login
Endpoint: `POST /api/accounts/login/`

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
Response:

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "is_doctor": true
  }
}
```
## Patient Endpoints
### Register Patient
Endpoint: `POST /api/register-patient/`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepass123",
  "age": 30,
  "gender": "M"
}
````
### View Medical Records
Endpoint: `GET /api/view-records/{patient_id}/`

## Doctor Endpoints
### Create Medical Record
Endpoint: `POST /api/create-record/`

```json
{
  "patient_id": "123",
  "diagnosis": "Fever",
  "treatment": "Prescribed medication"
}
```
### Update Medical Record
Endpoint: `PUT /api/update-record/{record_id}/`

```json
{
  "diagnosis": "Updated diagnosis",
  "treatment": "Updated treatment"
}
```
# Example Requests & Responses
### Book Appointment
Request:

`POST /api/booking/book/`
```json
{
  "doctor_id": "456",
  "slot_time": "2024-02-10T10:00:00Z",
  "description": "Regular checkup"
}
```
Response:

```json
{
  "appointment_id": "789",
  "status": "confirmed",
  "slot_time": "2024-02-10T10:00:00Z",
  "doctor_name": "Dr. Smith"
}
```
### View Available Slots
Request: `GET /api/booking/slots/{doctor_id}/`

Response:

```json
{
  "slots": [
    {
      "id": "1",
      "start_time": "2024-02-10T09:00:00Z",
      "end_time": "2024-02-10T09:30:00Z",
      "is_available": true
    }
  ]
}
```
# Frontend Deployment
1. Fork the repository
2. Connect your GitHub account to Vercel
3. Import the project
4. Configure environment variables
5. Deploy!

### Live Demo: [Vercel](https://ehr-system-tan.vercel.app)
