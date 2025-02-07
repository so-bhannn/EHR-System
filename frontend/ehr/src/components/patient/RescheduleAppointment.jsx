import React, { useState } from 'react';
import { rescheduleAppointment, listAvailableSlots } from '../services/api';

const RescheduleAppointment = () => {
  const [appointmentId, setAppointmentId] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [newSlotId, setNewSlotId] = useState('');
  const [slots, setSlots] = useState([]);

  const handleViewSlots = async () => {
    try {
      const data = await listAvailableSlots(doctorId);
      setSlots(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleReschedule = async () => {
    if (!newSlotId) {
      alert('Please select a new slot.');
      return;
    }

    try {
      await rescheduleAppointment(appointmentId, newSlotId);
      alert('Appointment rescheduled successfully');
      setSlots([]);
      setNewSlotId('');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Reschedule Appointment</h2>
        <input
          type="text"
          placeholder="Appointment ID"
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
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
          View Available Slots
        </button>
        {slots.length > 0 ? (
          <div>
            <h3 className="text-xl font-bold mb-2">Available Slots:</h3>
            <ul>
              {slots.map((slot, index) => (
                <li
                  key={index}
                  className={`border-b py-2 cursor-pointer ${
                    newSlotId === slot.id ? 'bg-gray-200' : ''
                  }`}
                  onClick={() => setNewSlotId(slot.id)}
                >
                  {slot.date} - {slot.time}
                </li>
              ))}
            </ul>
            <button
              onClick={handleReschedule}
              className="w-full bg-green-500 text-white p-2 rounded mt-4"
            >
              Reschedule Appointment
            </button>
          </div>
        ) : (
          <p>No slots available or select a slot to reschedule.</p>
        )}
      </div>
    </div>
  );
};

export default RescheduleAppointment;
