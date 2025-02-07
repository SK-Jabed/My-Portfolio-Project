// import React from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaFigma,
// } from "react-icons/fa";
// import {
//   SiJavascript,
//   SiTailwindcss,
//   SiBootstrap,
//   SiMongodb,
//   SiFirebase,
// } from "react-icons/si";
// import { Bounce, Fade } from "react-awesome-reveal";

// const skillsData = [
//   {
//     category: "Frontend",
//     skills: [
//       {
//         name: "HTML5",
//         icon: <FaHtml5 size={40} className="text-orange-500" />,
//         percentage: 95,
//       },
//       {
//         name: "CSS3",
//         icon: <FaCss3Alt size={40} className="text-blue-500" />,
//         percentage: 90,
//       },
//       {
//         name: "Tailwind",
//         icon: <SiTailwindcss size={40} className="text-teal-400" />,
//         percentage: 88,
//       },
//       {
//         name: "Bootstrap",
//         icon: <SiBootstrap size={40} className="text-purple-600" />,
//         percentage: 85,
//       },
//       {
//         name: "JavaScript",
//         icon: <SiJavascript size={40} className="text-yellow-500" />,
//         percentage: 92,
//       },
//       {
//         name: "React JS",
//         icon: <FaReact size={40} className="text-blue-400" />,
//         percentage: 90,
//       },
//     ],
//   },
//   {
//     category: "Backend",
//     skills: [
//       {
//         name: "Node JS",
//         icon: <FaNodeJs size={40} className="text-green-500" />,
//         percentage: 85,
//       },
//       {
//         name: "Express JS",
//         icon: <FaNodeJs size={40} className="text-gray-400" />,
//         percentage: 80,
//       },
//       {
//         name: "MongoDB",
//         icon: <SiMongodb size={40} className="text-green-400" />,
//         percentage: 78,
//       },
//       {
//         name: "Firebase",
//         icon: <SiFirebase size={40} className="text-orange-400" />,
//         percentage: 80,
//       },
//     ],
//   },
//   {
//     category: "Tools",
//     skills: [
//       {
//         name: "Git",
//         icon: <FaGitAlt size={40} className="text-red-500" />,
//         percentage: 85,
//       },
//       {
//         name: "GitHub",
//         icon: <FaGitAlt size={40} className="text-gray-400" />,
//         percentage: 90,
//       },
//       {
//         name: "Figma",
//         icon: <FaFigma size={40} className="text-purple-500" />,
//         percentage: 80,
//       },
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="relative bg-gradient-to-b from-black via-purple-900 to-black py-20 text-white"
//     >
//       <div className="container mx-auto px-6 md:px-12">
//         <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
//           My <span className="text-blue-400">Skills</span>
//         </h2>

//         <div className="space-y-16">
//           {skillsData.map((category, index) => (
//             <Fade key={index} direction="up">
//               <div>
//                 <h3 className="text-3xl font-semibold text-blue-400 mb-8 text-center">
//                   {category.category}
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {category.skills.map((skill, i) => (
//                     <Bounce key={i} cascade damping={0.1}>
//                       <div className="p-6 bg-gradient-to-tr from-purple-800 via-purple-600 to-blue-400 rounded-xl shadow-lg transform hover:scale-105 transition">
//                         <div className="flex items-center justify-center mb-4">
//                           {skill.icon}
//                         </div>
//                         <h4 className="text-xl font-bold text-center">
//                           {skill.name}
//                         </h4>
//                         <p className="text-sm text-center text-gray-200 mt-2">
//                           Proficiency in {skill.name}
//                         </p>
//                         <div className="w-24 h-24 mx-auto mt-4">
//                           <CircularProgressbar
//                             value={skill.percentage}
//                             text={`${skill.percentage}%`}
//                             styles={buildStyles({
//                               textSize: "16px",
//                               textColor: "#fff",
//                               pathColor: "#6366f1",
//                               trailColor: "#1f2937",
//                             })}
//                           />
//                         </div>
//                       </div>
//                     </Bounce>
//                   ))}
//                 </div>
//               </div>
//             </Fade>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



// import React from "react";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaFigma,
// } from "react-icons/fa";
// import {
//   SiJavascript,
//   SiTailwindcss,
//   SiBootstrap,
//   SiMongodb,
//   SiFirebase,
// } from "react-icons/si";
// import { Fade } from "react-awesome-reveal";

// const skillsData = [
//   {
//     category: "Frontend",
//     skills: [
//       { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
//       { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
//       { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
//       { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
//       { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
//       { name: "React JS", icon: <FaReact />, color: "text-blue-400" },
//     ],
//   },
//   {
//     category: "Backend",
//     skills: [
//       { name: "Node JS", icon: <FaNodeJs />, color: "text-green-500" },
//       { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
//       { name: "Firebase", icon: <SiFirebase />, color: "text-orange-400" },
//     ],
//   },
//   {
//     category: "Tools",
//     skills: [
//       { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
//       { name: "Figma", icon: <FaFigma />, color: "text-purple-500" },
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="relative bg-gradient-to-b from-[#120820] via-black to-[#120820] py-20 text-white"
//     >
//       <div className="container mx-auto px-6 md:px-12">
//         <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
//           My <span className="text-blue-400">Skills</span>
//         </h2>

//         <div className="space-y-16">
//           {skillsData.map((category, index) => (
//             <Fade key={index} direction="up">
//               <div>
//                 <h3 className="text-3xl font-semibold text-blue-400 mb-8 text-center">
//                   {category.category}
//                 </h3>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
//                   {category.skills.map((skill, i) => (
//                     <div
//                       key={i}
//                       className="p-6 bg-[#1A1226] rounded-xl shadow-lg transform hover:scale-105 transition hover:shadow-2xl flex flex-col items-center gap-4"
//                     >
//                       <div
//                         className={`text-5xl ${skill.color} drop-shadow-md`}
//                       >
//                         {skill.icon}
//                       </div>
//                       <h4 className="text-xl font-bold">{skill.name}</h4>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </Fade>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



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
  // SiVisualstudiocode,
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
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
      <div className="container mx-auto px-6 md:px-12">
        <h2
          className="text-center text-4xl md:text-5xl font-bold mb-12"
          data-aos="fade-right"
        >
          My <span className="text-blue-400">Skills</span>
        </h2>

        <div className="space-y-16">
          {skillsData.map((category, index) => (
            <div key={index} data-aos="fade-right">
              <h3 className="text-3xl font-semibold text-blue-400 mb-8 text-center">
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
                    <h4 className="text-xl font-bold">{skill.name}</h4>
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
