import React, { useState } from 'react';
import { cancelAppointment } from '../services/api';

const CancelAppointment = () => {
  const [appointmentId, setAppointmentId] = useState('');

  const handleCancel = async () => {
    try {
      await cancelAppointment(appointmentId);
      alert('Appointment canceled successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Cancel Appointment</h2>
        <input
          type="text"
          placeholder="Appointment ID"
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleCancel}
          className="w-full bg-red-500 text-white p-2 rounded"
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default CancelAppointment;
