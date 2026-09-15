import React, { useEffect, useRef, useState } from "react";
import {
  FiDownload,
  FiRefreshCw,
  FiSave,
  FiCalendar,
  FiUser,
  FiMapPin,
  FiTrash2,
} from "react-icons/fi";
import html2canvas from "html2canvas";


// =====================================================
// PAGE 1 ITEMS
// =====================================================

const page1Items = [
  { name: "முருங்கைக்காய்", unit: "கிலோ" },
  { name: "தக்காளி", unit: "கிலோ" },
  { name: "கத்திரிக்காய்", unit: "கிலோ" },
  { name: "சின்ன வெங்காயம்", unit: "கிலோ" },
  { name: "பெரிய வெங்காயம்", unit: "கிலோ" },
  { name: "பரங்கிக்காய்", unit: "கிலோ" },
  { name: "பூசணிக்காய்", unit: "கிலோ" },
  { name: "புடலங்காய்", unit: "கிலோ" },
  { name: "அவரைக்காய்", unit: "கிலோ" },
  { name: "வெண்டைக்காய்", unit: "கிலோ" },
  { name: "முட்டைக்கோஸ்", unit: "கிலோ" },
  { name: "வாழைக்காய்", unit: "கிலோ" },
  { name: "கேரட்", unit: "கிலோ" },
  { name: "பீன்ஸ்", unit: "கிலோ" },
  { name: "பீட்ரூட்", unit: "கிலோ" },
  { name: "சவுக்காய்", unit: "கிலோ" },
  { name: "சேனை", unit: "கிலோ" },
  { name: "உ.கிழங்கு", unit: "கிலோ" },
  { name: "நூக்கல்", unit: "கிலோ" },
  { name: "காளிபிளவர்", unit: "கிலோ" },
  { name: "இஞ்சி", unit: "கிலோ" },
  { name: "ப.மிளகாய்", unit: "கிலோ" },
  { name: "மல்லி தலை", unit: "கட்டு" },
  { name: "கருவேப்பிலை", unit: "கட்டு" },
  { name: "புதினா", unit: "கட்டு" },
  { name: "எலுமிச்சை", unit: "கிலோ" },
  { name: "மாங்காய்", unit: "கிலோ" },
  { name: "தேங்காய்", unit: "எண்ணிக்கை" },
  { name: "நார்த்தங்காய்", unit: "கிலோ" },
  { name: "மா.இஞ்சி", unit: "கிலோ" },
  { name: "பச்சை பட்டாணி", unit: "கிலோ" },
  { name: "சோயா பீன்ஸ்", unit: "கிலோ" },
  { name: "பட்டர் பீன்ஸ்", unit: "கிலோ" },
  { name: "பட்டாணி", unit: "கிலோ" },
  { name: "பட்டன் காளான்", unit: "கிலோ" },
  { name: "இலை காளான்", unit: "கிலோ" },
  { name: "காளான் கோல்", unit: "கிலோ" },
  { name: "முள்ளங்கி", unit: "கிலோ" },
  { name: "குடை மிளகாய்", unit: "கிலோ" },
];


// =====================================================
// PAGE 2 ITEMS
// =====================================================

const page2Items = [
  { name: "பூண்டு", unit: "கிலோ" },
  { name: "புதினா சாமான்கள்", unit: "கிலோ" },
  { name: "இஞ்சி பூண்டு பேஸ்ட்", unit: "கிலோ" },
  { name: "மல்லித்தூள்", unit: "கிலோ" },
  { name: "மிளகாய் தூள்", unit: "கிலோ" },
  { name: "மஞ்சள் தூள்", unit: "கிலோ" },
  { name: "சாம்பார் தூள்", unit: "கிலோ" },
  { name: "ரசப்பொடி", unit: "கிலோ" },
  { name: "பெருங்காயம்", unit: "கிலோ" },
  { name: "சீரகம்", unit: "கிலோ" },
  { name: "சோம்பு", unit: "கிலோ" },
  { name: "வெந்தயம்", unit: "கிலோ" },
  { name: "கடுகு", unit: "கிலோ" },
  { name: "பட்டை", unit: "கிலோ" },
  { name: "லவங்கம்", unit: "கிலோ" },
  { name: "ஏலக்காய்", unit: "கிலோ" },
  { name: "பிரியாணி இலை", unit: "கிலோ" },
  { name: "அன்னாசிப்பூ", unit: "கிலோ" },
  { name: "மிளகு", unit: "கிலோ" },
  { name: "நெய்", unit: "கிலோ" },
  { name: "எண்ணெய்", unit: "லிட்டர்" },
  { name: "தேங்காய் எண்ணெய்", unit: "லிட்டர்" },
  { name: "சமையல் எண்ணெய்", unit: "லிட்டர்" },
  { name: "அரிசி", unit: "கிலோ" },
  { name: "பாசிப்பருப்பு", unit: "கிலோ" },
  { name: "துவரம் பருப்பு", unit: "கிலோ" },
  { name: "கடலை பருப்பு", unit: "கிலோ" },
  { name: "உளுத்தம் பருப்பு", unit: "கிலோ" },
  { name: "பச்சரிசி", unit: "கிலோ" },
  { name: "சேமியா", unit: "கிலோ" },
  { name: "ரவை", unit: "கிலோ" },
  { name: "சர்க்கரை", unit: "கிலோ" },
  { name: "உப்பு", unit: "கிலோ" },
  { name: "பால்", unit: "லிட்டர்" },
  { name: "தயிர்", unit: "லிட்டர்" },
  { name: "வெண்ணெய்", unit: "கிலோ" },
  { name: "பன்னீர்", unit: "கிலோ" },
  { name: "முந்திரி", unit: "கிலோ" },
  { name: "திராட்சை", unit: "கிலோ" },
  { name: "பாதாம்", unit: "கிலோ" },
  { name: "தேங்காய் துருவல்", unit: "கிலோ" },
  { name: "ஜவ்வரிசி", unit: "கிலோ" },
  { name: "அப்பளம்", unit: "பாக்கெட்" },
  { name: "ஊறுகாய்", unit: "பாக்கெட்" },
  { name: "வாழை இலை", unit: "எண்ணிக்கை" },
  { name: "தண்ணீர் பாட்டில்", unit: "எண்ணிக்கை" },
];


// =====================================================
// SPECIAL ITEMS
// =====================================================

const specialItems = [
  { name: "சாம்பார்", unit: "லிட்டர்" },
  { name: "ரசம்", unit: "லிட்டர்" },
  { name: "மோர்", unit: "லிட்டர்" },
  { name: "பாயாசம்", unit: "லிட்டர்" },
  { name: "கூட்டு", unit: "கிலோ" },
  { name: "பொரியல்", unit: "கிலோ" },
  { name: "அவியல்", unit: "கிலோ" },
  { name: "ஊறுகாய்", unit: "கிலோ" },
  { name: "அப்பளம்", unit: "எண்ணிக்கை" },
  { name: "வடகம்", unit: "எண்ணிக்கை" },
  { name: "வடை", unit: "எண்ணிக்கை" },
  { name: "பூரி", unit: "எண்ணிக்கை" },
];


// =====================================================
// COMPONENT
// =====================================================

const Menu = () => {
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);

  const [customerName, setCustomerName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventPlace, setEventPlace] = useState("");
  const [totalPeople, setTotalPeople] = useState("");

  const [quantities, setQuantities] = useState({});
  const [saved, setSaved] = useState(false);


  // ===================================================
  // LOAD SAVED DATA
  // ===================================================

  useEffect(() => {
    const savedData = JSON.parse(
      localStorage.getItem("cateringMenuSheet") || "{}"
    );

    if (savedData.customerName) {
      setCustomerName(savedData.customerName);
    }

    if (savedData.eventDate) {
      setEventDate(savedData.eventDate);
    }

    if (savedData.eventPlace) {
      setEventPlace(savedData.eventPlace);
    }

    if (savedData.totalPeople) {
      setTotalPeople(savedData.totalPeople);
    }

    if (savedData.quantities) {
      setQuantities(savedData.quantities);
    }
  }, []);


  // ===================================================
  // QUANTITY CHANGE
  // ===================================================

  const handleQuantityChange = (key, value) => {
    setQuantities((prev) => ({
      ...prev,
      [key]: value,
    }));

    setSaved(false);
  };


  // ===================================================
  // SAVE
  // ===================================================

  const saveSheet = () => {
    const data = {
      customerName,
      eventDate,
      eventPlace,
      totalPeople,
      quantities,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "cateringMenuSheet",
      JSON.stringify(data)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };


  // ===================================================
  // CLEAR
  // ===================================================

  const clearSheet = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all entered quantities?"
    );

    if (!confirmClear) return;

    setCustomerName("");
    setEventDate("");
    setEventPlace("");
    setTotalPeople("");
    setQuantities({});

    localStorage.removeItem("cateringMenuSheet");
  };


  // ===================================================
  // DOWNLOAD IMAGE
  // ===================================================

  const downloadImage = async (element, fileName) => {
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 3,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      const image = canvas.toDataURL("image/png", 1.0);

      const link = document.createElement("a");

      link.href = image;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Image download failed:", error);
      alert("Unable to download image. Please try again.");
    }
  };


  // ===================================================
  // DOWNLOAD BOTH
  // ===================================================

  const downloadBoth = async () => {
    await downloadImage(
      page1Ref.current,
      "Thangam-Nandhini-Catering-Page-1.png"
    );

    await new Promise((resolve) =>
      setTimeout(resolve, 700)
    );

    await downloadImage(
      page2Ref.current,
      "Thangam-Nandhini-Catering-Page-2.png"
    );
  };


  // ===================================================
  // TABLE ROW
  // ===================================================

  const renderItemRow = (item, index, prefix) => {
    const key = `${prefix}-${index}`;

    return (
      <tr
        key={key}
        className="border-b border-[#6b9f94]"
      >
        <td className="px-3 py-2 text-sm font-medium text-gray-800">
          {index + 1}
        </td>

        <td className="px-3 py-2 text-sm font-semibold text-gray-800">
          {item.name}
        </td>

        <td className="px-2 py-1 text-center text-sm text-gray-600">
          {item.unit}
        </td>

        <td className="px-2 py-1">
          <input
            type="text"
            value={quantities[key] || ""}
            onChange={(e) =>
              handleQuantityChange(key, e.target.value)
            }
            className="
              w-full
              min-w-[75px]
              h-8
              px-2
              text-center
              text-sm
              font-semibold
              text-gray-800
              bg-white
              border
              border-[#b7cfc9]
              rounded
              outline-none
              focus:border-[#7A0F12]
              focus:ring-1
              focus:ring-[#7A0F12]
            "
            placeholder=""
          />
        </td>
      </tr>
    );
  };


  // ===================================================
  // PAGE HEADER
  // ===================================================

  const renderSheetHeader = (pageNumber) => {
    return (
      <>
        {/* Logo / Company */}
        <div className="border-2 border-[#4c8c80]">

          <div className="grid grid-cols-[1fr_2fr_1fr] items-center">

            {/* Left */}
            <div className="p-3 text-center border-r border-[#4c8c80]">
              <div className="text-xs text-gray-600">
                தங்கம் & நந்தினி
              </div>

              <div className="text-sm font-bold text-[#7A0F12]">
                கேட்டரிங்
              </div>
            </div>

            {/* Center */}
            <div className="p-3 text-center">

              <h1 className="text-xl sm:text-2xl font-bold text-[#4F6B2A]">
                தங்கம் & நந்தினி
              </h1>

              <h2 className="text-lg font-bold text-[#7A0F12] mt-1">
                கேட்டரிங் சர்வீஸ்
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                CATERING SERVICE
              </p>

            </div>

            {/* Right */}
            <div className="p-3 text-center border-l border-[#4c8c80]">

              <p className="text-xs text-gray-600">
                Cell
              </p>

              <p className="font-bold text-sm text-[#7A0F12]">
                82206 04334
              </p>

              <p className="font-bold text-sm text-[#7A0F12]">
                63746 28028
              </p>

            </div>

          </div>

        </div>


        {/* Customer details */}
        <div className="border-x-2 border-b-2 border-[#4c8c80]">

          <div className="grid grid-cols-1 sm:grid-cols-2">

            <div className="border-b sm:border-b-0 sm:border-r border-[#4c8c80] p-3">

              <div className="flex items-center gap-2 mb-2">

                <FiUser
                  size={15}
                  className="text-[#7A0F12]"
                />

                <span className="text-sm font-bold">
                  வாடிக்கையாளர் பெயர்
                </span>

              </div>

              <input
                value={customerName}
                onChange={(e) =>
                  setCustomerName(e.target.value)
                }
                className="
                  w-full
                  h-9
                  px-3
                  border
                  border-[#b7cfc9]
                  rounded
                  outline-none
                  text-sm
                  bg-white
                  focus:border-[#7A0F12]
                "
                placeholder="Customer Name"
              />

            </div>


            <div className="p-3">

              <div className="flex items-center gap-2 mb-2">

                <FiCalendar
                  size={15}
                  className="text-[#7A0F12]"
                />

                <span className="text-sm font-bold">
                  தேதி
                </span>

              </div>

              <input
                type="date"
                value={eventDate}
                onChange={(e) =>
                  setEventDate(e.target.value)
                }
                className="
                  w-full
                  h-9
                  px-3
                  border
                  border-[#b7cfc9]
                  rounded
                  outline-none
                  text-sm
                  bg-white
                "
              />

            </div>


            <div className="border-t border-[#4c8c80] p-3">

              <div className="flex items-center gap-2 mb-2">

                <FiMapPin
                  size={15}
                  className="text-[#7A0F12]"
                />

                <span className="text-sm font-bold">
                  இடம்
                </span>

              </div>

              <input
                value={eventPlace}
                onChange={(e) =>
                  setEventPlace(e.target.value)
                }
                className="
                  w-full
                  h-9
                  px-3
                  border
                  border-[#b7cfc9]
                  rounded
                  outline-none
                  text-sm
                  bg-white
                "
                placeholder="Event Place"
              />

            </div>


            <div className="border-t sm:border-l border-[#4c8c80] p-3">

              <div className="flex items-center gap-2 mb-2">

                <FiUser
                  size={15}
                  className="text-[#7A0F12]"
                />

                <span className="text-sm font-bold">
                  நபர்கள் எண்ணிக்கை
                </span>

              </div>

              <input
                type="number"
                value={totalPeople}
                onChange={(e) =>
                  setTotalPeople(e.target.value)
                }
                className="
                  w-full
                  h-9
                  px-3
                  border
                  border-[#b7cfc9]
                  rounded
                  outline-none
                  text-sm
                  bg-white
                "
                placeholder="Number of People"
              />

            </div>

          </div>

        </div>


        {/* Page number */}
        <div className="flex justify-between items-center mt-3 mb-2">

          <div className="text-sm font-bold text-[#7A0F12]">
            சமையல் பொருட்கள் பட்டியல்
          </div>

          <div className="text-xs font-semibold text-gray-500">
            Page {pageNumber}
          </div>

        </div>
      </>
    );
  };


  // ===================================================
  // RENDER
  // ===================================================

  return (
    <div className="bg-[#f5f1e8] min-h-screen p-4 sm:p-6">

      {/* =================================================
          TOP CONTROL BAR
      ================================================= */}

      <div className="max-w-[1100px] mx-auto mb-6">

        <div className="bg-white rounded-xl border border-[#eadfcf] shadow-sm p-4">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            <div>

              <h1 className="text-2xl font-bold text-[#7A0F12]">
                Catering Menu Sheet
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                சமையல் பொருட்கள் மற்றும் அளவுகளை நிரப்பவும்
              </p>

            </div>


            <div className="flex flex-wrap gap-2">

              <button
                type="button"
                onClick={saveSheet}
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-lg
                  bg-[#4F6B2A]
                  text-white
                  text-sm
                  font-semibold
                  hover:bg-[#3f5620]
                  transition
                "
              >
                <FiSave size={17} />

                {saved ? "Saved" : "Save"}
              </button>


              <button
                type="button"
                onClick={clearSheet}
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-lg
                  border
                  border-red-200
                  bg-red-50
                  text-red-600
                  text-sm
                  font-semibold
                  hover:bg-red-100
                "
              >
                <FiTrash2 size={17} />

                Clear
              </button>


              <button
                type="button"
                onClick={() =>
                  downloadImage(
                    page1Ref.current,
                    "Thangam-Nandhini-Catering-Page-1.png"
                  )
                }
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-lg
                  bg-[#7A0F12]
                  text-white
                  text-sm
                  font-semibold
                  hover:bg-[#5f0b0e]
                "
              >
                <FiDownload size={17} />

                Page 1
              </button>


              <button
                type="button"
                onClick={() =>
                  downloadImage(
                    page2Ref.current,
                    "Thangam-Nandhini-Catering-Page-2.png"
                  )
                }
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-lg
                  bg-[#7A0F12]
                  text-white
                  text-sm
                  font-semibold
                  hover:bg-[#5f0b0e]
                "
              >
                <FiDownload size={17} />

                Page 2
              </button>


              <button
                type="button"
                onClick={downloadBoth}
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-lg
                  bg-[#222]
                  text-white
                  text-sm
                  font-semibold
                  hover:bg-black
                "
              >
                <FiDownload size={17} />

                Both
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          PAGE 1
      ================================================= */}

      <div
        ref={page1Ref}
        className="
          w-full
          max-w-[900px]
          mx-auto
          bg-white
          shadow-xl
          p-5
          sm:p-8
          mb-8
        "
        style={{
          minHeight: "1120px",
        }}
      >

        {renderSheetHeader(1)}


        <div className="border-2 border-t-0 border-[#4c8c80]">

          <table className="w-full border-collapse">

            <thead>

              <tr className="bg-[#e3f0ec]">

                <th className="w-[45px] border-r border-[#4c8c80] px-2 py-2 text-xs font-bold">
                  எண்
                </th>

                <th className="text-left border-r border-[#4c8c80] px-3 py-2 text-xs font-bold">
                  பொருள்
                </th>

                <th className="w-[90px] border-r border-[#4c8c80] px-2 py-2 text-xs font-bold">
                  அளவு
                </th>

                <th className="w-[120px] px-2 py-2 text-xs font-bold">
                  தேவையான அளவு
                </th>

              </tr>

            </thead>


            <tbody>

              {page1Items.map((item, index) =>
                renderItemRow(
                  item,
                  index,
                  "page1"
                )
              )}

            </tbody>

          </table>

        </div>


        {/* Special food section */}

        <div className="mt-5">

          <div className="
            bg-[#e3f0ec]
            border-2
            border-[#4c8c80]
            px-4
            py-2
            text-center
            font-bold
            text-[#4F6B2A]
          ">
            தேவையான சமையல் பாத்திரங்கள் / சிறப்பு பொருட்கள்
          </div>


          <table className="w-full border-collapse border-x-2 border-b-2 border-[#4c8c80]">

            <thead>

              <tr>

                <th className="w-[45px] border-r border-[#4c8c80] px-2 py-2 text-xs">
                  எண்
                </th>

                <th className="text-left border-r border-[#4c8c80] px-3 py-2 text-xs">
                  பொருள்
                </th>

                <th className="w-[90px] border-r border-[#4c8c80] px-2 py-2 text-xs">
                  அளவு
                </th>

                <th className="w-[120px] px-2 py-2 text-xs">
                  தேவையான அளவு
                </th>

              </tr>

            </thead>


            <tbody>

              {specialItems.map((item, index) =>
                renderItemRow(
                  item,
                  index,
                  "special"
                )
              )}

            </tbody>

          </table>

        </div>


        {/* Notes */}

        <div className="mt-5 border-2 border-[#4c8c80]">

          <div className="bg-[#e3f0ec] px-3 py-2 font-bold text-sm">
            குறிப்புகள்
          </div>

          <div className="h-20 p-3">

            <p className="text-xs text-gray-400">
              தேவையான குறிப்புகளை இங்கே எழுதலாம்
            </p>

          </div>

        </div>


        <div className="flex justify-between mt-4 text-xs text-gray-500">

          <span>
            Thangam & Nandhini Catering
          </span>

          <span>
            Page 1
          </span>

        </div>

      </div>


      {/* =================================================
          PAGE 2
      ================================================= */}

      <div
        ref={page2Ref}
        className="
          w-full
          max-w-[900px]
          mx-auto
          bg-white
          shadow-xl
          p-5
          sm:p-8
        "
        style={{
          minHeight: "1120px",
        }}
      >

        {renderSheetHeader(2)}


        <div className="border-2 border-[#4c8c80]">

          <table className="w-full border-collapse">

            <thead>

              <tr className="bg-[#e3f0ec]">

                <th className="w-[45px] border-r border-[#4c8c80] px-2 py-2 text-xs font-bold">
                  எண்
                </th>

                <th className="text-left border-r border-[#4c8c80] px-3 py-2 text-xs font-bold">
                  பொருள்
                </th>

                <th className="w-[90px] border-r border-[#4c8c80] px-2 py-2 text-xs font-bold">
                  அளவு
                </th>

                <th className="w-[120px] px-2 py-2 text-xs font-bold">
                  தேவையான அளவு
                </th>

              </tr>

            </thead>


            <tbody>

              {page2Items.map((item, index) =>
                renderItemRow(
                  item,
                  index,
                  "page2"
                )
              )}

            </tbody>

          </table>

        </div>


        {/* Additional notes */}

        <div className="mt-6 border-2 border-[#4c8c80]">

          <div className="
            bg-[#e3f0ec]
            px-4
            py-2
            text-center
            font-bold
            text-[#4F6B2A]
          ">
            தேவையான பிற பொருட்கள் / குறிப்புகள்
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2">

            {[
              "காகித தட்டு",
              "பிளாஸ்டிக் கப்",
              "டிஷ்யூ பேப்பர்",
              "ஸ்பூன்",
              "ஃபோர்க்",
              "கேரி பேக்",
              "தண்ணீர் பாட்டில்",
              "மற்றவை",
            ].map((item, index) => {

              const key = `extra-${index}`;

              return (
                <div
                  key={key}
                  className="
                    flex
                    items-center
                    border-b
                    border-[#4c8c80]
                    p-2
                  "
                >

                  <div className="flex-1 text-sm font-semibold">
                    {item}
                  </div>

                  <input
                    type="text"
                    value={quantities[key] || ""}
                    onChange={(e) =>
                      handleQuantityChange(
                        key,
                        e.target.value
                      )
                    }
                    className="
                      w-24
                      h-8
                      px-2
                      text-center
                      border
                      border-[#b7cfc9]
                      rounded
                      outline-none
                      text-sm
                      font-semibold
                      focus:border-[#7A0F12]
                    "
                  />

                </div>
              );

            })}

          </div>

        </div>


        {/* Final notes */}

        <div className="mt-6 border-2 border-[#4c8c80]">

          <div className="bg-[#e3f0ec] px-3 py-2 font-bold text-sm">
            சிறப்பு குறிப்புகள்
          </div>

          <div className="h-32 p-3">

            <p className="text-xs text-gray-400">
              Additional notes...
            </p>

          </div>

        </div>


        {/* Signature */}

        <div className="grid grid-cols-2 gap-10 mt-14">

          <div className="text-center">

            <div className="border-b border-gray-500 mb-2" />

            <p className="text-xs font-semibold text-gray-600">
              தயாரித்தவர்
            </p>

          </div>


          <div className="text-center">

            <div className="border-b border-gray-500 mb-2" />

            <p className="text-xs font-semibold text-gray-600">
              உறுதி செய்தவர்
            </p>

          </div>

        </div>


        <div className="flex justify-between mt-8 text-xs text-gray-500">

          <span>
            Thangam & Nandhini Catering
          </span>

          <span>
            Page 2
          </span>

        </div>

      </div>

    </div>
  );
};

export default Menu;