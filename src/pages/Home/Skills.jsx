// import React from "react";
// import {
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaHtml5,
//   FaCss3Alt,
// } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="relative bg-gradient-to-b from-black via-purple-900 to-black py-20 text-white"
//     >
//       <div className="container mx-auto px-6 md:px-12">
//         <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
//           My <span className="text-blue-400">Skills</span>
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//           {[
//             {
//               skill: "React",
//               icon: <FaReact size={48} className="text-blue-500" />,
//             },
//             {
//               skill: "Node.js",
//               icon: <FaNodeJs size={48} className="text-green-500" />,
//             },
//             {
//               skill: "MongoDB",
//               icon: <SiMongodb size={48} className="text-green-400" />,
//             },
//             {
//               skill: "JavaScript",
//               icon: <SiJavascript size={48} className="text-yellow-400" />,
//             },
//             {
//               skill: "HTML",
//               icon: <FaHtml5 size={48} className="text-orange-500" />,
//             },
//             {
//               skill: "CSS",
//               icon: <FaCss3Alt size={48} className="text-blue-400" />,
//             },
//             {
//               skill: "Tailwind CSS",
//               icon: <SiTailwindcss size={48} className="text-teal-400" />,
//             },
//             {
//               skill: "Git",
//               icon: <FaGitAlt size={48} className="text-red-500" />,
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="p-6 bg-gradient-to-tr from-purple-800 via-purple-600 to-blue-400 rounded-lg shadow-lg transform hover:scale-110 transition"
//             >
//               <div>{item.icon}</div>
//               <h3 className="text-lg font-semibold mt-4">{item.skill}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



// import React from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// const Skills = () => {
//   const skills = [
//     { skill: "React", percentage: 90 },
//     { skill: "JavaScript", percentage: 85 },
//     { skill: "Node.js", percentage: 75 },
//     { skill: "CSS", percentage: 80 },
//     { skill: "HTML", percentage: 95 },
//     { skill: "MongoDB", percentage: 70 },
//     { skill: "Tailwind CSS", percentage: 88 },
//     { skill: "Git", percentage: 80 },
//   ];

//   return (
//     <section
//       id="skills"
//       className="relative bg-gradient-to-b from-purple-900 via-black to-purple-900 py-20 text-white"
//     >
//       <div className="container mx-auto px-6 md:px-12">
//         <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
//           My <span className="text-blue-400">Skills</span>
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
//           {skills.map((item, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div className="w-24 h-24">
//                 <CircularProgressbar
//                   value={item.percentage}
//                   text={`${item.percentage}%`}
//                   styles={buildStyles({
//                     textSize: "16px",
//                     textColor: "#fff",
//                     pathColor: "#6366f1",
//                     trailColor: "#1f2937",
//                   })}
//                 />
//               </div>
//               <h3 className="mt-4 text-lg font-semibold">{item.skill}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React from "react";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", percentage: 90 },
        { name: "HTML", percentage: 95 },
        { name: "CSS", percentage: 85 },
        { name: "Tailwind CSS", percentage: 88 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", percentage: 80 },
        { name: "MongoDB", percentage: 75 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", percentage: 85 },
        { name: "VS Code", percentage: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b from-black via-purple-900 to-black py-20 text-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
          My <span className="text-blue-400">Skills</span>
        </h2>
        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index}>
              <Fade direction="up">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <p className="text-lg font-medium">{skill.name}</p>
                      <div className="w-full bg-gray-800 rounded-full h-4">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
