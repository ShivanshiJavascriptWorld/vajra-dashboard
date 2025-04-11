import React from "react";
import icon from "../assets/icon.jpeg";
function Sidebar() {
  return (
    <div
      className="sidebar w-60 min-h-screen fixed flex flex-col"
      style={{ backgroundColor: "#1D2434" }}
    >
      {/* Logo */}
      <div className="px-6 flex justify-center py-6">
        <img src={icon} alt="Vajra Logo" className="h-10" />
      </div>

      {/* Menu Items */}
      <nav className="flex-grow ">
        <div className="menu-item flex items-center px-6 py-3 text-white bg-indigo-500 bg-opacity-30">
          <i className="bi bi-grid text-sm mr-4 bold"></i>
          <span>
            <span className="font-bold text-sm">Dashboard</span>
          </span>
        </div>
        <div className="menu-item flex items-center px-6 py-3 text-gray-400 hover:bg-indigo-500 hover:bg-opacity-30 hover:text-white cursor-pointer">
          <i className="bi bi-box text-sm mr-4"></i>
          <span className="font-bold text-sm">Assets</span>

          <i className="bi bi-chevron-down ml-auto"></i>
        </div>
        <div className="menu-item flex items-center px-6 py-3 text-gray-400 hover:bg-indigo-500 hover:bg-opacity-30 hover:text-white cursor-pointer">
          <i className="bi bi-exclamation-triangle text-sm mr-4"></i>
          <span className="font-bold text-sm">Incidents</span>
        </div>
        <div className="menu-item flex items-center px-6 py-3 text-gray-400 hover:bg-indigo-500 hover:bg-opacity-30 hover:text-white cursor-pointer">
          <i className="bi bi-gear text-sm mr-4"></i>
          <span className="font-bold text-sm">Services</span>
        </div>
        <div className="menu-item flex items-center px-6 py-3 text-gray-400 hover:bg-indigo-500 hover:bg-opacity-30 hover:text-white cursor-pointer">
          <i className="bi bi-chat-left-dots text-sm mr-4"></i>
          <span className="font-bold text-sm">Request</span>
        </div>
        <div className="menu-item flex items-center px-6 py-3 text-gray-400 hover:bg-indigo-500 hover:bg-opacity-30 hover:text-white cursor-pointer">
          <i className="bi bi-people text-sm mr-4"></i>
          <span className="font-bold text-sm">Users</span>
          <i className="bi bi-chevron-down ml-auto"></i>
        </div>
        <div className="menu-item flex items-center px-6 py-3 text-gray-400 hover:bg-indigo-500 hover:bg-opacity-30 hover:text-white cursor-pointer">
          <i className="bi bi-file-earmark-text text-sm mr-4"></i>
          <span className="font-bold text-sm">Reports</span>
          <i className="bi bi-chevron-down ml-auto"></i>
        </div>
      </nav>

      {/* Bottom Buttons */}
      <div className="px-6 mb-6 mt-auto">
        <button className="flex items-center justify-center w-full text-white border border-gray-600 rounded-full py-2 px-4 mb-3">
          <i className="bi bi-headset mr-2"></i>
          <span className="font-bold text-sm">Contact us</span>
        </button>
        <button className="flex items-center justify-center w-full text-white border border-gray-600 rounded-full py-2 px-4">
          <i className="bi bi-box-arrow-right mr-2"></i>
          <span className="font-bold text-sm">Log Out</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
