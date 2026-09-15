import React from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiChevronRight,
  FiHeart,
  FiHome,
  FiUsers,
  FiClock,
  FiShield,
  FiStar,
  FiPhone,
} from "react-icons/fi";

const Home = () => {
  const services = [
    {
      icon: "💍",
      title: "Wedding Catering",
      tamil: "திருமண கேட்டரிங்",
      description:
        "Traditional and delicious catering for your memorable wedding celebration.",
    },
    {
      icon: "🏠",
      title: "Housewarming",
      tamil: "கிரகப்பிரவேசம்",
      description:
        "Celebrate your new beginning with authentic traditional food and service.",
    },
    {
      icon: "🎂",
      title: "Birthday Parties",
      tamil: "பிறந்தநாள் விழா",
      description:
        "Make your special day even more memorable with our delicious menu.",
    },
    {
      icon: "🏢",
      title: "Corporate Events",
      tamil: "நிறுவன நிகழ்வுகள்",
      description:
        "Professional catering solutions for meetings, events and celebrations.",
    },
    {
      icon: "❤️",
      title: "Engagement",
      tamil: "நிச்சயதார்த்தம்",
      description:
        "Elegant catering service for your engagement and family occasions.",
    },
    {
      icon: "🎪",
      title: "Outdoor Catering",
      tamil: "வெளிப்புற கேட்டரிங்",
      description:
        "Complete outdoor catering service wherever your event takes place.",
    },
  ];

  const specialties = [
    {
      name: "இட்லி",
      english: "Idli",
      image: "/images/menu/idli.jpg",
    },
    {
      name: "வடை",
      english: "Vadai",
      image: "/images/menu/vadai.jpg",
    },
    {
      name: "பொங்கல்",
      english: "Pongal",
      image: "/images/menu/pongal.jpg",
    },
    {
      name: "சாம்பார்",
      english: "Sambar",
      image: "/images/menu/sambar.jpg",
    },
    {
      name: "தோசை",
      english: "Dosa",
      image: "/images/menu/dosa.jpg",
    },
    {
      name: "பூரி",
      english: "Poori",
      image: "/images/menu/poori.jpg",
    },
    {
      name: "உப்புமா",
      english: "Upma",
      image: "/images/menu/upma.jpg",
    },
    {
      name: "காபி",
      english: "Filter Coffee",
      image: "/images/menu/coffee.jpg",
    },
  ];

  const packages = [
    {
      name: "Basic Package",
      tamil: "அடிப்படை தொகுப்பு",
      price: "₹250",
      description: "Per Plate",
      items: [
        "Welcome Drink",
        "2 Veg Items",
        "Sambar",
        "Rasam",
        "Rice",
        "Curd",
        "Sweet",
      ],
    },
    {
      name: "Standard Package",
      tamil: "சிறப்பு தொகுப்பு",
      price: "₹350",
      description: "Per Plate",
      popular: true,
      items: [
        "Welcome Drink",
        "3 Veg Items",
        "Sambar",
        "Rasam",
        "Special Kattukari",
        "Rice",
        "Curd",
        "Sweet",
        "Pickle",
      ],
    },
    {
      name: "Premium Package",
      tamil: "பிரீமியம் தொகுப்பு",
      price: "₹500",
      description: "Per Plate",
      items: [
        "Welcome Drink",
        "Starter",
        "3 Veg Items",
        "2 Gravies",
        "Special Rice",
        "Curd",
        "Sweet",
        "Dessert",
        "Full Service",
      ],
    },
  ];

  const gallery = [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
  ];

  return (
    <div className="bg-[#FBF7EE] text-[#292929]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/home.png')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b0507]/95 via-[#4A0709]/75 to-[#4A0709]/35" />

        {/* Decorative gold circle */}
        <div className="absolute -right-32 -bottom-32 w-[500px] h-[500px] rounded-full border border-[#C9962C]/30 hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10 pt-28 pb-20">

          <div className="max-w-3xl">

            {/* Small heading */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-[#C9962C]" />

              <span className="text-[#C9962C] text-sm sm:text-base font-semibold tracking-[0.18em] uppercase">
                Thangam & Nandhini Caterings
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-white">
              சுவையான உணவு
              <br />

              <span className="text-[#C9962C]">
                சிறந்த சேவை
              </span>
            </h1>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white/95 mt-5">
              Taste That Makes Every Moment Special
            </h2>

            <p className="mt-6 max-w-2xl text-white/75 text-base sm:text-lg leading-8">
              உங்கள் அனைத்து விழாக்களுக்கும் சிறந்த கேட்டரிங் சேவை.
              பாரம்பரிய சுவையுடன் தரமான உணவு, அனுபவமிக்க குழு மற்றும்
              சிறந்த சேவை.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-9">

              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-[#C9962C] hover:bg-[#b88621] text-[#4A0709] px-7 py-3.5 rounded-lg font-bold transition-all duration-300 shadow-lg"
              >
                <FiCalendar size={18} />
                Book Your Event
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-white/50 hover:border-[#C9962C] hover:bg-white/10 text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300"
              >
                Explore Our Services
                <FiArrowRight size={18} />
              </a>

            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12 mt-12 pt-8 border-t border-white/20">

              <div>
                <p className="text-2xl font-bold text-[#C9962C]">
                  10+
                </p>
                <p className="text-sm text-white/65 mt-1">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#C9962C]">
                  500+
                </p>
                <p className="text-sm text-white/65 mt-1">
                  Events Catered
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#C9962C]">
                  50+
                </p>
                <p className="text-sm text-white/65 mt-1">
                  Menu Varieties
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#C9962C]">
                  100%
                </p>
                <p className="text-sm text-white/65 mt-1">
                  Customer Satisfaction
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}
      <section className="py-16 md:py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-[#C9962C] text-sm font-bold tracking-[0.2em] uppercase">
              Why Choose Us
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A0709] mt-3">
              உங்கள் விழா எங்களின் பொறுப்பு
            </h2>

            <div className="flex justify-center items-center gap-3 mt-4">
              <span className="w-12 h-[1px] bg-[#C9962C]" />
              <span className="text-[#C9962C]">✦</span>
              <span className="w-12 h-[1px] bg-[#C9962C]" />
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

            {[
              {
                icon: <FiShield />,
                title: "Hygienic & Fresh",
                tamil: "சுத்தமான உணவு",
                text: "Quality ingredients and hygienic food preparation.",
              },
              {
                icon: <FiUsers />,
                title: "Experienced Team",
                tamil: "அனுபவமிக்க குழு",
                text: "Professional chefs and experienced catering staff.",
              },
              {
                icon: <FiClock />,
                title: "On-Time Service",
                tamil: "குறித்த நேர சேவை",
                text: "Reliable service delivered exactly when you need it.",
              },
              {
                icon: <FiStar />,
                title: "Traditional Taste",
                tamil: "பாரம்பரிய சுவை",
                text: "Authentic Tamil flavours made with care and love.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center p-7 rounded-2xl border border-[#eadfca] bg-[#FBF7EE] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="mx-auto w-14 h-14 rounded-full bg-[#7A0F12] text-[#C9962C] flex items-center justify-center text-2xl group-hover:bg-[#C9962C] group-hover:text-[#7A0F12] transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#4A0709] mt-5">
                  {item.title}
                </h3>

                <p className="text-[#4F6B2A] font-semibold text-sm mt-1">
                  {item.tamil}
                </p>

                <p className="text-sm text-gray-500 leading-6 mt-3">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section
        id="services"
        className="py-16 md:py-24 bg-[#FBF7EE]"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

            <div>
              <p className="text-[#C9962C] text-sm font-bold tracking-[0.2em] uppercase">
                What We Offer
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A0709] mt-3">
                எங்கள் சேவைகள்
              </h2>

              <p className="text-gray-600 mt-3 max-w-xl">
                From intimate family functions to grand celebrations,
                we provide complete catering solutions.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#7A0F12] font-bold hover:text-[#C9962C] transition"
            >
              View All Services
              <FiArrowRight />
            </a>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-[#eadfca] rounded-2xl p-7 hover:border-[#C9962C]/60 hover:shadow-xl transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-[#FBF7EE] flex items-center justify-center text-3xl group-hover:bg-[#7A0F12] transition-colors duration-300">
                  {service.icon}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#4A0709] mt-5">
                  {service.title}
                </h3>

                <p className="text-[#4F6B2A] font-semibold text-sm mt-1">
                  {service.tamil}
                </p>

                <p className="text-gray-500 text-sm leading-6 mt-3">
                  {service.description}
                </p>

                <a
                  href="#booking"
                  className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold text-[#7A0F12] group-hover:text-[#C9962C] transition"
                >
                  Enquire Now
                  <FiChevronRight />
                </a>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          ABOUT PREVIEW
      ===================================================== */}
      <section
        id="about"
        className="py-16 md:py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Image */}
            <div className="relative">

              <div className="rounded-3xl overflow-hidden">
                <img
                  src="/images/about-chefs.jpg"
                  alt="Thangam and Nandhini Catering Team"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 md:right-6 bg-[#7A0F12] text-white rounded-2xl px-7 py-5 shadow-xl">
                <p className="text-[#C9962C] text-3xl font-bold">
                  10+
                </p>

                <p className="text-sm text-white/80">
                  Years of Experience
                </p>
              </div>

              <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-[#C9962C]" />

            </div>

            {/* Content */}
            <div>

              <p className="text-[#C9962C] text-sm font-bold tracking-[0.2em] uppercase">
                About Us
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A0709] mt-3 leading-tight">
                பாரம்பரிய சுவை
                <br />
                <span className="text-[#7A0F12]">
                  நவீன சேவையுடன்
                </span>
              </h2>

              <p className="text-gray-600 leading-8 mt-6">
                Thangam & Nandhini Caterings is committed to serving
                delicious, hygienic and authentic food for every special
                occasion.
              </p>

              <p className="text-gray-600 leading-8 mt-4">
                திருமணம், பிறந்தநாள், நிச்சயதார்த்தம், கிரகப்பிரவேசம்,
                நிறுவன நிகழ்வுகள் மற்றும் அனைத்து விதமான விழாக்களுக்கும்
                சிறந்த கேட்டரிங் சேவையை வழங்குகிறோம்.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">

                {[
                  "Quality Ingredients",
                  "Experienced Chefs",
                  "Hygienic Preparation",
                  "On-Time Service",
                  "Affordable Packages",
                  "Traditional Taste",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#4F6B2A] text-white flex items-center justify-center shrink-0">
                      <FiCheck size={12} />
                    </span>

                    <span className="text-sm font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 bg-[#7A0F12] hover:bg-[#5f080b] text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Learn More
                <FiArrowRight />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          MENU SPECIALTIES
      ===================================================== */}
      <section
        id="menu"
        className="py-16 md:py-24 bg-[#FBF7EE]"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center">

            <p className="text-[#C9962C] text-sm font-bold tracking-[0.2em] uppercase">
              Our Food
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A0709] mt-3">
              எங்கள் சிறப்பு உணவுகள்
            </h2>

            <p className="text-gray-600 max-w-xl mx-auto mt-3">
              Authentic traditional dishes prepared with quality
              ingredients and lots of care.
            </p>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">

            {specialties.map((food) => (
              <div
                key={food.english}
                className="group bg-white rounded-2xl overflow-hidden border border-[#eadfca] hover:shadow-xl transition-all duration-300"
              >

                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={food.image}
                    alt={food.english}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="text-center py-4">
                  <h3 className="font-serif font-bold text-[#4A0709]">
                    {food.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {food.english}
                  </p>
                </div>

              </div>
            ))}

          </div>

          <div className="text-center mt-9">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-[#7A0F12] text-white hover:bg-[#5f080b] px-7 py-3 rounded-lg font-semibold transition"
            >
              View Full Menu
              <FiArrowRight />
            </a>
          </div>

        </div>
      </section>

      {/* =====================================================
          PACKAGES
      ===================================================== */}
      <section
        id="packages"
        className="py-16 md:py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-[#C9962C] text-sm font-bold tracking-[0.2em] uppercase">
              Catering Packages
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A0709] mt-3">
              Choose Your Perfect Package
            </h2>

            <p className="text-gray-600 mt-3">
              Flexible packages designed for every type of celebration.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-stretch">

            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-7 border flex flex-col ${
                  pkg.popular
                    ? "bg-[#7A0F12] border-[#7A0F12] text-white shadow-2xl md:-translate-y-3"
                    : "bg-[#FBF7EE] border-[#eadfca]"
                }`}
              >

                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9962C] text-[#4A0709] text-xs font-bold px-4 py-1.5 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <p
                  className={`text-xs uppercase tracking-[0.18em] font-bold ${
                    pkg.popular
                      ? "text-[#C9962C]"
                      : "text-[#C9962C]"
                  }`}
                >
                  {pkg.tamil}
                </p>

                <h3
                  className={`font-serif text-2xl font-bold mt-3 ${
                    pkg.popular
                      ? "text-white"
                      : "text-[#4A0709]"
                  }`}
                >
                  {pkg.name}
                </h3>

                <div className="mt-5">
                  <span
                    className={`text-4xl font-bold ${
                      pkg.popular
                        ? "text-[#C9962C]"
                        : "text-[#7A0F12]"
                    }`}
                  >
                    {pkg.price}
                  </span>

                  <span
                    className={`text-sm ml-2 ${
                      pkg.popular
                        ? "text-white/60"
                        : "text-gray-500"
                    }`}
                  >
                    {pkg.description}
                  </span>
                </div>

                <div className="w-full h-px bg-current opacity-10 my-6" />

                <ul className="space-y-3 flex-1">

                  {pkg.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          pkg.popular
                            ? "bg-[#C9962C] text-[#4A0709]"
                            : "bg-[#7A0F12] text-white"
                        }`}
                      >
                        <FiCheck size={12} />
                      </span>

                      <span
                        className={
                          pkg.popular
                            ? "text-white/80"
                            : "text-gray-600"
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}

                </ul>

                <a
                  href="#booking"
                  className={`mt-8 text-center py-3 rounded-lg font-bold text-sm transition ${
                    pkg.popular
                      ? "bg-[#C9962C] text-[#4A0709] hover:bg-[#b88621]"
                      : "bg-[#7A0F12] text-white hover:bg-[#5f080b]"
                  }`}
                >
                  Book This Package
                </a>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}
      <section
        id="gallery"
        className="py-16 md:py-24 bg-[#FBF7EE]"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">

            <div>
              <p className="text-[#C9962C] text-sm font-bold tracking-[0.2em] uppercase">
                Our Moments
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A0709] mt-3">
                எங்கள் நிகழ்வுகள்
              </h2>
            </div>

            <a
              href="#gallery"
              className="inline-flex items-center gap-2 text-[#7A0F12] font-bold"
            >
              View Gallery
              <FiArrowRight />
            </a>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">

            {gallery.map((image, index) => (
              <div
                key={index}
                className={`group overflow-hidden rounded-2xl ${
                  index === 0
                    ? "md:row-span-2"
                    : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Catering event ${index + 1}`}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    index === 0
                      ? "h-full min-h-[250px]"
                      : "h-52 md:h-60"
                  }`}
                />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          BOOKING CTA
      ===================================================== */}
      <section
        id="booking"
        className="relative py-20 overflow-hidden bg-[#7A0F12]"
      >

        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 border-[40px] border-[#C9962C] rounded-full" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 border-[30px] border-[#C9962C] rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-5 text-center">

          <div className="w-16 h-16 mx-auto rounded-full border border-[#C9962C]/50 flex items-center justify-center text-[#C9962C] text-2xl">
            <FiHeart />
          </div>

          <p className="text-[#C9962C] text-sm font-bold tracking-[0.2em] uppercase mt-6">
            Make Your Event Special
          </p>

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mt-3">
            உங்கள் விழாவை
            <br />
            <span className="text-[#C9962C]">
              நாங்கள் சிறப்பாக்குவோம்
            </span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto leading-7 mt-5">
            Tell us about your event and our team will help you
            choose the perfect menu and catering package.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C9962C] text-[#4A0709] hover:bg-[#b88621] px-7 py-3.5 rounded-lg font-bold transition"
            >
              <FiCalendar />
              Book Your Event
            </a>

            <a
              href="tel:+918220604334"
              className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-[#C9962C] text-white px-7 py-3.5 rounded-lg font-semibold transition"
            >
              <FiPhone />
              Call Us
            </a>

          </div>

        </div>
      </section>

      {/* =====================================================
          CONTACT PREVIEW
      ===================================================== */}
      <section
        id="contact"
        className="py-16 md:py-20 bg-white"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid md:grid-cols-3 gap-5">

            <div className="p-7 rounded-2xl bg-[#FBF7EE] border border-[#eadfca]">
              <div className="w-12 h-12 rounded-full bg-[#7A0F12] text-[#C9962C] flex items-center justify-center">
                📍
              </div>

              <h3 className="font-serif font-bold text-lg text-[#4A0709] mt-5">
                Visit Us
              </h3>

              <p className="text-sm text-gray-600 leading-6 mt-2">
                Musiri, Tiruchirappalli,
                <br />
                Tamil Nadu, India.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FBF7EE] border border-[#eadfca]">
              <div className="w-12 h-12 rounded-full bg-[#7A0F12] text-[#C9962C] flex items-center justify-center">
                <FiPhone />
              </div>

              <h3 className="font-serif font-bold text-lg text-[#4A0709] mt-5">
                Call Us
              </h3>

              <a
                href="tel:+918220604334"
                className="block text-sm text-gray-600 mt-2 hover:text-[#7A0F12]"
              >
                +91 82206 04334
              </a>

              <a
                href="tel:+916374628028"
                className="block text-sm text-gray-600 mt-1 hover:text-[#7A0F12]"
              >
                +91 63746 28028
              </a>
            </div>

            <div className="p-7 rounded-2xl bg-[#FBF7EE] border border-[#eadfca]">
              <div className="w-12 h-12 rounded-full bg-[#7A0F12] text-[#C9962C] flex items-center justify-center">
                <FiClock />
              </div>

              <h3 className="font-serif font-bold text-lg text-[#4A0709] mt-5">
                Working Hours
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Monday – Sunday
              </p>

              <p className="text-sm text-gray-600 mt-1">
                6:00 AM – 10:00 PM
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;