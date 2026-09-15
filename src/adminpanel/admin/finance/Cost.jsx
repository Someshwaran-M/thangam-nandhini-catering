import React, { useEffect, useState } from "react";
import {
  FiPlus,
  FiTrash2,
  FiDollarSign,
  FiSearch,
} from "react-icons/fi";

const Cost = () => {
  const [costs, setCosts] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCosts();
  }, []);

  const loadCosts = () => {
    const savedCosts = JSON.parse(
      localStorage.getItem("costs") || "[]"
    );

    setCosts(savedCosts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !category.trim() ||
      !description.trim() ||
      !amount ||
      !date
    ) {
      alert("அனைத்து தகவல்களையும் உள்ளிடவும்.");
      return;
    }

    const newCost = {
      id: Date.now(),
      category: category.trim(),
      description: description.trim(),
      amount: Number(amount),
      date,
      createdAt: new Date().toLocaleDateString("ta-IN"),
    };

    const updatedCosts = [
      ...costs,
      newCost,
    ];

    localStorage.setItem(
      "costs",
      JSON.stringify(updatedCosts)
    );

    setCosts(updatedCosts);

    setCategory("");
    setDescription("");
    setAmount("");
    setDate("");

    setShowForm(false);
  };

  const deleteCost = (id) => {
    const confirmDelete = window.confirm(
      "இந்த செலவு பதிவை நீக்க வேண்டுமா?"
    );

    if (!confirmDelete) return;

    const updatedCosts = costs.filter(
      (cost) => cost.id !== id
    );

    setCosts(updatedCosts);

    localStorage.setItem(
      "costs",
      JSON.stringify(updatedCosts)
    );
  };

  const filteredCosts = costs.filter((cost) => {
    const value = search.toLowerCase();

    return (
      cost.category
        ?.toLowerCase()
        .includes(value) ||
      cost.description
        ?.toLowerCase()
        .includes(value)
    );
  });

  const totalCost = costs.reduce(
    (total, cost) =>
      total + Number(cost.amount || 0),
    0
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            செலவுகள்
          </h2>

          <p className="text-gray-500 mt-1">
            கேட்டரிங் சேவையின் அனைத்து செலவுகளையும் நிர்வகிக்கவும்.
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

          புதிய செலவு
        </button>

      </div>

      {/* Total Cost */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

        <div className="bg-white rounded-xl border border-[#eadfcf] p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                மொத்த செலவு
              </p>

              <p className="text-2xl font-bold text-[#7A0F12] mt-2">
                ₹{totalCost.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#fff4e0]
            flex items-center justify-center text-[#7A0F12]">
              <FiDollarSign size={23} />
            </div>

          </div>

        </div>

        <div className="bg-white rounded-xl border border-[#eadfcf] p-5 shadow-sm">

          <p className="text-sm text-gray-500">
            மொத்த பதிவுகள்
          </p>

          <p className="text-3xl font-bold text-gray-800 mt-1">
            {costs.length}
          </p>

        </div>

        <div className="bg-white rounded-xl border border-[#eadfcf] p-5 shadow-sm">

          <p className="text-sm text-gray-500">
            சராசரி செலவு
          </p>

          <p className="text-2xl font-bold text-[#4F6B2A] mt-2">
            ₹
            {costs.length > 0
              ? Math.round(
                  totalCost / costs.length
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
            புதிய செலவு பதிவு
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                வகை
              </label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                className="w-full h-11 px-4 border border-[#dfcba8]
                rounded-lg outline-none focus:border-[#7A0F12]"
              >
                <option value="">
                  வகையை தேர்வு செய்யவும்
                </option>

                <option value="Food">
                  உணவு பொருட்கள்
                </option>

                <option value="Transport">
                  போக்குவரத்து
                </option>

                <option value="Employee">
                  பணியாளர்
                </option>

                <option value="Equipment">
                  உபகரணங்கள்
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
                placeholder="செலவு விவரம்"
                className="w-full h-11 px-4 border border-[#dfcba8]
                rounded-lg outline-none focus:border-[#7A0F12]"
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
                className="w-full h-11 px-4 border border-[#dfcba8]
                rounded-lg outline-none focus:border-[#7A0F12]"
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
                className="w-full h-11 px-4 border border-[#dfcba8]
                rounded-lg outline-none focus:border-[#7A0F12]"
              />
            </div>

          </div>

          <div className="flex justify-end gap-3 mt-5">

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-5 py-2.5 rounded-lg
              border border-gray-300 text-gray-600
              font-semibold"
            >
              ரத்து
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg
              bg-[#7A0F12] text-white font-semibold"
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
            className="absolute left-3 top-1/2
            -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="செலவை தேடவும்..."
            className="w-full h-11 pl-10 pr-4
            border border-[#dfcba8] rounded-lg
            outline-none focus:border-[#7A0F12]"
          />

        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-[#eadfcf] shadow-sm">

        <div className="p-5 border-b border-[#eadfcf]">

          <h3 className="font-bold text-gray-800">
            செலவு பட்டியல்
          </h3>

        </div>

        <div className="p-5">

          {filteredCosts.length === 0 ? (

            <div className="text-center py-12">

              <FiDollarSign
                size={40}
                className="mx-auto text-gray-300 mb-3"
              />

              <p className="font-semibold text-gray-600">
                செலவு பதிவுகள் இல்லை
              </p>

              <p className="text-sm text-gray-400 mt-1">
                புதிய செலவை சேர்க்கவும்.
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
                      வகை
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

                  {filteredCosts.map((cost) => (

                    <tr
                      key={cost.id}
                      className="border-b border-gray-100 hover:bg-[#fffaf0]"
                    >

                      <td className="py-4 px-3 text-sm text-gray-500">
                        {cost.date}
                      </td>

                      <td className="py-4 px-3">

                        <span className="px-3 py-1 rounded-full
                        bg-[#fff4e0] text-[#7A0F12]
                        text-xs font-bold">
                          {cost.category}
                        </span>

                      </td>

                      <td className="py-4 px-3 font-semibold text-gray-800">
                        {cost.description}
                      </td>

                      <td className="py-4 px-3 font-bold text-[#7A0F12]">
                        ₹
                        {Number(
                          cost.amount || 0
                        ).toLocaleString("en-IN")}
                      </td>

                      <td className="py-4 px-3">

                        <div className="flex justify-end">

                          <button
                            type="button"
                            onClick={() =>
                              deleteCost(cost.id)
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

export default Cost;