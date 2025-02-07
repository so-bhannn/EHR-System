import React from 'react';
import { logout } from '../services/api';

const Logout = () => {
  const handleLogout = async () => {
    await logout();
    window.location.href = '/';
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded"
    >
      Logout
    </button>
  );
};

export default Logout;
