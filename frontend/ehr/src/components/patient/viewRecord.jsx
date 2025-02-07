import React, { useState } from 'react';
import { viewRecords } from '../../services/api';

const ViewRecord = () => {
  const [patientId, setPatientId] = useState('');
  const [diagnosisDetails, setDiagnosisDetails] = useState('');
  const [treatmentDetails, setTreatmentDetails] = useState('');
  const handleViewRecord = async () => {
    try {
      const records = await viewRecords(patientId);
      setDiagnosisDetails(records.diagnosis);
      setTreatmentDetails(records.treatment);
    } catch (error) {
      alert(error.message);
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
        {diagnosisDetails.length > 0 ? (
          <div>
            <h3 className="text-xl font-bold mb-2">Records:</h3>
            <ul>
              {diagnosisDetails.map((diagnosis, index) => (
                <li key={index} className="border-b py-2">
                  {diagnosis.details}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No records found.</p>
        )}
        {treatmentDetails.length > 0 ? (
          <div>
            <h3 className="text-xl font-bold mb-2">Records:</h3>
            <ul>
              {treatmentDetails.map((treatment, index) => (
                <li key={index} className="border-b py-2">
                  {treatment.details}
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
