import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Welcome to EHR System
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Doctor Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Doctors</h2>
            <div className="space-y-4">
              <Link to="/login-doctor" className="block w-full text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Login as Doctor
              </Link>
              <Link to="/register-doctor" className="block w-full text-center bg-green-500 text-white py-2 rounded hover:bg-green-600">
                Register as Doctor
              </Link>
            </div>
          </div>

          {/* Patient Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Patients</h2>
            <div className="space-y-4">
              <Link to="/login-patient" className="block w-full text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Login as Patient
              </Link>
              <Link to="/register-patient" className="block w-full text-center bg-green-500 text-white py-2 rounded hover:bg-green-600">
                Register as Patient
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;