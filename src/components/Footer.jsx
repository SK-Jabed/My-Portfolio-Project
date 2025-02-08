import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Slide, Zoom } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#120820] via-[#1a0e30] to-[#120820] text-white">
      {/* Thank You Section */}
      <div className="text-center py-10 px-3">
        <Zoom>
          <h2 className="text-3xl md:text-5xl font-exo font-bold text-violet-600">
            Thank you for scrolling
          </h2>
        </Zoom>
        <Slide direction="up">
          <p className="mt-4 font-nunito text-lg md:text-xl text-gray-300">
            Contact me anytime. I'm here to connect and create!
          </p>
        </Slide>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-600 py-8">
        <div className="container mx-auto px-6 flex flex-col items-center">
          {/* Logo */}
          <Slide direction="left">
            <div className="text-3xl font-lora font-semibold text-white">
            <a href="#" className="hover:text-gray-300 transition">
              Sheikh <span className="text-purple-300">Jabed</span>
            </a>
          </div>
          </Slide>

          {/* Footer Text */}
          <Slide direction="up">
            <p className="mt-4 text-center text-gray-300">
              Designed and built with ❤️ & ☕ by{" "}
              <span className="text-purple-500 font-semibold">Sheikh Jabed</span>
            </p>
          </Slide>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6">
            <a
              href="https://x.com/Sheikh_Jabed_69"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/SK-Jabed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sheikh-jabed-b0b957318/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-700 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/s_k_j_69/"
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


// import React, { useEffect } from "react";
// import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Footer = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200, easing: "ease-in-out" });
//   }, []);

//   return (
//     <footer className="bg-gradient-to-b from-[#120820] via-[#1a0e30] to-[#120820] text-white">
//       {/* Thank You Section */}
//       <div className="text-center py-8 px-4">
//         <h2 
//           className="text-3xl md:text-5xl font-exo font-bold text-violet-500" 
//           data-aos="fade-right"
//         >
//           Thanks for Visiting!
//         </h2>
//         <p 
//           className="mt-3 font-nunito text-lg md:text-xl text-gray-300" 
//           data-aos="fade-right" 
//           data-aos-delay="200"
//         >
//           Let's connect and create something amazing.
//         </p>
//       </div>

//       {/* Footer Main Content */}
//       <div className="border-t border-gray-700 pt-6 pb-4">
//         <div className="container mx-auto px-6 flex flex-col items-center">
//           {/* Logo */}
//           <div 
//             className="text-3xl md:text-4xl font-lora font-semibold text-white" 
//             data-aos="zoom-in"
//           >
//             <a href="#" className="hover:text-gray-300 transition">
//               Sheikh <span className="text-purple-400">Jabed</span>
//             </a>
//           </div>

//           {/* Footer Text */}
//           <p className="mt-3 text-center text-gray-400" data-aos="fade-down">
//             Built with ❤️ & ☕ by{" "}
//             <span className="text-purple-500 font-semibold">Sheikh Jabed</span>
//           </p>

//           {/* Social Icons */}
//           <div className="flex space-x-6 mt-5" data-aos="zoom-in" data-aos-delay="300">
//             {[
//               { icon: FaTwitter, link: "https://x.com/Sheikh_Jabed_69", color: "text-blue-400" },
//               { icon: FaGithub, link: "https://github.com/SK-Jabed", color: "text-gray-400" },
//               { icon: FaLinkedin, link: "https://www.linkedin.com/in/sheikh-jabed-b0b957318/", color: "text-blue-500" },
//               { icon: FaInstagram, link: "https://www.instagram.com/s_k_j_69/", color: "text-pink-400" },
//             ].map(({ icon: Icon, link, color }, index) => (
//               <a
//                 key={index}
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`text-2xl ${color} transition transform hover:scale-110 hover:shadow-lg`}
//               >
//                 <Icon />
//               </a>
//             ))}
//           </div>

//           {/* Copyright */}
//           <p className="text-gray-500 text-sm mt-6" data-aos="fade-right" data-aos-delay="400">
//             © {new Date().getFullYear()} Sheikh Jabed. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
