import React from "react";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-black via-purple-900 to-black py-20 text-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
          Know <span className="text-blue-400">Me Better</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div>
            <Fade direction="left">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Hi, I’m a developer passionate about building dynamic and
                interactive digital experiences. I specialize in creating
                <span className="text-blue-400"> responsive websites</span> and
                scalable applications using the latest technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My goal is to solve problems through code and deliver
                user-friendly solutions. I enjoy working on{" "}
                <span className="text-blue-400">team projects</span> and
                collaborating with other creative minds.
              </p>
            </Fade>
          </div>

          {/* Right: Animated Card Section */}
          <Fade direction="right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-700 bg-opacity-80 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
                <h3 className="text-xl font-bold text-white">Experience</h3>
                <p className="text-gray-300 mt-2">
                  3+ years of experience in front-end and back-end development.
                </p>
              </div>
              <div className="bg-purple-700 bg-opacity-80 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
                <h3 className="text-xl font-bold text-white">Technologies</h3>
                <p className="text-gray-300 mt-2">
                  React, Tailwind CSS, Node.js, MongoDB, and more.
                </p>
              </div>
              <div className="bg-purple-700 bg-opacity-80 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
                <h3 className="text-xl font-bold text-white">Hobbies</h3>
                <p className="text-gray-300 mt-2">
                  Coding, traveling, and exploring new frameworks.
                </p>
              </div>
              <div className="bg-purple-700 bg-opacity-80 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
                <h3 className="text-xl font-bold text-white">Goal</h3>
                <p className="text-gray-300 mt-2">
                  To build products that impact millions of users.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
