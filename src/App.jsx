import { Routes, Route } from "react-router-dom";

import Home from "./adminpanel/pages/Home";
import Footer from "./adminpanel/components/layout/Footer";
import Navbar from "./adminpanel/components/layout/Navbar";

import Login from "./login/Login.jsx";

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
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;