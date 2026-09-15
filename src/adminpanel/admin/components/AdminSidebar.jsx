import React from "react";
import { NavLink } from "react-router-dom";

import {
  FiHome,
  FiUsers,
  FiUserCheck,
  FiShoppingBag,
  FiClock,
  FiCheckCircle,
  FiDollarSign,
  FiCreditCard,
  FiMenu,
  FiFileText,
  FiX,
} from "react-icons/fi";

const AdminSidebar = () => {
  const menuItems = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: <FiHome />,
    },

    {
      title: "Customers",
      path: "/admin/customers",
      icon: <FiUsers />,
    },

    {
      title: "Employees",
      path: "/admin/employees",
      icon: <FiUserCheck />,
    },

    {
      title: "Attendance",
      path: "/admin/attendance",
      icon: <FiFileText />,
    },

    {
      title: "Menu",
      path: "/admin/menu",
      icon: <FiMenu />,
    },

    {
      title: "Orders",
      path: "/admin/orders",
      icon: <FiShoppingBag />,
    },

    {
      title: "Upcoming Orders",
      path: "/admin/orders/upcoming",
      icon: <FiClock />,
    },

    {
      title: "Completed Orders",
      path: "/admin/orders/completed",
      icon: <FiCheckCircle />,
    },

    {
      title: "Income",
      path: "/admin/income",
      icon: <FiDollarSign />,
    },

    {
      title: "Cost",
      path: "/admin/cost",
      icon: <FiDollarSign />,
    },

    {
      title: "Payments",
      path: "/admin/payments",
      icon: <FiCreditCard />,
    },
  ];

  return (
    <aside className="hidden md:block w-64 min-h-[calc(100vh-64px)] bg-white border-r border-[#eadfcf]">
      <div className="p-4">

        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-3">
          Admin Menu
        </p>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#7A0F12] text-white"
                    : "text-gray-600 hover:bg-[#fff4e0] hover:text-[#7A0F12]"
                }`
              }
            >
              <span className="text-lg">
                {item.icon}
              </span>

              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>

      </div>
    </aside>
  );
};

export default AdminSidebar;