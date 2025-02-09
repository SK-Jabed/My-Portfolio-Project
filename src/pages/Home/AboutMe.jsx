import React from "react";
import { Fade } from "react-awesome-reveal";
import { FiDownload } from "react-icons/fi";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#120820] via-[#1a0b2e] to-[#120820] py-12 text-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-10">
          Know <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me Better</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <Fade direction="left">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Hi, I’m a <span className="text-blue-400 font-semibold">passionate developer</span> who loves creating dynamic and interactive digital experiences. I specialize in building{" "}
                <span className="text-purple-400 font-semibold">responsive websites</span> and scalable applications using modern technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My goal is to craft <span className="text-green-400 font-semibold">user-friendly solutions</span> and bring ideas to life. I thrive in{" "}
                <span className="text-yellow-400 font-semibold">team collaborations</span> and love learning new technologies.
              </p>

              {/* Call-to-Action Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              >
                Hire Me
              </a>
            </div>
          </Fade>

          {/* Right: Animated Card Section */}
          <Fade direction="right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cards */}
              {[
                { title: "Experience", text: "1+ years in full-stack development." },
                { title: "Technologies", text: "React, Next.js, Tailwind, MongoDB, and more." },
                { title: "Hobbies", text: "Coding, traveling, and exploring new tech." },
                { title: "Goal", text: "To create impactful digital products." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 bg-opacity-80 p-6 rounded-xl shadow-lg transform hover:scale-105 transition hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-300 mt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
