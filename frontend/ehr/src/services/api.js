import axios from 'axios';

const API_URL = 'https://localhost:8000';

export const registerPatient = async (data) => {
  const response = await axios.post(`${API_URL}/patients/register`, data);
  return response.data;
};

export const loginPatient = async (data) => {
    const response = await axios.post(`${API_URL}/patients/login`, data);
    return response.data;
  };  