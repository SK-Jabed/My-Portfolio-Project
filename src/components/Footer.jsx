import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Slide, Zoom } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-purple-900 to-black text-white">
      {/* Thank You Section */}
      <div className="text-center py-16">
        <Zoom>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400">
            Thank you for watching
          </h2>
        </Zoom>
        <Slide direction="up">
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Contact me anytime. I'm here to connect and create!
          </p>
        </Slide>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-600 py-8">
        <div className="container mx-auto px-6 flex flex-col items-center">
          {/* Logo */}
          <Slide direction="left">
            <h1 className="text-4xl font-extrabold text-blue-400">
              MyPortfolio
            </h1>
          </Slide>

          {/* Footer Text */}
          <Slide direction="up">
            <p className="mt-4 text-center text-gray-300">
              Designed and built with ❤️ & ☕ by{" "}
              <span className="text-pink-400 font-semibold">[Your Name]</span>
            </p>
          </Slide>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-700 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
