import React from "react";
import { Outlet } from "react-router-dom";

import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#fffaf0]">
      <AdminNavbar />

      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;