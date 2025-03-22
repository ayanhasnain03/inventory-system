"use client";
import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500 text-white rounded-full">
            {/* Replace with actual logo */}
            <span className="font-bold text-lg">E</span>
          </div>
          <h1 className="font-extrabold text-2xl text-gray-800 tracking-wide">
            EDSTOCK
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition duration-300"
          onClick={() => {}}
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10 border-t pt-4">
        <p className="text-center text-sm text-gray-500 tracking-wide">
          &copy; 2024 Edstock
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
