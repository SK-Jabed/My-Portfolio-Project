import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiNextdotjs,
  SiVite,
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "React JS", icon: <FaReact />, color: "text-blue-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-200" },
      { name: "Vite", icon: <SiVite />, color: "text-purple-500" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node JS", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Express JS", icon: <SiExpress />, color: "text-gray-400" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
      { name: "Firebase", icon: <SiFirebase />, color: "text-orange-400" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
      { name: "Figma", icon: <FaFigma />, color: "text-purple-500" },

      { name: "Docker", icon: <FaDocker />, color: "text-blue-300" },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b from-[#120820] via-black to-[#120820] py-20 text-white"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Section Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text animate-fade-in-down font-alegreya">
            My Best Projects
          </h2>
          <p className="mt-4 text-gray-300 text-lg font-nunito">
            A showcase of my technical proficiency and the tools I use to create exceptional web experiences.
          </p>
        </div>

        <div className="space-y-16">
          {skillsData.map((category, index) => (
            <div key={index} data-aos="fade-right">
              <h3 className="text-3xl font-semibold font-lato text-blue-400 mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="p-6 bg-[#1A1226] rounded-xl shadow-lg transform hover:scale-105 transition hover:shadow-2xl flex flex-col items-center gap-4"
                    data-aos="fade-right"
                  >
                    <div className={`text-5xl ${skill.color} drop-shadow-md`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-bold font-nunito">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
