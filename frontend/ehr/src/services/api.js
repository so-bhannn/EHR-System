import axios from 'axios';

const API_URL = 'https://localhost:8000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerPatient = async (patientDetails) => {
  try {
    const response = await apiClient.post('/api/register-patient/', patientDetails);
    return response.data;
  } catch (error) {
    throw new Error('Failed to register patient');
  }
};

export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/api/login/', credentials);
    return response.data;
  } catch (error) {
    throw new Error('Failed to login');
  }
};

export const createRecord = async (patientId, recordDetails) => {
  try {
    const response = await apiClient.post('/api/create-record/', {
      patient_id: patientId,
      details: recordDetails,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to create record');
  }
};

export const viewRecords = async (patientId) => {
  try {
    const response = await apiClient.get(`/api/views-records/${patientId}/`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch records');
  }
};