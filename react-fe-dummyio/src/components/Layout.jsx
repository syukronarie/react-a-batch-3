import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../App.css";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
