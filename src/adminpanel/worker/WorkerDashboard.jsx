import React, { useEffect } from "react";
import {
  FiLogOut,
  FiUser,
  FiClipboard,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

const WorkerDashboard = () => {
  const workerName =
    localStorage.getItem("workerName") || "பணியாளர்";

  const workerId =
    localStorage.getItem("userId") || "";

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const role = localStorage.getItem("userRole");

    if (loggedIn !== "true" || role !== "WORKER") {
      window.location.href = "/login";
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    localStorage.removeItem("workerName");

    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-[#fffaf0]">

      {/* Navbar */}
      <header className="bg-white border-b border-[#eadfcf] shadow-sm">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />

            <div>

              <h1 className="font-bold text-[#7A0F12]">
                தங்கம் & நந்தினி
              </h1>

              <p className="text-xs text-[#4F6B2A] font-semibold">
                பணியாளர் Dashboard
              </p>

            </div>

          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7A0F12] text-white text-sm font-semibold hover:bg-[#5f0b0e]"
          >
            <FiLogOut />
            வெளியேறு
          </button>

        </div>

      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {/* Welcome */}
        <div className="bg-white rounded-2xl border border-[#eadfcf] shadow-sm p-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">

            <div className="w-16 h-16 rounded-full bg-[#fff4e0] text-[#7A0F12] flex items-center justify-center">

              <FiUser size={30} />

            </div>

            <div>

              <p className="text-sm text-gray-500">
                வரவேற்கிறோம்
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-1">
                {workerName}
              </h2>

              <p className="text-sm text-[#7A0F12] font-semibold mt-1">
                Worker ID: {workerId}
              </p>

            </div>

          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <div className="bg-white rounded-2xl border border-[#eadfcf] shadow-sm p-6">

            <div className="w-12 h-12 rounded-xl bg-[#fff4e0] text-[#7A0F12] flex items-center justify-center mb-4">
              <FiClipboard size={23} />
            </div>

            <h3 className="font-bold text-lg text-gray-800">
              எனது பணிகள்
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              உங்களுக்கு ஒதுக்கப்பட்ட பணிகளை பார்க்கவும்.
            </p>

          </div>

          <div className="bg-white rounded-2xl border border-[#eadfcf] shadow-sm p-6">

            <div className="w-12 h-12 rounded-xl bg-[#f2f7eb] text-[#4F6B2A] flex items-center justify-center mb-4">
              <FiCalendar size={23} />
            </div>

            <h3 className="font-bold text-lg text-gray-800">
              நிகழ்வுகள்
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              வரவிருக்கும் கேட்டரிங் நிகழ்வுகளை பார்க்கவும்.
            </p>

          </div>

          <div className="bg-white rounded-2xl border border-[#eadfcf] shadow-sm p-6">

            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
              <FiCheckCircle size={23} />
            </div>

            <h3 className="font-bold text-lg text-gray-800">
              நிறைவு செய்யப்பட்ட பணிகள்
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              நீங்கள் முடித்த பணிகளின் விவரங்களை பார்க்கவும்.
            </p>

          </div>

        </div>

      </main>

    </div>
  );
};

export default WorkerDashboard;