import React from "react";
import { FaLayerGroup } from "react-icons/fa"; // Assuming you're using react-icons for the icon

const MyAccount = () => {
  return (
    <div className="w-64 p-4 border-2 border-red-500 rounded-lg shadow-md text-center">
      {/* Header with Icon and Title */}
      <div className="bg-red-600 text-white p-4 rounded-t-lg flex items-center justify-center gap-2">
        <FaLayerGroup size={24} />
        <span className="text-lg font-semibold">My Account</span>
      </div>

      {/* Sign Out Button */}
      <button className="w-full mt-4 py-2 bg-red-600 text-white font-semibold rounded-full">
        Sign out
      </button>
    </div>
  );
};

export default MyAccount;
