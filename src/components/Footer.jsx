import React, { useEffect } from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out" });
  }, []);

  return (
    <footer className="bg-gradient-to-b from-[#120820] via-[#1a0e30] to-[#120820] text-white mt-0">
      {/* Thank You Section with Horizontal Lines */}
      <div className="relative text-center py-10 px-4">
        <div className="absolute left-0 top-1/2 w-1/4 border-t border-gray-600 hidden md:block"></div>
        <h2 
          className="text-3xl md:text-5xl font-exo font-bold text-violet-500 inline-block relative z-10"
          data-aos="flip-down"
        >
          Thanks for Visiting!
        </h2>
        <div className="absolute right-0 top-1/2 w-1/4 border-t border-gray-600 hidden md:block"></div>
        <p 
          className="mt-4 font-nunito text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          data-aos="fade"
        >
          Let's connect and create something amazing.
        </p>
      </div>

      {/* Footer Main Content */}
      <div className="border-t border-gray-700 pt-6 pb-4">
        <div className="container mx-auto px-6 flex flex-col items-center">
          {/* Logo */}
          <div 
            className="text-3xl md:text-4xl font-lora font-semibold text-white"
            data-aos="zoom-in"
          >
            <a className="transition">
              Sheikh <span className="text-purple-500">Jabed</span>
            </a>
          </div>

          {/* Footer Text */}
          <p className="mt-3 font-nunito text-center text-gray-300" data-aos="fade">
            Built with ❤️ & ☕ by{" "}
            <span className="text-purple-500 font-semibold">Sheikh Jabed</span>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-5">
            {[  
              { icon: FaTwitter, link: "https://x.com/Sheikh_Jabed_69", color: "text-blue-400" },
              { icon: FaGithub, link: "https://github.com/SK-Jabed", color: "text-gray-300" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/in/sheikh-jabed-apu-072397350", color: "text-blue-500" },
              { icon: FaInstagram, link: "https://www.instagram.com/s_k_j_69/", color: "text-pink-400" },
            ].map(({ icon: Icon, link, color }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${color} transition transform hover:scale-110 hover:shadow-xl`}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 font-nunito text-sm mt-6">
            © {new Date().getFullYear()} Sheikh Jabed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



