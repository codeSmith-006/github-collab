import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 font-mono rounded-lg space-y-4">
      <pre>
        {`Welcome to Git/GitHub collaboration practice!

Instructions:
1. Create a NavLink in the navbar with your name.
2. The link should redirect to your personal page: /yourname
3. Create a component with your name in all caps (e.g., REHAN)
4. The component should display:
   - Your name
   - Your LinkedIn bio or a short description

Example:
- Navbar link: REHAN
- Route: /rehan
- Component content: My name is Rehan, welcome to my GitHub practice!`}
      </pre>
    </div>
  );
}
