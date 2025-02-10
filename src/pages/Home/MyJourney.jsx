import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MyJourney = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="journey"
      className="bg-gradient-to-b from-[#120820] via-[#1a0b2e] to-[#120820] py-20 text-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-14">
          My{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Journey
          </span>
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-400 ml-6">
          {/* Timeline Items */}
          {[
            {
              title: "Started as a Learner",
              description:
                "Began my journey with HTML, CSS, and JavaScript, mastering the basics of web development.",
              year: "2023",
            },
            {
              title: "Explored New Horizons",
              description:
                "Learned React, Tailwind CSS, and Back-End technologies to expand my skills.",
              year: "2024",
            },
            {
              title: "Professional Developer",
              description:
                "Worked on real-world projects, collaborating with teams to deliver impactful solutions.",
              year: "2025",
            },
          ].map((item, index) => (
            <div key={index} className="relative mb-10 ml-8" data-aos="fade-up">
              {/* Timeline Dot */}
              <div className="absolute -left-10 top-2 bg-blue-400 w-6 h-6 rounded-full shadow-lg shadow-blue-500"></div>

              {/* Timeline Card */}
              <div className="bg-[#1a0b2e] p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-lg">{item.description}</p>
                <p className="text-blue-400 font-bold text-lg mt-3">
                  {item.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
