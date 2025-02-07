import axios from 'axios';

const BASE_URL = 'https://localhost:8000';

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

export const registerDoctor = async (doctorDetails) => {
  try {
    const response = await apiClient.post('/api/register-doctor/', doctorDetails);
    return response.data;
  } catch (error) {
    throw new Error('Failed to register doctor');
  }
};

export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/accounts/login/', credentials);
    return response.data;
  } catch (error) {
    throw new Error('Failed to login');
  }
};

export const logout = async () => {
  try {
    const response = await apiClient.post('/accounts/logout/');
    return response.data;
  } catch (error) {
    throw new Error('Failed to logout');
  }
}

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

export const updateRecord = async (recordId, recordDetails) => {
  try {
    const response = await apiClient.put(`/api/update-record/${recordId}/`, recordDetails);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update record');
  }
}

export const deleteRecord = async (recordId) => {
  try {
    const response = await apiClient.delete(`/api/delete-record/${recordId}/`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete record');
  }
}

