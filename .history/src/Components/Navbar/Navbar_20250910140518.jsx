import React from "react";
import { NavLink } from "react-router-dom";
import "./active.css"; // optional for custom styles

export default function Navbar() {
  return (
    <nav className="navbar bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="logo text-2xl font-bold">
        Hydra Dev
      </div>

      {/* Menu */}
      <ul className="menu flex flex-row gap-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rehan"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
            }
          >
            REHAN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
