import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AdminLayout from "./components/AdminLayout";

import AdminDashboard from "./dashboard/AdminDashboard.jsx";

import Customers from "./customers/Customers.jsx";

import Employee from "./employees/Employee.jsx";
import Attendance from "./employees/Attendance.jsx";

import Menu from "./menu/Menu.jsx";

import Orders from "./orders/Orders.jsx";
import UpcomingOrders from "./orders/UpcomingOrders.jsx";
import CompletedOrders from "./orders/CompletedOrders.jsx";

import Cost from "./finance/Cost.jsx";
import Income from "./finance/Income.jsx";
import Payment from "./finance/Payment.jsx";


const AdminRoutes = () => {
  return (
    <Routes>

      {/* Admin Layout */}
      <Route element={<AdminLayout />}>

        {/* /admin */}
        <Route
          path="/"
          element={
            <Navigate
              to="/admin/dashboard"
              replace
            />
          }
        />

        {/* /admin/dashboard */}
        <Route
          path="/dashboard"
          element={<AdminDashboard />}
        />

        {/* /admin/customers */}
        <Route
          path="/customers"
          element={<Customers />}
        />

        {/* /admin/employees */}
        <Route
          path="/employees"
          element={<Employee />}
        />

        {/* /admin/attendance */}
        <Route
          path="/attendance"
          element={<Attendance />}
        />

        {/* /admin/menu */}
        <Route
          path="/menu"
          element={<Menu />}
        />

        {/* /admin/orders */}
        <Route
          path="/orders"
          element={<Orders />}
        />

        {/* /admin/orders/upcoming */}
        <Route
          path="/orders/upcoming"
          element={<UpcomingOrders />}
        />

        {/* /admin/orders/completed */}
        <Route
          path="/orders/completed"
          element={<CompletedOrders />}
        />

        {/* /admin/income */}
        <Route
          path="/income"
          element={<Income />}
        />

        {/* /admin/cost */}
        <Route
          path="/cost"
          element={<Cost />}
        />

        {/* /admin/payments */}
        <Route
          path="/payments"
          element={<Payment />}
        />

      </Route>

    </Routes>
  );
};

export default AdminRoutes;