import React, { useState } from 'react';
import { updateRecord } from '../api';

const  UpdateRecord = () => {
    const [recordId, setRecordId] = useState('');
    const [diagnosisDetails, setDiagnosisDetails] = useState('');
    const [treatmentDetails, setTreatmentDetails] = useState('');
    
    const handleUpdateRecord = async () => {
        try {
        await updateRecord(recordId, diagnosisDetails, treatmentDetails);
        alert('Record updated successfully');
        } catch (error) {
        alert(error.message);
        }
    };
    
    return (
        <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Update Medical Record</h2>
            <input
            type="text"
            placeholder="Record ID"
            value={recordId}
            onChange={(e) => setRecordId(e.target.value)}
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
            onClick={handleUpdateRecord}
            className="w-full bg-blue-500 text-white p-2 rounded"
            >
            Update Record
            </button>
        </div>
        </div>
    );
}

export default UpdateRecord;