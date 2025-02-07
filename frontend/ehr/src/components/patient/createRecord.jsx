import React, { useState } from 'react';

const CreateRecord = () => {
  const [patientId, setPatientId] = useState('');
  const [diagnosticDetails, setDiagnosticDetails] = useState('');
  const [treatmentDetails, setTreatmentDetails] = useState('');

  const handleCreateRecord = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:8000/api/create-record/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ patient_id: patientId, details: recordDetails }),
    });
    const data = await response.json();
    if (response.ok) {
      alert('Record created successfully');
    } else {
      alert('Failed to create record');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Create Medical Record</h2>
        <input
          type="text"
          placeholder="Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <textarea
          placeholder="Diagnostic Details"
          value={diagnosticDetails}
          onChange={(e) => setDiagnosticDetails(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <textarea
          placeholder="Treatment Details"
          value={treatmentDetails}
          onChange={(e) => setTreatmentDetails(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleCreateRecord}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Create Record
        </button>
      </div>
    </div>
  );
};

export default CreateRecord;
