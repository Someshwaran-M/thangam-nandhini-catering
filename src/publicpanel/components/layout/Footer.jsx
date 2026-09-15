import React from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Menu", href: "#menu" },
    { name: "Packages", href: "#packages" },
    { name: "Gallery", href: "#gallery" },
  ];

  const services = [
    "Wedding Catering",
    "Birthday Catering",
    "Housewarming",
    "Corporate Events",
    "Engagement Catering",
    "Outdoor Catering",
  ];

  return (
    <footer className="bg-[#4A0709] text-white">

      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-1">

            <a
              href="#home"
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-20 h-20 bg-white rounded-full p-2 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Thangam & Nandhini Caterings"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>

            <h2 className="font-serif text-2xl font-bold text-[#C9962C]">
              தங்கம் & நந்தினி
            </h2>

            <p className="text-[#C9962C] text-sm font-medium tracking-wider mt-1">
              கேட்டரிங் சர்வீஸ்
            </p>

            <p className="text-white/70 text-sm leading-7 mt-5 max-w-sm">
              பாரம்பரிய சுவையுடன் தரமான உணவு மற்றும் சிறந்த
              கேட்டரிங் சேவையை உங்கள் அனைத்து விழாக்களுக்கும்
              வழங்குகிறோம்.
            </p>

            <p className="text-white/60 text-sm leading-6 mt-3 max-w-sm">
              Delicious food, traditional taste and professional
              catering service for every special occasion.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 mt-6">

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-[#C9962C]/40 flex items-center justify-center text-[#C9962C] hover:bg-[#C9962C] hover:text-[#4A0709] transition-all duration-300"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#C9962C]/40 flex items-center justify-center text-[#C9962C] hover:bg-[#C9962C] hover:text-[#4A0709] transition-all duration-300"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-[#C9962C]/40 flex items-center justify-center text-[#C9962C] hover:bg-[#C9962C] hover:text-[#4A0709] transition-all duration-300"
              >
                <FaYoutube size={17} />
              </a>

              <a
                href="https://wa.me/918220604334"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-[#C9962C]/40 flex items-center justify-center text-[#C9962C] hover:bg-[#C9962C] hover:text-[#4A0709] transition-all duration-300"
              >
                <FaWhatsapp size={17} />
              </a>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="font-serif text-lg font-bold text-white">
              Quick Links
            </h3>

            <div className="w-10 h-[2px] bg-[#C9962C] mt-3 mb-6" />

            <ul className="space-y-3.5">

              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/65 hover:text-[#C9962C] transition-colors"
                  >
                    <FiArrowUpRight
                      size={13}
                      className="text-[#C9962C] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    />
                    {link.name}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div>

            <h3 className="font-serif text-lg font-bold text-white">
              Our Services
            </h3>

            <div className="w-10 h-[2px] bg-[#C9962C] mt-3 mb-6" />

            <ul className="space-y-3.5">

              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 text-sm text-white/65 hover:text-[#C9962C] transition-colors"
                  >
                    <FiArrowUpRight
                      size={13}
                      className="text-[#C9962C] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    />
                    {service}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="font-serif text-lg font-bold text-white">
              Contact Us
            </h3>

            <div className="w-10 h-[2px] bg-[#C9962C] mt-3 mb-6" />

            <div className="space-y-5">

              {/* ADDRESS */}
              <div className="flex gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#C9962C]/10 border border-[#C9962C]/30 flex items-center justify-center">
                  <FiMapPin className="text-[#C9962C]" size={16} />
                </div>

                <div>
                  <p className="text-xs text-[#C9962C] font-semibold uppercase tracking-wider">
                    Address
                  </p>

                  <p className="text-sm text-white/70 leading-6 mt-1">
                    Musiri, Tiruchirappalli,
                    <br />
                    Tamil Nadu, India.
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#C9962C]/10 border border-[#C9962C]/30 flex items-center justify-center">
                  <FiPhone className="text-[#C9962C]" size={16} />
                </div>

                <div>
                  <p className="text-xs text-[#C9962C] font-semibold uppercase tracking-wider">
                    Phone
                  </p>

                  <a
                    href="tel:+918220604334"
                    className="block text-sm text-white/70 hover:text-[#C9962C] mt-1"
                  >
                    +91 82206 04334
                  </a>

                  <a
                    href="tel:+916374628028"
                    className="block text-sm text-white/70 hover:text-[#C9962C] mt-1"
                  >
                    +91 63746 28028
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#C9962C]/10 border border-[#C9962C]/30 flex items-center justify-center">
                  <FiMail className="text-[#C9962C]" size={16} />
                </div>

                <div>
                  <p className="text-xs text-[#C9962C] font-semibold uppercase tracking-wider">
                    Email
                  </p>

                  <a
                    href="mailto:info@thangamandnandhini.com"
                    className="text-sm text-white/70 hover:text-[#C9962C] mt-1 block break-all"
                  >
                    info@thangamandnandhini.com
                  </a>
                </div>
              </div>

              {/* WORKING HOURS */}
              <div className="flex gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#C9962C]/10 border border-[#C9962C]/30 flex items-center justify-center">
                  <FiClock className="text-[#C9962C]" size={16} />
                </div>

                <div>
                  <p className="text-xs text-[#C9962C] font-semibold uppercase tracking-wider">
                    Working Hours
                  </p>

                  <p className="text-sm text-white/70 mt-1">
                    Monday – Sunday
                  </p>

                  <p className="text-sm text-white/70">
                    6:00 AM – 10:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= GOLD DIVIDER ================= */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9962C]/50 to-transparent" />
      </div>

      {/* ================= CTA ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="rounded-2xl bg-[#7A0F12] border border-[#C9962C]/20 px-6 py-7 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-center md:text-left">
            <p className="text-[#C9962C] text-xs uppercase tracking-[0.2em] font-semibold">
              Plan Your Special Day
            </p>

            <h3 className="font-serif text-xl md:text-2xl font-bold text-white mt-2">
              உங்கள் விழாவை சிறப்பாக்குவோம்
            </h3>

            <p className="text-white/60 text-sm mt-1">
              Let us make your special occasion memorable.
            </p>
          </div>

          <a
            href="#booking"
            className="shrink-0 bg-[#C9962C] hover:bg-[#b78620] text-[#4A0709] px-7 py-3.5 rounded-lg font-bold text-sm transition-all duration-300 shadow-lg"
          >
            Book Your Event
          </a>

        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">

            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Thangam & Nandhini Caterings.
              All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-xs text-white/50">
              <a
                href="#privacy"
                className="hover:text-[#C9962C] transition"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="hover:text-[#C9962C] transition"
              >
                Terms & Conditions
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/918220604334"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp size={27} />
      </a>

    </footer>
  );
};

export default Footer;