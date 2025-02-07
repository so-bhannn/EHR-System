import React, { useState } from 'react';
import { createRecord } from '../services/api';

const CreateRecord = () => {
  const [patientId, setPatientId] = useState('');
  const [diagnosisDetails, setDiagnosisDetails] = useState('');
  const [treatmentDetails, setTreatmentDetails] = useState('');

  const handleCreateRecord = async () => {
    try {
      await createRecord(patientId, diagnosisDetails, treatmentDetails);
      alert('Record created successfully');
    } catch (error) {
      alert(error.message);
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
          placeholder="Diagnosis Details"
          value={diagnosisDetails}
          onChange={(e) => setDiagnosisDetails(e.target.value)}
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
