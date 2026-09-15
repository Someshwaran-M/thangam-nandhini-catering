import React, { useEffect, useState } from "react";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiSearch,
  FiX,
  FiSave,
} from "react-icons/fi";

const Payment = () => {
  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    customerName: "",
    orderId: "",
    amount: "",
    paymentMethod: "Cash",
    paymentDate: "",
    status: "Paid",
    notes: "",
  });

  useEffect(() => {
    loadPayments();
  }, []);

  const loadPayments = () => {
    const savedPayments =
      JSON.parse(localStorage.getItem("payments")) || [];

    setPayments(savedPayments);
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
      orderId: "",
      amount: "",
      paymentMethod: "Cash",
      paymentDate: "",
      status: "Paid",
      notes: "",
    });

    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.customerName.trim()) {
      alert("Please enter customer name");
      return;
    }

    if (!formData.amount) {
      alert("Please enter payment amount");
      return;
    }

    if (!formData.paymentDate) {
      alert("Please select payment date");
      return;
    }

    let updatedPayments;

    if (editingId) {
      updatedPayments = payments.map((payment) =>
        payment.id === editingId
          ? {
              ...payment,
              ...formData,
              amount: Number(formData.amount),
            }
          : payment
      );
    } else {
      const newPayment = {
        id: Date.now(),
        paymentId: `PAY-${Date.now().toString().slice(-6)}`,
        ...formData,
        amount: Number(formData.amount),
        createdAt: new Date().toISOString(),
      };

      updatedPayments = [newPayment, ...payments];
    }

    localStorage.setItem(
      "payments",
      JSON.stringify(updatedPayments)
    );

    setPayments(updatedPayments);
    resetForm();
  };

  const handleEdit = (payment) => {
    setEditingId(payment.id);

    setFormData({
      customerName: payment.customerName || "",
      orderId: payment.orderId || "",
      amount: payment.amount || "",
      paymentMethod: payment.paymentMethod || "Cash",
      paymentDate: payment.paymentDate || "",
      status: payment.status || "Paid",
      notes: payment.notes || "",
    });

    setShowForm(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this payment?"
    );

    if (!confirmDelete) return;

    const updatedPayments = payments.filter(
      (payment) => payment.id !== id
    );

    localStorage.setItem(
      "payments",
      JSON.stringify(updatedPayments)
    );

    setPayments(updatedPayments);
  };

  const changeStatus = (id, status) => {
    const updatedPayments = payments.map((payment) =>
      payment.id === id
        ? {
            ...payment,
            status,
          }
        : payment
    );

    localStorage.setItem(
      "payments",
      JSON.stringify(updatedPayments)
    );

    setPayments(updatedPayments);
  };

  const filteredPayments = payments.filter((payment) => {
    const keyword = search.toLowerCase();

    return (
      payment.customerName
        ?.toLowerCase()
        .includes(keyword) ||
      payment.orderId
        ?.toLowerCase()
        .includes(keyword) ||
      payment.paymentId
        ?.toLowerCase()
        .includes(keyword) ||
      payment.paymentMethod
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

  const totalPaid = payments
    .filter((payment) => payment.status === "Paid")
    .reduce(
      (total, payment) => total + Number(payment.amount || 0),
      0
    );

  const totalPending = payments
    .filter((payment) => payment.status === "Pending")
    .reduce(
      (total, payment) => total + Number(payment.amount || 0),
      0
    );

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#7A0F12]">
            Payments
          </h1>

          <p className="text-gray-500 mt-1">
            Manage customer payments and payment status
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
          <FiPlus size={18} />
          Add Payment
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white border border-[#eadfcf] rounded-xl p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Payments</p>
          <p className="text-2xl font-bold text-[#7A0F12] mt-1">
            {payments.length}
          </p>
        </div>

        <div className="bg-white border border-[#eadfcf] rounded-xl p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Paid</p>
          <p className="text-2xl font-bold text-green-700 mt-1">
            ₹{totalPaid.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-white border border-[#eadfcf] rounded-xl p-5 shadow-sm">
          <p className="text-sm text-gray-500">Pending Amount</p>
          <p className="text-2xl font-bold text-orange-600 mt-1">
            ₹{totalPending.toLocaleString("en-IN")}
          </p>
        </div>
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
            placeholder="Search payments..."
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
              {editingId ? "Edit Payment" : "Add Payment"}
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

              {/* Order ID */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Order ID
                </label>

                <input
                  type="text"
                  name="orderId"
                  value={formData.orderId}
                  onChange={handleChange}
                  placeholder="Example: ORD-123456"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#7A0F12]"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Amount
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

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Payment Method
                </label>

                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#7A0F12]"
                >
                  <option value="Cash">Cash</option>
                  <option value="UPI">UPI</option>
                  <option value="Card">Card</option>
                  <option value="Bank Transfer">
                    Bank Transfer
                  </option>
                  <option value="Cheque">Cheque</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Payment Date
                </label>

                <input
                  type="date"
                  name="paymentDate"
                  value={formData.paymentDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#7A0F12]"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#7A0F12]"
                >
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Failed">Failed</option>
                  <option value="Refunded">Refunded</option>
                </select>
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Notes
                </label>

                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Payment notes..."
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

                {editingId ? "Update Payment" : "Save Payment"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Payment Table */}
      <div className="bg-white border border-[#eadfcf] rounded-xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-[#eadfcf]">
          <h2 className="font-bold text-lg text-[#7A0F12]">
            Payment Records ({filteredPayments.length})
          </h2>
        </div>

        {filteredPayments.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-gray-500">
              {search
                ? "No payments found."
                : "No payment records added yet."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead className="bg-[#fffaf0]">
                <tr>
                  <th className="text-left px-5 py-4 text-sm font-bold text-gray-600">
                    Payment ID
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-bold text-gray-600">
                    Customer
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-bold text-gray-600">
                    Order ID
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-bold text-gray-600">
                    Amount
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-bold text-gray-600">
                    Method
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-bold text-gray-600">
                    Date
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
                {filteredPayments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="border-t border-gray-100 hover:bg-[#fffdf8]"
                  >
                    <td className="px-5 py-4 font-semibold text-[#7A0F12]">
                      {payment.paymentId ||
                        `PAY-${payment.id}`}
                    </td>

                    <td className="px-5 py-4 font-semibold text-gray-800">
                      {payment.customerName}
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      {payment.orderId || "-"}
                    </td>

                    <td className="px-5 py-4 font-semibold text-gray-800">
                      ₹
                      {Number(
                        payment.amount || 0
                      ).toLocaleString("en-IN")}
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      {payment.paymentMethod}
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      {formatDate(payment.paymentDate)}
                    </td>

                    <td className="px-5 py-4">
                      <select
                        value={payment.status || "Paid"}
                        onChange={(e) =>
                          changeStatus(
                            payment.id,
                            e.target.value
                          )
                        }
                        className={`px-3 py-2 rounded-lg text-xs font-bold border outline-none ${
                          payment.status === "Paid"
                            ? "bg-green-50 text-green-700 border-green-200"
                            : payment.status === "Pending"
                            ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                            : payment.status === "Refunded"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : "bg-red-50 text-red-700 border-red-200"
                        }`}
                      >
                        <option value="Paid">Paid</option>
                        <option value="Pending">Pending</option>
                        <option value="Failed">Failed</option>
                        <option value="Refunded">
                          Refunded
                        </option>
                      </select>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(payment)}
                          className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                          title="Edit"
                        >
                          <FiEdit2 size={17} />
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(payment.id)
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

export default Payment;