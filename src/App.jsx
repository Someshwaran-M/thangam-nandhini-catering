import { Routes, Route } from "react-router-dom";

import Home from "./publicpanel/pages/Home";
import Footer from "./publicpanel/components/layout/Footer";
import Navbar from "./publicpanel/components/layout/Navbar";

import Login from "./login/Login.jsx";

import AdminRoutes from "./adminpanel/admin/AdminRoutes.jsx";

import WorkerDashboard from "./adminpanel/worker/WorkerDashboard.jsx";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#FBF7EE]">
      <Navbar />

      <main>
        <Home />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>

      {/* =========================
          PUBLIC WEBSITE
      ========================== */}
      <Route
        path="/"
        element={<HomePage />}
      />

      {/* =========================
          LOGIN
      ========================== */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* =========================
          ADMIN PANEL
      ========================== */}
      <Route
        path="/admin/*"
        element={<AdminRoutes />}
      />

      {/* =========================
          WORKER PANEL
      ========================== */}
      <Route
        path="/worker/dashboard"
        element={<WorkerDashboard />}
      />

    </Routes>
  );
}

export default App;