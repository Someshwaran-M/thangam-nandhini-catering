import React from "react";
import { FiLogOut } from "react-icons/fi";

const AdminNavbar = () => {
  const logout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");

    window.location.href = "/login";
  };

  return (
    <header className="bg-white border-b border-[#eadfcf] shadow-sm sticky top-0 z-50">
      <div className="h-16 px-4 sm:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-11 h-11 object-contain"
          />

          <div>
            <h1 className="font-bold text-[#7A0F12] text-lg">
              தங்கம் & நந்தினி
            </h1>

            <p className="text-xs text-[#4F6B2A] font-semibold">
              நிர்வாகி Panel
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg
          bg-[#7A0F12] text-white text-sm font-semibold
          hover:bg-[#5f0b0e] transition"
        >
          <FiLogOut size={17} />
          <span className="hidden sm:inline">வெளியேறு</span>
        </button>
      </div>
    </header>
  );
};

export default AdminNavbar;