"use client";

import React from "react";
import { FaRobot } from "react-icons/fa6";

const Navbar = () => {
  const scrollToSection = (id: any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              <FaRobot />
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">
              AI短剧<span className="text-indigo-600">洞察</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {["overview", "evolution", "impact", "workflow"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-600 hover:text-indigo-600 font-medium transition capitalize"
              >
                {
                  {
                    overview: "核心定义",
                    evolution: "发展历程",
                    impact: "效能革命",
                    workflow: "人机协同",
                  }[item]
                }
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollToSection("evolution")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition shadow-lg shadow-indigo-200"
          >
            开始探索
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
