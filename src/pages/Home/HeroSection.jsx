import React from "react";
import { Typewriter } from "react-simple-typewriter";
import portfolioImage from "../../assets/my-picture.png";

const HeroSection = () => {
  return (
    <section className="bg-[#120820] md:h-screen flex items-center justify-center pb-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 space-y-8 md:space-y-0">
        
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug">
            Hi, I am <span className="text-purple-400">Sheikh Jabed</span>
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl text-blue-300 font-semibold">
            I am{" "}
            <span className="text-yellow-400">
              <Typewriter words={["a Web Developer", "a Coder", "a Programmer", "a Problem Solver"]} loop cursor cursorStyle="|" typeSpeed={80} deleteSpeed={50} delaySpeed={1000} />
            </span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            I am a passionate developer skilled in creating dynamic, responsive, and visually appealing web applications. I strive to deliver innovative solutions and exceptional user experiences.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <a
              href="https://drive.google.com/uc?export=download&id=1f3fMrQHcCRabPIpd1cRXfOfPLpeDFOTG"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-lg hover:scale-105 transition duration-300 shadow-lg"
              download
            >
              Download Resume
            </a>
            <a href="#contact" className="px-6 py-3 border border-purple-500 text-white font-medium rounded-lg hover:bg-purple-500 transition duration-300">
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-6 text-2xl">
            <a
              href="https://www.facebook.com/sk.jabed.640047"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sheikh-jabed-b0b957318/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/SK-Jabed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://x.com/Sheikh_Jabed_69"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        {/* <div className="md:w-1/2 flex justify-center">
          <img src={portfolioImage} alt="Sheikh Jabed" className="w-72 sm:w-96 rounded-full border-4 border-purple-400 shadow-lg" />
        </div> */}

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-72 sm:w-96 h-72 sm:h-96">
            <img
              src={portfolioImage}
              alt="Sheikh Jabed"
              className="w-full h-full object-cover rounded-full border-4 border-purple-300 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
