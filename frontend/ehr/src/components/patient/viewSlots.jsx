import React, { useState } from 'react';
import { listAvailableSlots } from '../api';

const ViewSlots = () => {
  const [doctorId, setDoctorId] = useState('');
  const [slots, setSlots] = useState([]);

  const handleViewSlots = async () => {
    try {
      const data = await listAvailableSlots(doctorId);
      setSlots(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">View Available Slots</h2>
        <input
          type="text"
          placeholder="Doctor ID"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleViewSlots}
          className="w-full bg-blue-500 text-white p-2 rounded mb-4"
        >
          View Slots
        </button>
        {slots.length > 0 ? (
          <div>
            <h3 className="text-xl font-bold mb-2">Available Slots:</h3>
            <ul>
              {slots.map((slot, index) => (
                <li key={index} className="border-b py-2">
                  {slot.date} - {slot.time}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No slots available.</p>
        )}
      </div>
    </div>
  );
};

export default ViewSlots;