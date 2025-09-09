import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-gray-900">
      <Navbar></Navbar>
      <div className="flex items-center justify-center min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
