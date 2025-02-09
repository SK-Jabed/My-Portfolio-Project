// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const projectDetails = {
//   1: {
//     title: "LostFinder",
//     description:
//       "A platform to connect individuals who lost and found belongings...",
//     challenges: "Implementing real-time notifications...",
//     improvements: "Adding multi-language support...",
//     liveLink: "https://b10-assignment-11-753d2.web.app/",
//     githubLink: "https://github.com/SK-Jabed/LostFinder-Project-Client",
//     image: "https://i.ibb.co.com/xz1D4GF/Screenshot-2025-01-05-023258.png",
//   },
//   2: {
//     title: "Warmth & Care",
//     description:
//       "This platform bridges the gap between donors and volunteers, enabling...",
//     challenges: "Implementing real-time notifications...",
//     improvements: "Adding multi-language support...",
//     liveLink: "https://b10-assignment-09.web.app/",
//     githubLink: "https://github.com/SK-Jabed/Warmth-and-Care-Project",
//     image: "https://i.ibb.co.com/SQGgf96/Screenshot-2025-01-05-022651.png",
//   },
//   3: {
//     title: "FundSphere",
//     description:
//       "FundSphere is a modern, secure, and user-friendly crowdfunding platform designed for entrepreneurs, creators, and individuals.",
//     challenges: "Managing state across multiple components using Redux...",
//     improvements: "Implementing AI-based product recommendations...",
//     liveLink: "https://b10-assignment-10-6b3b9.web.app/",
//     githubLink: "https://github.com/SK-Jabed/FundSphere-Project-Client",
//     image: "https://i.ibb.co.com/W4p89fm4/Screenshot-2025-02-07-155724.png",
//   },
// };

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const project = projectDetails[id];

//   if (!project) {
//     return (
//       <div className="text-center text-white mt-20">Project not found.</div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16">
//       <div className="container mx-auto px-6 md:px-12">
//         {/* Project Layout */}
//         <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
//           {/* Left Section - Image */}
//           <div className="md:w-1/2 flex justify-center">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full md:w-4/5 lg:w-3/5 rounded-lg shadow-lg border-2 border-purple-500"
//             />
//           </div>

//           {/* Right Section - Details */}
//           <div className="md:w-1/2">
//             <h1 className="text-4xl font-bold text-blue-400">
//               {project.title}
//             </h1>
//             <p className="mt-6 text-lg leading-relaxed">
//               {project.description}
//             </p>
//             <h2 className="mt-8 text-2xl font-semibold">Challenges Faced</h2>
//             <p className="mt-4 text-base leading-relaxed">
//               {project.challenges}
//             </p>
//             <h2 className="mt-8 text-2xl font-semibold">Future Improvements</h2>
//             <p className="mt-4 text-base leading-relaxed">
//               {project.improvements}
//             </p>
//             {/* Action Buttons */}
//             <div className="mt-8 flex space-x-4">
//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition"
//               >
//                 Live Site
//               </a>
//               <a
//                 href={project.githubLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-medium rounded-md transition"
//               >
//                 GitHub Repo
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Go Back Button */}
//         <div className="mt-12 text-center">
//           <button
//             onClick={() => navigate(-1)}
//             className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;

import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const projectDetails = {
  1: {
    title: "LostFinder",
    description:
      "A platform to connect individuals who lost and found belongings, ensuring lost items are returned to their rightful owners efficiently.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux", "Cloudinary"],
    challenges: [
      "Implementing real-time notifications for lost & found reports.",
      "Optimizing database queries for faster searches.",
      "Ensuring secure image uploads with Cloudinary.",
    ],
    improvements: [
      "Adding multi-language support for global users.",
      "Enhancing AI-powered search for better accuracy.",
      "Introducing mobile app integration.",
    ],
    features: [
      "User authentication & profile management.",
      "Real-time search for lost & found items.",
      "Location-based item tracking.",
      "Admin panel for managing reports.",
      "Email & SMS notifications.",
    ],
    liveLink: "https://b10-assignment-11-753d2.web.app/",
    githubLink: "https://github.com/SK-Jabed/LostFinder-Project-Client",
    image: "https://i.ibb.co.com/xz1D4GF/Screenshot-2025-01-05-023258.png",
  },
  2: {
    title: "Warmth & Care",
    description:
      "A donation platform connecting donors with volunteers to provide winter clothing for underprivileged people.",
    technologies: ["React", "Tailwind CSS", "Firebase", "AOS", "Node.js"],
    challenges: [
      "Handling large-scale donation tracking.",
      "Implementing secure authentication for donors.",
      "Ensuring responsive UI for all devices.",
    ],
    improvements: [
      "Adding a chat feature for donor-volunteer communication.",
      "Implementing AI-driven donation recommendations.",
    ],
    features: [
      "Secure user authentication.",
      "Live donation tracking.",
      "Campaign management system.",
      "Real-time notifications.",
    ],
    liveLink: "https://b10-assignment-09.web.app/",
    githubLink: "https://github.com/SK-Jabed/Warmth-and-Care-Project",
    image: "https://i.ibb.co.com/SQGgf96/Screenshot-2025-01-05-022651.png",
  },
  3: {
    title: "FundSphere",
    description:
      "A modern crowdfunding platform for entrepreneurs, startups, and creators to raise funds securely and efficiently.",
    technologies: ["React", "Redux", "Tailwind CSS", "Stripe API", "Firebase"],
    challenges: [
      "Managing secure payment gateways.",
      "Ensuring fraud prevention mechanisms.",
      "Optimizing the UI for better user experience.",
    ],
    improvements: [
      "Implementing blockchain-based payment security.",
      "Adding community discussions and forums.",
      "Enhancing analytics for fundraisers.",
    ],
    features: [
      "Secure payment processing.",
      "Project tracking & analytics.",
      "Multi-currency support.",
      "AI-driven campaign suggestions.",
    ],
    liveLink: "https://b10-assignment-10-6b3b9.web.app/",
    githubLink: "https://github.com/SK-Jabed/FundSphere-Project-Client",
    image: "https://i.ibb.co.com/W4p89fm4/Screenshot-2025-02-07-155724.png",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectDetails[id];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!project) {
    return (
      <div className="text-center text-white mt-20">Project not found.</div>
    );
  }

  return (
    <div className="min-h-screen bg-[#120820] text-white mt-20 py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Section - Image */}
        <div data-aos="fade-up" className="md:w-1/2 flex flex-col items-center">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg shadow-lg border-2 border-purple-500"
          />
          <div className="mt-6 p-6 bg-white/10 rounded-lg w-full">
            <h2 className="text-xl font-bold text-purple-400">Key Features</h2>
            <ul className="mt-4 space-y-2 text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Details */}
        <div data-aos="fade-up" className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-blue-400">{project.title}</h1>
          <p className="text-lg leading-relaxed">{project.description}</p>
          <h2 className="text-2xl font-semibold">Technologies Used</h2>
          <p className="text-gray-300">{project.technologies.join(", ")}</p>
          <h2 className="text-2xl font-semibold">Challenges Faced</h2>
          <ul className="text-gray-300 space-y-2">
            {project.challenges.map((challenge, index) => (
              <li key={index}>• {challenge}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold">Future Improvements</h2>
          <ul className="text-gray-300 space-y-2">
            {project.improvements.map((improvement, index) => (
              <li key={index}>• {improvement}</li>
            ))}
          </ul>
          <div className="mt-8 flex space-x-4">
            <a
              href={project.liveLink}
              className="btn-primary flex items-center gap-2 text-lg px-7 py-2 bg-violet-800 rounded-md hover:bg-purple-900 text-white"
            >
              <FaExternalLinkAlt />
              <p>Live Site</p>
            </a>
            <a
              href={project.githubLink}
              className="btn-primary flex items-center gap-2 text-lg px-7 py-2 bg-violet-800 hover:bg-indigo-900 text-white rounded-md"
            >
              <FaGithub />
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <button
          onClick={() => navigate(-1)}
          className="btn-back flex items-center gap-2 text-lg px-7 py-2 bg-violet-800 rounded-md hover:bg-purple-900 text-white"
        >
          <FaArrowLeft />
          <p>Go Back</p>
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
