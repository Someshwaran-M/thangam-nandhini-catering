import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiX,
  FiSave,
} from "react-icons/fi";

const UpcomingOrders = () => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    eventDate: "",
    eventType: "",
    guests: "",
    address: "",
    menu: "",
    amount: "",
  });

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const upcomingOrders = savedOrders.filter(
      (order) => order.status === "Upcoming"
    );

    setOrders(upcomingOrders);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      customerName: "",
      phone: "",
      eventDate: "",
      eventType: "",
      guests: "",
      address: "",
      menu: "",
      amount: "",
    });

    setEditingId(null);
    setShowForm(false);
  };

  const saveToLocalStorage = (updatedUpcomingOrders) => {
    const allOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const upcomingIds = new Set(
      updatedUpcomingOrders.map((order) => order.id)
    );

    const otherOrders = allOrders.filter(
      (order) => !upcomingIds.has(order.id)
    );

    const updatedAllOrders = [
      ...updatedUpcomingOrders,
      ...otherOrders,
    ];

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedAllOrders)
    );

    setOrders(updatedUpcomingOrders);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.customerName.trim()) {
      alert("Please enter customer name");
      return;
    }

    if (!formData.phone.trim()) {
      alert("Please enter phone number");
      return;
    }

    if (!formData.eventDate) {
      alert("Please select event date");
      return;
    }

    if (!formData.eventType.trim()) {
      alert("Please enter event type");
      return;
    }

    if (!formData.guests) {
      alert("Please enter number of guests");
      return;
    }

    let updatedOrders;

    if (editingId) {
      updatedOrders = orders.map((order) =>
        order.id === editingId
          ? {
              ...order,
              ...formData,
              guests: Number(formData.guests),
              amount: Number(formData.amount || 0),
              status: "Upcoming",
            }
          : order
      );
    } else {
      const newOrder = {
        id: Date.now(),
        orderId: `ORD-${Date.now()
          .toString()
          .slice(-6)}`,
        ...formData,
        guests: Number(formData.guests),
        amount: Number(formData.amount || 0),
        status: "Upcoming",
        createdAt: new Date().toISOString(),
      };

      updatedOrders = [newOrder, ...orders];
    }

    saveToLocalStorage(updatedOrders);
    resetForm();
  };

  const handleEdit = (order) => {
    setEditingId(order.id);

    setFormData({
      customerName: order.customerName || "",
      phone: order.phone || "",
      eventDate: order.eventDate || "",
      eventType: order.eventType || "",
      guests: order.guests || "",
      address: order.address || "",
      menu: order.menu || "",
      amount: order.amount || "",
    });

    setShowForm(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmDelete) return;

    const allOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const updatedAllOrders = allOrders.filter(
      (order) => order.id !== id
    );

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedAllOrders)
    );

    setOrders((prev) =>
      prev.filter((order) => order.id !== id)
    );
  };

  const changeStatus = (id, status) => {
    const allOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const updatedAllOrders = allOrders.map((order) =>
      order.id === id
        ? {
            ...order,
            status,
          }
        : order
    );

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedAllOrders)
    );

    loadOrders();
  };

  const filteredOrders = orders.filter((order) => {
    const keyword = search.toLowerCase();

    return (
      order.customerName
        ?.toLowerCase()
        .includes(keyword) ||
      order.phone
        ?.toLowerCase()
        .includes(keyword) ||
      order.orderId
        ?.toLowerCase()
        .includes(keyword) ||
      order.eventType
        ?.toLowerCase()
        .includes(keyword)
    );
  });

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#7A0F12]">
            Upcoming Orders
          </h1>

          <p className="text-gray-500 mt-1">
            View and manage upcoming catering orders
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#7A0F12] text-white font-semibold hover:bg-[#5f0b0e] transition"
        >
          Add Upcoming Order
        </button>
      </div>

      {/* Search */}
      <div className="bg-white border border-[#eadfcf] rounded-xl p-4 mb-6 shadow-sm">
        <div className="relative max-w-md">
          <FiSearch
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search upcoming orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#7A0F12]"
          />
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white border border-[#eadfcf] rounded-xl shadow-sm p-5 sm:p-6 mb-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-[#7A0F12]">
              {editingId
                ? "Edit Upcoming Order"
                : "Add Upcoming Order"}
            </h2>

            <button
              type="button"
              onClick={resetForm}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <FiX size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Customer */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Customer Name
                </label>

                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder="Enter customer name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#7A0F12]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#7A0F12]"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Date
                </label>

                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#7A0F12]"
                />
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Type
                </label>

                <input
                  type="text"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  placeholder="Wedding, Birthday, Reception..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#7A0F12]"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Guests
                </label>

                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  placeholder="Enter guest count"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#7A0F12]"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Total Amount
                </label>

                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  min="0"
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#7A0F12]"
                />
              </div>

              {/* Menu */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Menu / Food Details
                </label>

                <textarea
                  name="menu"
                  value={formData.menu}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Enter selected menu items"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#7A0F12]"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Enter event address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#7A0F12]"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={resetForm}
                className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#7A0F12] text-white font-semibold hover:bg-[#5f0b0e]"
              >
                <FiSave size={18} />

                {editingId
                  ? "Update Order"
                  : "Save Order"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Orders */}
      <div className="bg-white border border-[#eadfcf] rounded-xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-[#eadfcf]">
          <h2 className="font-bold text-lg text-[#7A0F12]">
            Upcoming Orders ({filteredOrders.length})
          </h2>
        </div>

        {filteredOrders.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-gray-500">
              {search
                ? "No upcoming orders found."
                : "No upcoming orders available."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px]">
              <thead className="bg-[#fffaf0]">
                <tr>
                  <th className="text-left px-5 py-4 text-sm font-bold text-gray-600">
                    Order ID
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-bold text-gray-600">
                    Customer
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-bold text-gray-600">
                    Event
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-bold text-gray-600">
                    Event Date
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-bold text-gray-600">
                    Guests
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-bold text-gray-600">
                    Amount
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-bold text-gray-600">
                    Status
                  </th>

                  <th className="text-right px-5 py-4 text-sm font-bold text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-t border-gray-100 hover:bg-[#fffdf8]"
                  >
                    <td className="px-5 py-4 font-semibold text-[#7A0F12]">
                      {order.orderId ||
                        `ORD-${order.id}`}
                    </td>

                    <td className="px-5 py-4">
                      <p className="font-semibold text-gray-800">
                        {order.customerName}
                      </p>

                      <p className="text-sm text-gray-500">
                        {order.phone}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      {order.eventType || "-"}
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      {formatDate(order.eventDate)}
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      {order.guests || "-"}
                    </td>

                    <td className="px-5 py-4 font-semibold text-gray-800">
                      ₹
                      {Number(
                        order.amount || 0
                      ).toLocaleString("en-IN")}
                    </td>

                    <td className="px-5 py-4">
                      <select
                        value={order.status || "Upcoming"}
                        onChange={(e) =>
                          changeStatus(
                            order.id,
                            e.target.value
                          )
                        }
                        className="px-3 py-2 rounded-lg text-xs font-bold bg-yellow-50 text-yellow-700 border border-yellow-200 outline-none"
                      >
                        <option value="Upcoming">
                          Upcoming
                        </option>

                        <option value="Completed">
                          Completed
                        </option>

                        <option value="Cancelled">
                          Cancelled
                        </option>
                      </select>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(order)}
                          className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                          title="Edit"
                        >
                          <FiEdit2 size={17} />
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(order.id)
                          }
                          className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
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
  );
};

export default UpcomingOrders;