import React from "react";
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#fffaf0] flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Logo / Brand */}
        <div className="text-center mb-7">
          <img
            src="/logo.png"
            alt="Thangam & Nandhini"
            className="w-20 h-20 object-contain mx-auto mb-3"
          />

          <h1 className="text-2xl font-bold text-[#7A0F12]">
            தங்கம் & நந்தினி
          </h1>

          <p className="text-sm text-[#4F6B2A] font-semibold mt-1">
            கேட்டரிங் சர்வீஸ்
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl border border-[#eadfcf] shadow-lg p-7">

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#333]">
              உள்நுழைவு
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              உங்கள் கணக்கில் உள்நுழையவும்
            </p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              மின்னஞ்சல்
            </label>

            <div className="relative">
              <FiMail
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-[#7A0F12]
                "
                size={18}
              />

              <input
                type="email"
                placeholder="மின்னஞ்சல் உள்ளிடவும்"
                className="
                  w-full
                  h-11
                  pl-10
                  pr-4
                  border
                  border-[#dfcba8]
                  rounded-lg
                  outline-none
                  text-sm
                  focus:border-[#7A0F12]
                  focus:ring-1
                  focus:ring-[#7A0F12]
                "
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              கடவுச்சொல்
            </label>

            <div className="relative">
              <FiLock
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-[#7A0F12]
                "
                size={18}
              />

              <input
                type="password"
                placeholder="கடவுச்சொல் உள்ளிடவும்"
                className="
                  w-full
                  h-11
                  pl-10
                  pr-4
                  border
                  border-[#dfcba8]
                  rounded-lg
                  outline-none
                  text-sm
                  focus:border-[#7A0F12]
                  focus:ring-1
                  focus:ring-[#7A0F12]
                "
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="button"
            className="
              w-full
              h-11
              rounded-lg
              bg-[#7A0F12]
              text-white
              flex
              items-center
              justify-center
              gap-2
              font-semibold
              hover:bg-[#5f0b0e]
              transition
            "
          >
            <FiLogIn size={18} />
            உள்நுழைவு
          </button>

          {/* Back */}
          <a
            href="/"
            className="
              block
              text-center
              mt-5
              text-sm
              font-semibold
              text-[#7A0F12]
              hover:underline
            "
          >
            ← முகப்பிற்கு திரும்பவும்
          </a>

        </div>
      </div>
    </div>
  );
};

export default Login;