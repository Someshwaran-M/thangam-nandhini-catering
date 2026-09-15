import React, { useEffect, useState } from "react";
import {
  FiCheckCircle,
  FiSearch,
  FiEye,
} from "react-icons/fi";

const CompletedOrders = () => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    const completed = savedOrders.filter(
      (order) => order.status === "Completed"
    );

    setOrders(completed);
  };

  const filteredOrders = orders.filter((order) => {
    const searchValue = search.toLowerCase();

    return (
      String(order.customerName || "")
        .toLowerCase()
        .includes(searchValue) ||
      String(order.orderId || "")
        .toLowerCase()
        .includes(searchValue) ||
      String(order.phone || "")
        .toLowerCase()
        .includes(searchValue)
    );
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Completed Orders
          </h2>

          <p className="text-gray-500 mt-1">
            முடிக்கப்பட்ட கேட்டரிங் ஆர்டர்களை பார்க்கவும்.
          </p>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f2f7eb] text-[#4F6B2A]">
          <FiCheckCircle />

          <span className="font-semibold text-sm">
            {orders.length} Completed
          </span>
        </div>

      </div>

      {/* Search */}
      <div className="bg-white rounded-xl border border-[#eadfcf] shadow-sm p-4 mb-6">

        <div className="relative max-w-md">

          <FiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Customer / Order ID / Phone"
            className="w-full h-11 pl-10 pr-4 border border-[#dfcba8]
            rounded-lg outline-none focus:border-[#7A0F12]"
          />

        </div>

      </div>

      {/* Orders */}
      <div className="bg-white rounded-2xl border border-[#eadfcf] shadow-sm">

        <div className="p-5 border-b border-[#eadfcf]">
          <h3 className="font-bold text-gray-800">
            Completed Order List
          </h3>
        </div>

        <div className="p-5">

          {filteredOrders.length === 0 ? (

            <div className="text-center py-12">

              <FiCheckCircle
                size={42}
                className="mx-auto text-gray-300 mb-3"
              />

              <p className="font-semibold text-gray-600">
                Completed orders இல்லை
              </p>

              <p className="text-sm text-gray-400 mt-1">
                முடிக்கப்பட்ட orders இங்கே காணப்படும்.
              </p>

            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[850px]">

                <thead>

                  <tr className="border-b border-[#eadfcf]">

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      Order ID
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      Customer
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      Phone
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      Date
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      Amount
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      Status
                    </th>

                    <th className="text-right py-3 px-3 text-sm font-bold text-gray-600">
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredOrders.map((order) => (

                    <tr
                      key={order.id || order.orderId}
                      className="border-b border-gray-100 hover:bg-[#fffaf0]"
                    >

                      <td className="py-4 px-3 font-mono text-sm text-[#7A0F12]">
                        {order.orderId || `ORD-${order.id}`}
                      </td>

                      <td className="py-4 px-3 font-semibold text-gray-800">
                        {order.customerName || "—"}
                      </td>

                      <td className="py-4 px-3 text-sm text-gray-600">
                        {order.phone || "—"}
                      </td>

                      <td className="py-4 px-3 text-sm text-gray-500">
                        {order.date || "—"}
                      </td>

                      <td className="py-4 px-3 font-semibold text-gray-800">
                        ₹
                        {Number(
                          order.amount || order.total || 0
                        ).toLocaleString("en-IN")}
                      </td>

                      <td className="py-4 px-3">

                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">

                          <FiCheckCircle size={13} />

                          Completed

                        </span>

                      </td>

                      <td className="py-4 px-3">

                        <div className="flex justify-end">

                          <button
                            type="button"
                            onClick={() => {
                              alert(
                                `Order: ${
                                  order.orderId ||
                                  `ORD-${order.id}`
                                }`
                              );
                            }}
                            className="p-2 rounded-lg bg-[#fff4e0]
                            text-[#7A0F12] hover:bg-[#f9e8c8]"
                            title="View Order"
                          >
                            <FiEye size={17} />
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

export default CompletedOrders;