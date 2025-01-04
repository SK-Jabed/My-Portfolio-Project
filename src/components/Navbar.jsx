// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scrolling to apply blur effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="md:h-[88px]">
//       <nav
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           isScrolled
//             ? "backdrop-blur-md bg-gradient-to-r from-blue-300 to-blue-500/80"
//             : "bg-gradient-to-r from-blue-400 to-blue-600"
//         }`}
//       >
//         <div className="container mx-auto px-6 py-3 md:py-0 flex items-center justify-between">
//           {/* Left: Logo */}
//           <a href="#" className="flex items-center space-x-2">
//             <img
//               src="https://merakiui.com/images/full-logo.svg"
//               alt="Logo"
//               className="w-auto h-6 sm:h-8"
//             />
//             <span className="text-white text-xl font-bold">Portfolio</span>
//           </a>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="text-white focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {!isOpen ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 8h16M4 16h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>

//           {/* Center: Nav Links */}
//           <div
//             className={`${
//               isOpen
//                 ? "translate-x-0 opacity-100"
//                 : "opacity-0 -translate-x-full"
//             } absolute inset-x-0 top-16 w-full bg-white md:bg-transparent dark:bg-transparent p-6 shadow-md md:shadow-none transition-transform duration-300 ease-in-out md:static md:flex md:items-center md:justify-center md:w-auto md:translate-x-0 md:opacity-100`}
//           >
//             <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
//               <a
//                 href="#"
//                 className="block px-3 py-2 text-gray-700 md:text-white hover:text-blue-100 transition-colors duration-300 transform rounded-md"
//               >
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 text-gray-700 md:text-white hover:text-blue-100 transition-colors duration-300 transform rounded-md"
//               >
//                 About
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 text-gray-700 md:text-white hover:text-blue-100 transition-colors duration-300 transform rounded-md"
//               >
//                 Services
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 text-gray-700 md:text-white hover:text-blue-100 transition-colors duration-300 transform rounded-md"
//               >
//                 Contact
//               </a>
//             </div>

//             {/* Button in Mobile Menu */}
//             <div className="mt-4 md:hidden">
//               <button
//                 type="button"
//                 className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
//               >
//                 Get Started
//               </button>
//             </div>
//           </div>

//           {/* Right: Button */}
//           <div className="hidden md:block">
//             <button
//               type="button"
//               className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
//             >
//               Get Started
//             </button>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-transparent fixed top-0 w-full z-50">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         <div className="text-2xl font-bold text-white">MyPortfolio.</div>
//         <div className="hidden md:flex space-x-8">
//           <a
//             href="#home"
//             className="text-white text-lg font-medium hover:text-blue-300 transition"
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="text-white text-lg font-medium hover:text-blue-300 transition"
//           >
//             About
//           </a>
//           <a
//             href="#projects"
//             className="text-white text-lg font-medium hover:text-blue-300 transition"
//           >
//             Projects
//           </a>
//           <a
//             href="#contact"
//             className="text-white text-lg font-medium hover:text-blue-300 transition"
//           >
//             Contact
//           </a>
//         </div>
//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white text-2xl focus:outline-none"
//           >
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>
//       </div>
//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-black text-white space-y-4 text-center py-4">
//           <a href="#home" className="block text-lg hover:text-blue-300">
//             Home
//           </a>
//           <a href="#about" className="block text-lg hover:text-blue-300">
//             About
//           </a>
//           <a href="#projects" className="block text-lg hover:text-blue-300">
//             Projects
//           </a>
//           <a href="#contact" className="block text-lg hover:text-blue-300">
//             Contact
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Left: Logo */}
//         <div className="text-xl font-bold">
//           <a href="#" className="text-white hover:text-gray-300 transition">
//             Ali<span className="text-purple-300">Ercan.</span>
//           </a>
//         </div>

//         {/* Middle: Nav Links */}
//         <div className="hidden md:flex space-x-6 text-lg">
//           <a
//             href="#home"
//             className="hover:text-purple-300 transition duration-300"
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="hover:text-purple-300 transition duration-300"
//           >
//             About Me
//           </a>
//           <a
//             href="#skills"
//             className="hover:text-purple-300 transition duration-300"
//           >
//             My Skills
//           </a>
//           <a
//             href="#projects"
//             className="hover:text-purple-300 transition duration-300"
//           >
//             My Projects
//           </a>
//           <a
//             href="#contact"
//             className="hover:text-purple-300 transition duration-300"
//           >
//             Contact Me
//           </a>
//         </div>

//         {/* Right: Button */}
//         <div>
//           <a
//             href="#contact"
//             className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg shadow text-white transition"
//           >
//             Hire Me
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black to-purple-900 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <div className="text-xl font-bold text-white">
          <a href="#" className="hover:text-gray-300 transition">
            Ali<span className="text-purple-300">Ercan.</span>
          </a>
        </div>

        {/* Middle: Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a
            href="#home"
            className="text-white hover:text-purple-300 transition duration-300"
          >
            Home
          </a>
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
        </div>

        {/* Right: Hire Me Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
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
  );
};

export default Navbar;
