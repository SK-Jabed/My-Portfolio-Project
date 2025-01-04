// import React from 'react';
// import img from "../../assets/my-picture.png"

// const AboutMe = () => {
//     return (
//       <div>
//         <section className="bg-blue-500 dark:bg-gray-800 text-white py-16">
//           <div className="container mx-auto text-center">
//             <h2 className="text-4xl font-bold">Hello, I’m [Your Name]!</h2>
//             <p className="mt-4 text-lg">
//               A developer who finds joy in crafting user-friendly applications
//               and solving complex problems. My programming journey has been
//               fueled by a love for technology and innovation.
//             </p>
//             <p className="mt-4">
//               Beyond coding, I’m a storyteller, a traveler, and a fitness
//               enthusiast. These diverse experiences shape my creative process
//               and inspire my work every day.
//             </p>
//             <img
//               src={img}
//               alt="About Me"
//               className="w-40 h-40 mx-auto mt-8 rounded-full border-4 border-white"
//             />
//           </div>
//         </section>
//       </div>
//     );
// };

// export default AboutMe;



// import React from "react";
// import { Typewriter } from "react-simple-typewriter";

// const AboutMe = () => {
//   return (
//     <section
//       id="about"
//       className="relative bg-gradient-to-b from-purple-900 via-black to-purple-900 py-20 text-white"
//     >
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
//         {/* Text Content */}
//         <div className="md:w-1/2">
//           <h2 className="text-4xl md:text-5xl font-bold">
//             About <span className="text-blue-400">Me</span>
//           </h2>
//           <p className="mt-4 text-gray-300 text-lg leading-relaxed">
//             Hi, I’m a passionate developer skilled in both{" "}
//             <span className="text-blue-400">
//               Front-End and Back-End technologies
//             </span>
//             . I specialize in building beautiful, interactive, and scalable
//             digital experiences.
//           </p>
//           <p className="mt-4 text-gray-300 text-lg leading-relaxed">
//             I love working with modern technologies and solving real-world
//             problems through my code.
//           </p>
//           <div className="mt-6">
//             <span className="text-xl text-blue-400 font-bold">
//               <Typewriter
//                 words={[
//                   "Creative Developer",
//                   "Problem Solver",
//                   "Lifelong Learner",
//                 ]}
//                 loop
//                 cursor
//                 cursorStyle="_"
//                 typeSpeed={50}
//                 deleteSpeed={30}
//                 delaySpeed={1000}
//               />
//             </span>
//           </div>
//         </div>

//         {/* Animation Section */}
//         <div className="md:w-1/2 mt-10 md:mt-0">
//           <div className="relative">
//             <div className="bg-gradient-to-tr from-purple-700 via-blue-500 to-blue-400 rounded-full w-72 h-72 mx-auto animate-pulse"></div>
//             <img
//               src="https://i.ibb.co/kQLTRpH/image.png"
//               alt="Animated Illustration"
//               className="absolute top-0 left-0 w-full h-full rounded-full"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;


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
