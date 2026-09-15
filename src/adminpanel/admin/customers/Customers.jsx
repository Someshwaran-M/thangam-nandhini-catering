import React, { useEffect, useState } from "react";

import {
  FiUsers,
  FiUserPlus,
  FiTrash2,
  FiSearch,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = () => {
    const savedCustomers = JSON.parse(
      localStorage.getItem("customers") || "[]"
    );

    setCustomers(savedCustomers);
  };

  const handleCreateCustomer = (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert("வாடிக்கையாளர் பெயர் மற்றும் தொலைபேசி எண்ணை உள்ளிடவும்.");
      return;
    }

    const existingCustomers = JSON.parse(
      localStorage.getItem("customers") || "[]"
    );

    const phoneExists = existingCustomers.some(
      (customer) => customer.phone === phone.trim()
    );

    if (phoneExists) {
      alert("இந்த தொலைபேசி எண் ஏற்கனவே உள்ளது.");
      return;
    }

    const newCustomer = {
      id: Date.now(),
      customerId: `CUS${Date.now().toString().slice(-5)}`,
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
      createdAt: new Date().toLocaleDateString("ta-IN"),
    };

    const updatedCustomers = [
      ...existingCustomers,
      newCustomer,
    ];

    localStorage.setItem(
      "customers",
      JSON.stringify(updatedCustomers)
    );

    setCustomers(updatedCustomers);

    setName("");
    setPhone("");
    setAddress("");

    setShowForm(false);
  };

  const deleteCustomer = (id) => {
    const confirmDelete = window.confirm(
      "இந்த வாடிக்கையாளரை நீக்க வேண்டுமா?"
    );

    if (!confirmDelete) return;

    const updatedCustomers = customers.filter(
      (customer) => customer.id !== id
    );

    setCustomers(updatedCustomers);

    localStorage.setItem(
      "customers",
      JSON.stringify(updatedCustomers)
    );
  };

  const filteredCustomers = customers.filter((customer) => {
    const value = search.toLowerCase();

    return (
      customer.name?.toLowerCase().includes(value) ||
      customer.phone?.toLowerCase().includes(value) ||
      customer.customerId?.toLowerCase().includes(value) ||
      customer.address?.toLowerCase().includes(value)
    );
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            வாடிக்கையாளர்கள்
          </h2>

          <p className="text-gray-500 mt-1">
            கேட்டரிங் வாடிக்கையாளர்களை நிர்வகிக்கவும்.
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
          <FiUserPlus size={18} />

          புதிய வாடிக்கையாளர்
        </button>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

        <div className="bg-white rounded-xl border border-[#eadfcf] p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                மொத்த வாடிக்கையாளர்கள்
              </p>

              <p className="text-3xl font-bold text-[#7A0F12] mt-1">
                {customers.length}
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#fff4e0]
            flex items-center justify-center text-[#7A0F12]">
              <FiUsers size={23} />
            </div>

          </div>

        </div>

        <div className="bg-white rounded-xl border border-[#eadfcf] p-5 shadow-sm">

          <p className="text-sm text-gray-500">
            தேடல் முடிவுகள்
          </p>

          <p className="text-3xl font-bold text-gray-800 mt-1">
            {filteredCustomers.length}
          </p>

        </div>

        <div className="bg-white rounded-xl border border-[#eadfcf] p-5 shadow-sm">

          <p className="text-sm text-gray-500">
            புதிய வாடிக்கையாளர்கள்
          </p>

          <p className="text-3xl font-bold text-[#4F6B2A] mt-1">
            {customers.filter(
              (customer) =>
                customer.createdAt ===
                new Date().toLocaleDateString("ta-IN")
            ).length}
          </p>

        </div>

      </div>

      {/* Create Form */}
      {showForm && (
        <form
          onSubmit={handleCreateCustomer}
          className="bg-white rounded-2xl border border-[#eadfcf]
          shadow-sm p-5 mb-6"
        >

          <h3 className="text-lg font-bold text-[#7A0F12] mb-5">
            புதிய வாடிக்கையாளர்
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                வாடிக்கையாளர் பெயர்
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="பெயரை உள்ளிடவும்"
                className="w-full h-11 px-4
                border border-[#dfcba8]
                rounded-lg outline-none
                focus:border-[#7A0F12]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                தொலைபேசி எண்
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                placeholder="9876543210"
                maxLength="10"
                className="w-full h-11 px-4
                border border-[#dfcba8]
                rounded-lg outline-none
                focus:border-[#7A0F12]"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                முகவரி
              </label>

              <input
                type="text"
                value={address}
                onChange={(e) =>
                  setAddress(e.target.value)
                }
                placeholder="முகவரியை உள்ளிடவும்"
                className="w-full h-11 px-4
                border border-[#dfcba8]
                rounded-lg outline-none
                focus:border-[#7A0F12]"
              />
            </div>

          </div>

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
              வாடிக்கையாளரை சேமிக்கவும்
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
            placeholder="வாடிக்கையாளரை தேடவும்..."
            className="w-full h-11 pl-10 pr-4
            border border-[#dfcba8]
            rounded-lg outline-none
            focus:border-[#7A0F12]"
          />

        </div>

      </div>

      {/* Customer Table */}
      <div className="bg-white rounded-2xl border border-[#eadfcf] shadow-sm">

        <div className="p-5 border-b border-[#eadfcf]">

          <h3 className="font-bold text-gray-800">
            வாடிக்கையாளர் பட்டியல்
          </h3>

        </div>

        <div className="p-5">

          {filteredCustomers.length === 0 ? (

            <div className="text-center py-12">

              <FiUsers
                size={42}
                className="mx-auto text-gray-300 mb-3"
              />

              <p className="font-semibold text-gray-600">
                வாடிக்கையாளர்கள் இல்லை
              </p>

              <p className="text-sm text-gray-400 mt-1">
                புதிய வாடிக்கையாளரை சேர்க்கவும்.
              </p>

            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[850px]">

                <thead>

                  <tr className="border-b border-[#eadfcf]">

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      Customer ID
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      பெயர்
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      தொலைபேசி
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      முகவரி
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      தேதி
                    </th>

                    <th className="text-right py-3 px-3 text-sm font-bold text-gray-600">
                      செயல்கள்
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredCustomers.map((customer) => (

                    <tr
                      key={customer.id}
                      className="border-b border-gray-100
                      hover:bg-[#fffaf0]"
                    >

                      <td className="py-4 px-3">
                        <span className="font-mono text-sm font-semibold text-[#7A0F12]">
                          {customer.customerId}
                        </span>
                      </td>

                      <td className="py-4 px-3">

                        <div className="flex items-center gap-2">

                          <div className="w-9 h-9 rounded-full
                          bg-[#fff4e0] text-[#7A0F12]
                          flex items-center justify-center">
                            <FiUsers size={16} />
                          </div>

                          <span className="font-semibold text-gray-800">
                            {customer.name}
                          </span>

                        </div>

                      </td>

                      <td className="py-4 px-3">

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FiPhone size={15} />
                          {customer.phone}
                        </div>

                      </td>

                      <td className="py-4 px-3">

                        <div className="flex items-center gap-2
                        text-sm text-gray-500 max-w-[220px]">

                          <FiMapPin
                            size={15}
                            className="shrink-0"
                          />

                          <span className="truncate">
                            {customer.address || "—"}
                          </span>

                        </div>

                      </td>

                      <td className="py-4 px-3 text-sm text-gray-500">
                        {customer.createdAt}
                      </td>

                      <td className="py-4 px-3">

                        <div className="flex justify-end">

                          <button
                            type="button"
                            onClick={() =>
                              deleteCustomer(customer.id)
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

export default Customers;