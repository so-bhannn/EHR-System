import React, { useState } from 'react';

const ViewRecord = () => {
  const [patientId, setPatientId] = useState('');
  const [records, setRecords] = useState([]);

  const handleViewRecord = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:8000/api/views-records/${patientId}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setRecords(data);
    } else {
      alert('Failed to fetch records');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">View Medical Records</h2>
        <input
          type="text"
          placeholder="Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleViewRecord}
          className="w-full bg-blue-500 text-white p-2 rounded mb-4"
        >
          View Records
        </button>
        {records.length > 0 ? (
          <div>
            <h3 className="text-xl font-bold mb-2">Records:</h3>
            <ul>
              {records.map((record, index) => (
                <li key={index} className="border-b py-2">
                  {record.details}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No records found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewRecord;
