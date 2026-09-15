import React, { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiPhone,
  FiGlobe,
  FiLogIn,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [language, setLanguage] = useState("ta");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isTamil = language === "ta";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const content = {
    ta: {
      home: "முகப்பு",
      services: "சேவைகள்",
      menu: "உணவு பட்டியல்",
      gallery: "புகைப்படங்கள்",
      contact: "தொடர்பு",
      call: "அழைக்கவும்",
      login: "உள்நுழைவு",
      ourServices: "எங்கள் சேவைகள்",

      serviceItems: [
        "திருமண கேட்டரிங்",
        "பிறந்தநாள் கேட்டரிங்",
        "புதுமனை புகுவிழா",
        "நிறுவன நிகழ்வுகள்",
        "நிச்சயதார்த்தம்",
        "வெளிப்புற கேட்டரிங்",
      ],
    },

    en: {
      home: "Home",
      services: "Services",
      menu: "Menu",
      gallery: "Gallery",
      contact: "Contact",
      call: "Call Us",
      login: "Login",
      ourServices: "Our Services",

      serviceItems: [
        "Wedding Catering",
        "Birthday Catering",
        "Housewarming",
        "Corporate Events",
        "Engagement",
        "Outdoor Catering",
      ],
    },
  };

  const t = content[language];

  const changeLanguage = () => {
    setLanguage(isTamil ? "en" : "ta");
    setServicesOpen(false);
    setMobileOpen(false);
  };

  const closeMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          h-[60px]
          sm:h-[62px]
          lg:h-[64px]
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-white/60 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              : "bg-white/15 backdrop-blur-[3px]"
          }
        `}
        style={{
          fontFamily: '"Noto Sans Tamil", Arial, sans-serif',
        }}
      >
        {/* Top brand line */}
        <div
          className="
            absolute
            top-0
            left-0
            right-0
            h-[2px]
            bg-gradient-to-r
            from-[#4F6B2A]
            via-[#C9962C]
            to-[#7A0F12]
          "
        />

        <div
          className="
            w-full
            max-w-[1600px]
            h-full
            mx-auto
            px-3
            sm:px-5
            md:px-7
            lg:px-8
            xl:px-10
            flex
            items-center
          "
        >
          {/* ================= LOGO ================= */}
          <div
            className="
              flex-shrink-0
              w-auto
              lg:w-[245px]
              xl:w-[270px]
            "
          >
            <Link
              to="/"
              onClick={closeMenu}
              className="
                flex
                items-center
                gap-1.5
                sm:gap-2
              "
            >
              <img
                src="/logo.png"
                alt="Thangam & Nandhini Caterings"
                className="
                  w-[42px]
                  h-[42px]
                  sm:w-[46px]
                  sm:h-[46px]
                  lg:w-[47px]
                  lg:h-[47px]
                  object-contain
                  flex-shrink-0
                "
              />

              <div className="leading-none">
                <h1
                  className="
                    text-[#7A0F12]
                    font-bold
                    text-[14px]
                    sm:text-[15px]
                    lg:text-[16px]
                    xl:text-[17px]
                    whitespace-nowrap
                    tracking-tight
                  "
                >
                  {isTamil
                    ? "தங்கம் & நந்தினி"
                    : "Thangam & Nandhini"}
                </h1>

                <p
                  className="
                    mt-[3px]
                    text-[#4F6B2A]
                    font-semibold
                    text-[7px]
                    sm:text-[8px]
                    lg:text-[9px]
                    whitespace-nowrap
                  "
                >
                  {isTamil
                    ? "கேட்டரிங் சர்வீஸ்"
                    : "Catering Service"}
                </p>
              </div>
            </Link>
          </div>

          {/* ================= DESKTOP NAV ================= */}
          <nav
            className="
              hidden
              lg:flex
              flex-1
              h-full
              items-center
              justify-center
              gap-0
            "
          >
            {/* HOME */}
            <a
              href="#home"
              className="
                px-2
                xl:px-3
                h-full
                flex
                items-center
                justify-center
                text-[12px]
                xl:text-[13px]
                font-semibold
                text-[#333]
                hover:text-[#7A0F12]
                whitespace-nowrap
                leading-none
                transition
              "
            >
              {t.home}
            </a>

            {/* SERVICES */}
            <div className="relative h-full">
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="
                  px-2
                  xl:px-3
                  h-full
                  flex
                  items-center
                  justify-center
                  gap-1
                  text-[12px]
                  xl:text-[13px]
                  font-semibold
                  text-[#333]
                  hover:text-[#7A0F12]
                  whitespace-nowrap
                  leading-none
                  transition
                "
              >
                {t.services}

                <FiChevronDown
                  size={13}
                  className={`
                    transition-transform
                    ${servicesOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* Dropdown */}
              {servicesOpen && (
                <div
                  className="
                    absolute
                    top-[62px]
                    left-1/2
                    -translate-x-1/2
                    w-[230px]
                    rounded-xl
                    border
                    border-white/70
                    bg-white/80
                    backdrop-blur-xl
                    shadow-xl
                    overflow-hidden
                    py-1
                  "
                >
                  <div
                    className="
                      px-4
                      py-2
                      text-[#7A0F12]
                      font-bold
                      text-[12px]
                      border-b
                      border-[#eadfcf]
                    "
                  >
                    {t.ourServices}
                  </div>

                  {t.serviceItems.map((item, index) => (
                    <a
                      key={index}
                      href="#services"
                      onClick={() =>
                        setServicesOpen(false)
                      }
                      className="
                        block
                        px-4
                        py-2
                        text-[11px]
                        font-medium
                        text-gray-700
                        hover:bg-[#fffaf0]
                        hover:text-[#7A0F12]
                        whitespace-nowrap
                        transition
                      "
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* MENU */}
            <a
              href="#menu"
              className="
                px-2
                xl:px-3
                h-full
                flex
                items-center
                justify-center
                text-[12px]
                xl:text-[13px]
                font-semibold
                text-[#333]
                hover:text-[#7A0F12]
                whitespace-nowrap
                leading-none
                transition
              "
            >
              {t.menu}
            </a>

            {/* GALLERY */}
            <a
              href="#gallery"
              className="
                px-2
                xl:px-3
                h-full
                flex
                items-center
                justify-center
                text-[12px]
                xl:text-[13px]
                font-semibold
                text-[#333]
                hover:text-[#7A0F12]
                whitespace-nowrap
                leading-none
                transition
              "
            >
              {t.gallery}
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              className="
                px-2
                xl:px-3
                h-full
                flex
                items-center
                justify-center
                text-[12px]
                xl:text-[13px]
                font-semibold
                text-[#333]
                hover:text-[#7A0F12]
                whitespace-nowrap
                leading-none
                transition
              "
            >
              {t.contact}
            </a>
          </nav>

          {/* ================= DESKTOP ACTIONS ================= */}
          <div
            className="
              hidden
              lg:flex
              items-center
              justify-end
              gap-1.5
              w-[245px]
              xl:w-[265px]
              flex-shrink-0
            "
          >
            {/* Language */}
            <button
              type="button"
              onClick={changeLanguage}
              className="
                h-[34px]
                w-[82px]
                rounded-full
                border
                border-[#cfae73]/70
                bg-white/35
                backdrop-blur-md
                flex
                items-center
                justify-center
                gap-1
                text-[#7A0F12]
                font-semibold
                text-[10px]
                whitespace-nowrap
                hover:bg-white/70
                transition
              "
            >
              <FiGlobe size={14} />

              {isTamil ? "English" : "தமிழ்"}
            </button>

            {/* Phone */}
            <a
              href="tel:+919999999999"
              title={t.call}
              className="
                w-[34px]
                h-[34px]
                rounded-full
                border
                border-[#cfae73]/70
                bg-white/35
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-[#7A0F12]
                hover:bg-white/70
                transition
              "
            >
              <FiPhone size={14} />
            </a>

            {/* Login */}
            <Link
              to="/login"
              className="
                h-[34px]
                min-w-[96px]
                px-3
                rounded-full
                bg-[#7A0F12]
                text-white
                flex
                items-center
                justify-center
                gap-1
                font-semibold
                text-[10px]
                whitespace-nowrap
                hover:bg-[#5f0b0e]
                transition
              "
            >
              <FiLogIn size={14} />
              {t.login}
            </Link>
          </div>

          {/* ================= TABLET + MOBILE ================= */}
          <div
            className="
              lg:hidden
              ml-auto
              flex
              items-center
              gap-1.5
            "
          >
            {/* Language */}
            <button
              type="button"
              onClick={changeLanguage}
              className="
                w-[58px]
                h-[33px]
                sm:w-[72px]
                sm:h-[35px]
                md:w-[80px]
                md:h-[36px]
                rounded-full
                border
                border-[#cfae73]/70
                bg-white/40
                backdrop-blur-md
                flex
                items-center
                justify-center
                gap-1
                text-[#7A0F12]
                font-semibold
                text-[9px]
                sm:text-[10px]
                whitespace-nowrap
              "
            >
              <FiGlobe size={13} />

              <span className="hidden sm:inline">
                {isTamil ? "English" : "தமிழ்"}
              </span>

              <span className="sm:hidden">
                {isTamil ? "EN" : "தமிழ்"}
              </span>
            </button>

            {/* Phone on tablet */}
            <a
              href="tel:+919999999999"
              title={t.call}
              className="
                hidden
                sm:flex
                w-[35px]
                h-[35px]
                md:w-[36px]
                md:h-[36px]
                rounded-full
                border
                border-[#cfae73]/70
                bg-white/40
                backdrop-blur-md
                items-center
                justify-center
                text-[#7A0F12]
              "
            >
              <FiPhone size={14} />
            </a>

            {/* Login */}
            <Link
              to="/login"
              title={t.login}
              className="
                w-[34px]
                h-[34px]
                sm:w-[36px]
                sm:h-[36px]
                rounded-full
                bg-[#7A0F12]
                text-white
                flex
                items-center
                justify-center
              "
            >
              <FiLogIn size={14} />
            </Link>

            {/* Menu */}
            <button
              type="button"
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="
                w-[34px]
                h-[34px]
                sm:w-[36px]
                sm:h-[36px]
                rounded-full
                border
                border-[#cfae73]/70
                bg-white/40
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-[#7A0F12]
              "
            >
              {mobileOpen ? (
                <FiX size={18} />
              ) : (
                <FiMenu size={18} />
              )}
            </button>
          </div>
        </div>

        {/* ================= TABLET / MOBILE MENU ================= */}
        {mobileOpen && (
          <div
            className="
              lg:hidden
              absolute
              top-full
              left-2
              right-2
              sm:left-4
              sm:right-4
              md:left-8
              md:right-8
              rounded-xl
              border
              border-white/70
              bg-white/65
              backdrop-blur-xl
              shadow-xl
              overflow-hidden
            "
          >
            <div
              className="
                p-2
                sm:p-3
                md:p-4
                grid
                grid-cols-1
                md:grid-cols-2
                gap-1
                md:gap-2
              "
            >
              {/* HOME */}
              <a
                href="#home"
                onClick={closeMenu}
                className="
                  px-4
                  py-2.5
                  rounded-lg
                  text-[13px]
                  font-semibold
                  text-[#333]
                  hover:bg-white/70
                  hover:text-[#7A0F12]
                "
              >
                {t.home}
              </a>

              {/* SERVICES */}
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setServicesOpen(!servicesOpen)
                  }
                  className="
                    w-full
                    px-4
                    py-2.5
                    rounded-lg
                    flex
                    items-center
                    justify-between
                    text-[13px]
                    font-semibold
                    text-[#333]
                  "
                >
                  {t.services}

                  <FiChevronDown
                    size={15}
                    className={
                      servicesOpen
                        ? "rotate-180"
                        : ""
                    }
                  />
                </button>

                {servicesOpen && (
                  <div className="ml-4 border-l-2 border-[#C9962C]">
                    {t.serviceItems.map(
                      (item, index) => (
                        <a
                          key={index}
                          href="#services"
                          onClick={closeMenu}
                          className="
                            block
                            px-4
                            py-1.5
                            text-[11px]
                            sm:text-[12px]
                            text-gray-600
                          "
                        >
                          {item}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* MENU */}
              <a
                href="#menu"
                onClick={closeMenu}
                className="
                  px-4
                  py-2.5
                  rounded-lg
                  text-[13px]
                  font-semibold
                  text-[#333]
                "
              >
                {t.menu}
              </a>

              {/* GALLERY */}
              <a
                href="#gallery"
                onClick={closeMenu}
                className="
                  px-4
                  py-2.5
                  rounded-lg
                  text-[13px]
                  font-semibold
                  text-[#333]
                "
              >
                {t.gallery}
              </a>

              {/* CONTACT */}
              <a
                href="#contact"
                onClick={closeMenu}
                className="
                  px-4
                  py-2.5
                  rounded-lg
                  text-[13px]
                  font-semibold
                  text-[#333]
                "
              >
                {t.contact}
              </a>

              {/* PHONE */}
              <a
                href="tel:+919999999999"
                className="
                  px-4
                  py-2.5
                  rounded-lg
                  border
                  border-[#cfae73]
                  text-[#7A0F12]
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-[12px]
                  font-semibold
                "
              >
                <FiPhone size={15} />
                {t.call}
              </a>

              {/* LOGIN */}
              <Link
                to="/login"
                onClick={closeMenu}
                className="
                  px-4
                  py-2.5
                  rounded-lg
                  bg-[#7A0F12]
                  text-white
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-[12px]
                  font-semibold
                  md:col-span-2
                "
              >
                <FiLogIn size={15} />
                {t.login}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ================= NAVBAR SPACER ================= */}
      <div
        className="
          h-[60px]
          sm:h-[62px]
          lg:h-[64px]
        "
      />
    </>
  );
};

export default Navbar;