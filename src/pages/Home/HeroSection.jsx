import React from "react";
import { Typewriter } from "react-simple-typewriter";
import portfolioImage from "../../assets/my-picture.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-black via-purple-900 to-black h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 space-y-8 md:space-y-0">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug">
            Hi, I am <span className="text-blue-400">Sheikh Jabed</span>
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl text-blue-300 font-semibold">
            Hi, I am{" "}
            <span className="text-yellow-400">
              <Typewriter
                words={[
                  "a Web Developer",
                  "a Coder",
                  "a Programmer",
                  "a Problem Solver",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            I am a passionate developer skilled in creating dynamic, responsive,
            and visually appealing web applications. I strive to deliver
            innovative solutions and exceptional user experiences.
          </p>
          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <a
              href="https://docs.google.com/document/d/1P8RJA2-juuKkaKmz1MHkCJCv7ZxiHbrwvn8Bc2M40LE/edit?tab=t.0"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-white font-medium rounded-md hover:bg-blue-600 transition"
            >
              Contact Me
            </a>
          </div>
          {/* Social Links */}
          <div className="mt-6 flex justify-center md:justify-start space-x-6 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

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
