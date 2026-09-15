import React, { useEffect, useState } from "react";
import {
  FiPlus,
  FiTrash2,
  FiDollarSign,
  FiSearch,
} from "react-icons/fi";

const Income = () => {
  const [income, setIncome] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [source, setSource] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadIncome();
  }, []);

  const loadIncome = () => {
    const savedIncome = JSON.parse(
      localStorage.getItem("income") || "[]"
    );

    setIncome(savedIncome);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !source.trim() ||
      !description.trim() ||
      !amount ||
      !date
    ) {
      alert("அனைத்து தகவல்களையும் உள்ளிடவும்.");
      return;
    }

    const newIncome = {
      id: Date.now(),
      source: source.trim(),
      description: description.trim(),
      amount: Number(amount),
      date,
      createdAt: new Date().toLocaleDateString("ta-IN"),
    };

    const updatedIncome = [
      ...income,
      newIncome,
    ];

    localStorage.setItem(
      "income",
      JSON.stringify(updatedIncome)
    );

    setIncome(updatedIncome);

    setSource("");
    setDescription("");
    setAmount("");
    setDate("");

    setShowForm(false);
  };

  const deleteIncome = (id) => {
    const confirmDelete = window.confirm(
      "இந்த வருமான பதிவை நீக்க வேண்டுமா?"
    );

    if (!confirmDelete) return;

    const updatedIncome = income.filter(
      (item) => item.id !== id
    );

    setIncome(updatedIncome);

    localStorage.setItem(
      "income",
      JSON.stringify(updatedIncome)
    );
  };

  const filteredIncome = income.filter((item) => {
    const value = search.toLowerCase();

    return (
      item.source?.toLowerCase().includes(value) ||
      item.description?.toLowerCase().includes(value)
    );
  });

  const totalIncome = income.reduce(
    (total, item) =>
      total + Number(item.amount || 0),
    0
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            வருமானம்
          </h2>

          <p className="text-gray-500 mt-1">
            கேட்டரிங் சேவையின் அனைத்து வருமானங்களையும் நிர்வகிக்கவும்.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
          className="flex items-center justify-center gap-2
          px-5 py-2.5 rounded-lg
          bg-[#7A0F12] text-white font-semibold
          hover:bg-[#5f0b0e] transition"
        >
          <FiPlus size={18} />
          புதிய வருமானம்
        </button>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

        {/* Total Income */}
        <div className="bg-white rounded-xl border border-[#eadfcf] p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                மொத்த வருமானம்
              </p>

              <p className="text-2xl font-bold text-[#4F6B2A] mt-2">
                ₹{totalIncome.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#f2f7eb]
            flex items-center justify-center text-[#4F6B2A]">
              <FiDollarSign size={23} />
            </div>

          </div>

        </div>

        {/* Records */}
        <div className="bg-white rounded-xl border border-[#eadfcf] p-5 shadow-sm">

          <p className="text-sm text-gray-500">
            மொத்த பதிவுகள்
          </p>

          <p className="text-3xl font-bold text-gray-800 mt-1">
            {income.length}
          </p>

        </div>

        {/* Average */}
        <div className="bg-white rounded-xl border border-[#eadfcf] p-5 shadow-sm">

          <p className="text-sm text-gray-500">
            சராசரி வருமானம்
          </p>

          <p className="text-2xl font-bold text-[#7A0F12] mt-2">
            ₹
            {income.length > 0
              ? Math.round(
                  totalIncome / income.length
                ).toLocaleString("en-IN")
              : "0"}
          </p>

        </div>

      </div>

      {/* Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-[#eadfcf]
          shadow-sm p-5 mb-6"
        >

          <h3 className="text-lg font-bold text-[#7A0F12] mb-5">
            புதிய வருமான பதிவு
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Source */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                வருமான மூலம்
              </label>

              <select
                value={source}
                onChange={(e) =>
                  setSource(e.target.value)
                }
                className="w-full h-11 px-4
                border border-[#dfcba8]
                rounded-lg outline-none
                focus:border-[#7A0F12]"
              >
                <option value="">
                  மூலம் தேர்வு செய்யவும்
                </option>

                <option value="Catering Order">
                  Catering Order
                </option>

                <option value="Advance Payment">
                  Advance Payment
                </option>

                <option value="Event Booking">
                  Event Booking
                </option>

                <option value="Other">
                  மற்றவை
                </option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                விளக்கம்
              </label>

              <input
                type="text"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="வருமான விவரம்"
                className="w-full h-11 px-4
                border border-[#dfcba8]
                rounded-lg outline-none
                focus:border-[#7A0F12]"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                தொகை
              </label>

              <input
                type="number"
                min="0"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value)
                }
                placeholder="₹ 0"
                className="w-full h-11 px-4
                border border-[#dfcba8]
                rounded-lg outline-none
                focus:border-[#7A0F12]"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                தேதி
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) =>
                  setDate(e.target.value)
                }
                className="w-full h-11 px-4
                border border-[#dfcba8]
                rounded-lg outline-none
                focus:border-[#7A0F12]"
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-5">

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-5 py-2.5 rounded-lg
              border border-gray-300
              text-gray-600 font-semibold"
            >
              ரத்து
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg
              bg-[#7A0F12] text-white
              font-semibold hover:bg-[#5f0b0e]"
            >
              சேமிக்கவும்
            </button>

          </div>

        </form>
      )}

      {/* Search */}
      <div className="bg-white rounded-xl border border-[#eadfcf]
      shadow-sm p-4 mb-6">

        <div className="relative max-w-md">

          <FiSearch
            size={18}
            className="absolute left-3 top-1/2
            -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="வருமானத்தை தேடவும்..."
            className="w-full h-11 pl-10 pr-4
            border border-[#dfcba8]
            rounded-lg outline-none
            focus:border-[#7A0F12]"
          />

        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-[#eadfcf] shadow-sm">

        <div className="p-5 border-b border-[#eadfcf]">

          <h3 className="font-bold text-gray-800">
            வருமான பட்டியல்
          </h3>

        </div>

        <div className="p-5">

          {filteredIncome.length === 0 ? (

            <div className="text-center py-12">

              <FiDollarSign
                size={42}
                className="mx-auto text-gray-300 mb-3"
              />

              <p className="font-semibold text-gray-600">
                வருமான பதிவுகள் இல்லை
              </p>

              <p className="text-sm text-gray-400 mt-1">
                புதிய வருமானத்தை சேர்க்கவும்.
              </p>

            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[750px]">

                <thead>

                  <tr className="border-b border-[#eadfcf]">

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      தேதி
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      மூலம்
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      விளக்கம்
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      தொகை
                    </th>

                    <th className="text-right py-3 px-3 text-sm font-bold text-gray-600">
                      செயல்கள்
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredIncome.map((item) => (

                    <tr
                      key={item.id}
                      className="border-b border-gray-100
                      hover:bg-[#fffaf0]"
                    >

                      <td className="py-4 px-3 text-sm text-gray-500">
                        {item.date}
                      </td>

                      <td className="py-4 px-3">

                        <span className="px-3 py-1 rounded-full
                        bg-[#f2f7eb] text-[#4F6B2A]
                        text-xs font-bold">
                          {item.source}
                        </span>

                      </td>

                      <td className="py-4 px-3 font-semibold text-gray-800">
                        {item.description}
                      </td>

                      <td className="py-4 px-3 font-bold text-[#4F6B2A]">
                        ₹
                        {Number(
                          item.amount || 0
                        ).toLocaleString("en-IN")}
                      </td>

                      <td className="py-4 px-3">

                        <div className="flex justify-end">

                          <button
                            type="button"
                            onClick={() =>
                              deleteIncome(item.id)
                            }
                            className="p-2 rounded-lg
                            bg-red-50 text-red-600
                            hover:bg-red-100"
                            title="Delete"
                          >
                            <FiTrash2 size={17} />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default Income;