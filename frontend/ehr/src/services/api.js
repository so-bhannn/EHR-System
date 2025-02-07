import axios from 'axios';

const API_URL = 'https://localhost:8000';

export const registerPatient = async (data) => {
  const response = await axios.post(`${API_URL}/api/register-patient`, data);
  return response.data;
};

export const loginPatient = async (data) => {
    const response = await axios.post(`${API_URL}/accounts/login`, data);
    return response.data;
  };

export const createRecord = async (data) => {
  const response = await axios.post(`${API_URL}/api/create-record`, data);
  return response.data;
};