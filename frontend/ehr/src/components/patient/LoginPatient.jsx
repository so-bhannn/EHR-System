import React, { useState } from 'react';
import { login } from '../../services/api';

const LoginPatient = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white/70 p-6 rounded shadow-md w-full max-w-sm ">
        <h2 className="text-2xl font-bold mb-4 text-center">Patient Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>
        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="text-blue-500 hover:underline"
            onClick={() => window.location.href = '/login-doctor'}
          >
            Switch to Doctor Login
          </button>
          <button
            type="button"
            className="text-blue-500 hover:underline"
            onClick={() => window.location.href = '/register-patient'}
          >
            New Patient? Register Here
          </button>
        </div>
      </form>
      </div>
  );
};

export default LoginPatient;