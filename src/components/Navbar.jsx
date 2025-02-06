import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-[60px]">
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black to-purple-900 z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Left: Logo */}
          <div className="text-2xl font-bold text-white">
            <a href="#" className="hover:text-gray-300 transition">
              Sheikh <span className="text-purple-300">Jabed</span>
            </a>
          </div>

          {/* Middle: Desktop Nav Links */}
          <div className="hidden md:flex space-x-6 text-lg">
            <Link
              to={"/"}
              className="text-white hover:text-purple-300 transition duration-300"
            >
              Home
            </Link>
            <a
              href="#about"
              className="text-white hover:text-purple-300 transition duration-300"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="text-white hover:text-purple-300 transition duration-300"
            >
              My Skills
            </a>
            <a
              href="#projects"
              className="text-white hover:text-purple-300 transition duration-300"
            >
              My Projects
            </a>
            <a
              href="#contact"
              className="text-white hover:text-purple-300 transition duration-300"
            >
              Contact Me
            </a>
            {/* Right: Hire Me Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="px-6 py-2 bg-purple-500 text-white font-medium rounded-md hover:bg-purple-700 transition"
            >
              Hire Me
            </a>
          </div>
          </div>
         
          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        {menuOpen && (
          <div className="md:hidden bg-black text-white py-4 space-y-2">
            <a
              href="#home"
              className="block text-center hover:text-purple-300 transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-center hover:text-purple-300 transition duration-300"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="block text-center hover:text-purple-300 transition duration-300"
            >
              My Skills
            </a>
            <a
              href="#projects"
              className="block text-center hover:text-purple-300 transition duration-300"
            >
              My Projects
            </a>
            <a
              href="#contact"
              className="block text-center hover:text-purple-300 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
