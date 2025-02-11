import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#10071F] z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
          Sheikh Jabed
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 text-lg items-center">
          <Link
            to="/"
            className="nav-link hover:text-[#8870D8] transition text-[#E9E8EB]"
          >
            Home
          </Link>
          <a
            href="#about"
            className="nav-link hover:text-[#8870D8] transition text-[#E9E8EB]"
          >
            About
          </a>
          <a
            href="#skills"
            className="nav-link hover:text-[#8870D8] transition text-[#E9E8EB]"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="nav-link hover:text-[#8870D8] transition text-[#E9E8EB]"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="nav-link hover:text-[#8870D8] transition text-[#E9E8EB]"
          >
            Contact
          </a>

          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1f3fMrQHcCRabPIpd1cRXfOfPLpeDFOTG"
            className="px-5 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:scale-105 transition duration-300 shadow-md"
            download
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
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
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#10071F] text-center py-4 space-y-4 text-lg text-white">
          <a
            href="#home"
            className="mobile-link block text-center hover:text-purple-500 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="mobile-link block text-center hover:text-purple-500 transition duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="mobile-link block text-center hover:text-purple-500 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="mobile-link block text-center hover:text-purple-500 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="mobile-link block text-center hover:text-purple-500 transition duration-300"
          >
            Contact
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1f3fMrQHcCRabPIpd1cRXfOfPLpeDFOTG"
            className="px-5 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:scale-105 transition duration-300 shadow-md block mx-auto w-fit"
            download
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
