import React, { useState } from "react";
import {
  FiLock,
  FiLogIn,
  FiEye,
  FiEyeOff,
  FiShield,
  FiUsers,
  FiArrowLeft,
  FiUser,
} from "react-icons/fi";

const ADMIN_ID = "ThangamCateringAdmin2026";
const ADMIN_PASSWORD = "Thangam@8220604334";

const Login = () => {
  const [language, setLanguage] = useState("ta");
  const [role, setRole] = useState("admin");
  const [showPassword, setShowPassword] = useState(false);

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isTamil = language === "ta";

  const text = {
    ta: {
      admin: "நிர்வாகி",
      worker: "பணியாளர்",

      staffLogin: "பணியாளர் உள்நுழைவு",
      accountType: "கணக்கு வகை",

      adminLogin: "நிர்வாகி உள்நுழைவு",
      workerLogin: "பணியாளர் உள்நுழைவு",

      adminDescription:
        "நிர்வாகி கணக்கைப் பயன்படுத்தி உள்நுழையவும்",

      workerDescription:
        "நிர்வாகியால் உருவாக்கப்பட்ட கணக்கைப் பயன்படுத்தி உள்நுழையவும்",

      userId: "பயனர் அடையாள எண்",
      workerId: "பணியாளர் அடையாள எண்",

      enterUserId: "பயனர் அடையாள எண்ணை உள்ளிடவும்",
      enterWorkerId: "பணியாளர் அடையாள எண்ணை உள்ளிடவும்",

      password: "கடவுச்சொல்",
      enterPassword: "கடவுச்சொல்லை உள்ளிடவும்",

      login: "உள்நுழைவு",
      loggingIn: "உள்நுழைகிறது...",

      incorrect:
        "தவறான பயனர் அடையாள எண் அல்லது கடவுச்சொல்.",

      inactive:
        "இந்த பணியாளர் கணக்கு தற்போது செயலிழக்கப்பட்டுள்ளது.",

      workerNotFound:
        "பணியாளர் கணக்கு கிடைக்கவில்லை.",

      adminNote:
        "நிர்வாகி பணியாளர்களை உருவாக்கி நிர்வகிக்க முடியும்.",

      workerNote:
        "உங்கள் உள்நுழைவு தகவல்களை நிர்வாகியிடம் பெறவும்.",

      backHome: "முகப்பிற்கு திரும்பவும்",

      secureLogin: "பாதுகாப்பான பணியாளர் உள்நுழைவு",
    },

    en: {
      admin: "Admin",
      worker: "Worker",

      staffLogin: "Staff Login",
      accountType: "Account Type",

      adminLogin: "Admin Login",
      workerLogin: "Worker Login",

      adminDescription:
        "Sign in using the administrator account",

      workerDescription:
        "Sign in using the account created by the administrator",

      userId: "User ID",
      workerId: "Worker ID",

      enterUserId: "Enter user ID",
      enterWorkerId: "Enter worker ID",

      password: "Password",
      enterPassword: "Enter password",

      login: "Login",
      loggingIn: "Logging in...",

      incorrect:
        "Incorrect user ID or password.",

      inactive:
        "This worker account is currently inactive.",

      workerNotFound:
        "Worker account was not found.",

      adminNote:
        "Administrators can create and manage workers.",

      workerNote:
        "Get your login credentials from the administrator.",

      backHome: "Back to Home",

      secureLogin: "Secure Staff Login",
    },
  };

  const t = text[language];

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setUserId("");
    setPassword("");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!userId.trim() || !password.trim()) {
      setError(
        isTamil
          ? "பயனர் ID மற்றும் கடவுச்சொல்லை உள்ளிடவும்."
          : "Please enter user ID and password."
      );
      return;
    }

    setLoading(true);

    setTimeout(() => {
      /*
       * ADMIN LOGIN
       */
      if (role === "admin") {
        if (
          userId === ADMIN_ID &&
          password === ADMIN_PASSWORD
        ) {
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("userRole", "ADMIN");
          localStorage.setItem("userId", ADMIN_ID);

          window.location.href = "/admin/dashboard";
          return;
        }

        setError(t.incorrect);
        setLoading(false);
        return;
      }

      /*
       * WORKER LOGIN
       */

      const workers = JSON.parse(
        localStorage.getItem("workers") || "[]"
      );

      const worker = workers.find(
        (item) =>
          item.workerId === userId &&
          item.password === password
      );

      if (!worker) {
        setError(t.workerNotFound);
        setLoading(false);
        return;
      }

      if (worker.status !== "Active") {
        setError(t.inactive);
        setLoading(false);
        return;
      }

      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userRole", "WORKER");
      localStorage.setItem("userId", worker.workerId);
      localStorage.setItem("workerName", worker.name);

      window.location.href = "/worker/dashboard";
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#fffaf0] flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md">

        {/* Language */}
        <div className="flex justify-end mb-4">
          <div className="bg-white border border-[#eadfcf] rounded-full p-1 shadow-sm">

            <button
              type="button"
              onClick={() => setLanguage("ta")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                language === "ta"
                  ? "bg-[#7A0F12] text-white"
                  : "text-gray-600"
              }`}
            >
              தமிழ்
            </button>

            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                language === "en"
                  ? "bg-[#7A0F12] text-white"
                  : "text-gray-600"
              }`}
            >
              English
            </button>

          </div>
        </div>

        {/* Brand */}
        <div className="text-center mb-7">

          <div className="w-20 h-20 mx-auto bg-white rounded-full border border-[#eadfcf] shadow-md flex items-center justify-center mb-3">

            <img
              src="/logo.png"
              alt="Thangam & Nandhini"
              className="w-16 h-16 object-contain"
            />

          </div>

          <h1 className="text-2xl font-bold text-[#7A0F12]">
            தங்கம் & நந்தினி
          </h1>

          <p className="text-sm font-semibold text-[#4F6B2A] mt-1">
            கேட்டரிங் சர்வீஸ்
          </p>

        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-[#eadfcf] shadow-xl p-6 sm:p-7">

          {/* Heading */}
          <div className="text-center mb-6">

            <div className="w-12 h-12 rounded-full bg-[#fff4e0] text-[#7A0F12] flex items-center justify-center mx-auto mb-3">
              <FiShield size={23} />
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              {t.staffLogin}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {isTamil
                ? "உங்கள் கணக்கில் உள்நுழையவும்"
                : "Sign in to your account"}
            </p>

          </div>

          {/* Role */}
          <div className="mb-5">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t.accountType}
            </label>

            <div className="grid grid-cols-2 gap-3">

              <button
                type="button"
                onClick={() => handleRoleChange("admin")}
                className={`h-12 rounded-xl border-2 flex items-center justify-center gap-2 font-semibold transition ${
                  role === "admin"
                    ? "border-[#7A0F12] bg-[#fff4e0] text-[#7A0F12]"
                    : "border-[#eadfcf] text-gray-600"
                }`}
              >
                <FiShield size={18} />
                {t.admin}
              </button>

              <button
                type="button"
                onClick={() => handleRoleChange("worker")}
                className={`h-12 rounded-xl border-2 flex items-center justify-center gap-2 font-semibold transition ${
                  role === "worker"
                    ? "border-[#4F6B2A] bg-[#f2f7eb] text-[#4F6B2A]"
                    : "border-[#eadfcf] text-gray-600"
                }`}
              >
                <FiUsers size={18} />
                {t.worker}
              </button>

            </div>

          </div>

          {/* Role info */}
          <div className="mb-5 rounded-xl bg-[#fffaf0] border border-[#eadfcf] p-4">

            <p className="font-bold text-sm text-[#7A0F12]">
              {role === "admin"
                ? t.adminLogin
                : t.workerLogin}
            </p>

            <p className="text-xs text-gray-500 mt-1 leading-5">
              {role === "admin"
                ? t.adminDescription
                : t.workerDescription}
            </p>

          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3">

              <p className="text-sm font-medium text-red-700">
                {error}
              </p>

            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* User ID */}
            <div className="mb-4">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {role === "admin"
                  ? t.userId
                  : t.workerId}
              </label>

              <div className="relative">

                <FiUser
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7A0F12]"
                  size={18}
                />

                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder={
                    role === "admin"
                      ? t.enterUserId
                      : t.enterWorkerId
                  }
                  className="w-full h-11 pl-10 pr-4 border border-[#dfcba8] rounded-lg outline-none text-sm focus:border-[#7A0F12] focus:ring-1 focus:ring-[#7A0F12]"
                />

              </div>

            </div>

            {/* Password */}
            <div className="mb-5">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.password}
              </label>

              <div className="relative">

                <FiLock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7A0F12]"
                  size={18}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.enterPassword}
                  className="w-full h-11 pl-10 pr-11 border border-[#dfcba8] rounded-lg outline-none text-sm focus:border-[#7A0F12] focus:ring-1 focus:ring-[#7A0F12]"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#7A0F12]"
                >
                  {showPassword ? (
                    <FiEyeOff size={18} />
                  ) : (
                    <FiEye size={18} />
                  )}
                </button>

              </div>

            </div>

            {/* Login */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-lg bg-[#7A0F12] text-white flex items-center justify-center gap-2 font-semibold hover:bg-[#5f0b0e] transition disabled:opacity-60"
            >

              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />

                  {t.loggingIn}
                </>
              ) : (
                <>
                  <FiLogIn size={18} />
                  {t.login}
                </>
              )}

            </button>

          </form>

          {/* Note */}
          <div className="mt-5 p-3 rounded-lg bg-gray-50 border border-gray-100">

            <p className="text-xs text-gray-500 text-center leading-5">
              {role === "admin"
                ? t.adminNote
                : t.workerNote}
            </p>

          </div>

          {/* Back */}
          <a
            href="/"
            className="flex items-center justify-center gap-2 mt-5 text-sm font-semibold text-[#7A0F12] hover:underline"
          >
            <FiArrowLeft size={16} />
            {t.backHome}
          </a>

        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          © {new Date().getFullYear()} தங்கம் & நந்தினி கேட்டரிங் சர்வீஸ்
        </p>

      </div>
    </div>
  );
};

export default Login;