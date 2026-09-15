import React, { useEffect, useState } from "react";

import {
  FiUsers,
  FiUserCheck,
  FiShoppingBag,
  FiDollarSign,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const AdminDashboard = () => {
  const [workers, setWorkers] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const role = localStorage.getItem("userRole");

    if (loggedIn !== "true" || role !== "ADMIN") {
      window.location.href = "/login";
      return;
    }

    loadDashboardData();
  }, []);

  const loadDashboardData = () => {
    const savedWorkers = JSON.parse(
      localStorage.getItem("workers") || "[]"
    );

    const savedCustomers = JSON.parse(
      localStorage.getItem("customers") || "[]"
    );

    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    const savedPayments = JSON.parse(
      localStorage.getItem("payments") || "[]"
    );

    setWorkers(savedWorkers);
    setCustomers(savedCustomers);
    setOrders(savedOrders);
    setPayments(savedPayments);
  };

  const activeWorkers = workers.filter(
    (worker) => worker.status === "Active"
  );

  const upcomingOrders = orders.filter(
    (order) =>
      order.status === "Upcoming" ||
      order.status === "Pending"
  );

  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  );

  const totalIncome = payments.reduce(
    (total, payment) =>
      total + Number(payment.amount || 0),
    0
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          நிர்வாகி Dashboard
        </h2>

        <p className="text-gray-500 mt-1">
          உங்கள் கேட்டரிங் சேவையின் அனைத்து செயல்பாடுகளையும்
          ஒரே இடத்தில் நிர்வகிக்கவும்.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">

        {/* Customers */}
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

            <div className="w-12 h-12 rounded-xl bg-[#fff4e0] flex items-center justify-center text-[#7A0F12]">
              <FiUsers size={23} />
            </div>
          </div>
        </div>

        {/* Employees */}
        <div className="bg-white rounded-xl border border-[#eadfcf] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                செயல்பாட்டில் உள்ள பணியாளர்கள்
              </p>

              <p className="text-3xl font-bold text-[#4F6B2A] mt-1">
                {activeWorkers.length}
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#f2f7eb] flex items-center justify-center text-[#4F6B2A]">
              <FiUserCheck size={23} />
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-xl border border-[#eadfcf] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                மொத்த Orders
              </p>

              <p className="text-3xl font-bold text-[#7A0F12] mt-1">
                {orders.length}
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#fff4e0] flex items-center justify-center text-[#7A0F12]">
              <FiShoppingBag size={23} />
            </div>
          </div>
        </div>

        {/* Income */}
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

            <div className="w-12 h-12 rounded-xl bg-[#f2f7eb] flex items-center justify-center text-[#4F6B2A]">
              <FiDollarSign size={23} />
            </div>
          </div>
        </div>

      </div>

      {/* Order Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Upcoming */}
        <div className="bg-white rounded-2xl border border-[#eadfcf] shadow-sm">

          <div className="p-5 border-b border-[#eadfcf]">
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-lg bg-[#fff4e0] text-[#7A0F12] flex items-center justify-center">
                <FiClock size={20} />
              </div>

              <div>
                <h3 className="font-bold text-gray-800">
                  Upcoming Orders
                </h3>

                <p className="text-sm text-gray-500">
                  வரவிருக்கும் ஆர்டர்கள்
                </p>
              </div>

            </div>
          </div>

          <div className="p-5">

            {upcomingOrders.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-400">
                  Upcoming orders இல்லை
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {upcomingOrders.slice(0, 5).map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#fffaf0]"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">
                        {order.customerName || "Customer"}
                      </p>

                      <p className="text-xs text-gray-500">
                        {order.date || "Date not available"}
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold">
                      {order.status || "Pending"}
                    </span>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* Completed */}
        <div className="bg-white rounded-2xl border border-[#eadfcf] shadow-sm">

          <div className="p-5 border-b border-[#eadfcf]">
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-lg bg-[#f2f7eb] text-[#4F6B2A] flex items-center justify-center">
                <FiCheckCircle size={20} />
              </div>

              <div>
                <h3 className="font-bold text-gray-800">
                  Completed Orders
                </h3>

                <p className="text-sm text-gray-500">
                  முடிக்கப்பட்ட ஆர்டர்கள்
                </p>
              </div>

            </div>
          </div>

          <div className="p-5">

            {completedOrders.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-400">
                  Completed orders இல்லை
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {completedOrders.slice(0, 5).map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#f7faf2]"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">
                        {order.customerName || "Customer"}
                      </p>

                      <p className="text-xs text-gray-500">
                        {order.date || "Date not available"}
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                      Completed
                    </span>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;