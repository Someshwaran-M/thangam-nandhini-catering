import React from "react";

const Attendance = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          பணியாளர் வருகை
        </h2>

        <p className="text-gray-500 mt-1">
          பணியாளர்களின் வருகையை நிர்வகிக்கவும்.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-[#eadfcf] shadow-sm p-6">

        <div className="text-center py-12">
          <h3 className="text-lg font-bold text-gray-700">
            Attendance Management
          </h3>

          <p className="text-gray-400 mt-2">
            இங்கே பணியாளர் வருகை தகவல்கள் காட்டப்படும்.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Attendance;