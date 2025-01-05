import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const projectDetails = {
  1: {
    title: "Gadget Heaven",
    description:
      "An e-commerce platform offering a wide range of gadgets. This project was built with modern technologies like React and Firebase.",
    challenges: "Managing state across multiple components using Redux...",
    improvements: "Implementing AI-based product recommendations...",
    liveLink: "https://gadgetheaven.com",
    githubLink: "https://github.com/username/gadget-heaven",
    image: "https://i.ibb.co.com/wKjrD4s/Screenshot-2025-01-05-022827.png", // Replace with actual project image URL
  },
  2: {
    title: "WhereIsIt",
    description:
      "A platform to connect individuals who lost and found belongings...",
    challenges: "Implementing real-time notifications...",
    improvements: "Adding multi-language support...",
    liveLink: "https://whereisit.com",
    githubLink: "https://github.com/username/whereisit",
    image: "https://i.ibb.co.com/xz1D4GF/Screenshot-2025-01-05-023258.png", // Replace with actual project image URL
  },
  // Add more project details as needed...
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="text-center text-white mt-20">Project not found.</div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Project Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Section - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-4/5 lg:w-3/5 rounded-lg shadow-lg border-2 border-purple-500"
            />
          </div>

          {/* Right Section - Details */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-blue-400">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed">
              {project.description}
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Challenges Faced</h2>
            <p className="mt-4 text-base leading-relaxed">
              {project.challenges}
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Future Improvements</h2>
            <p className="mt-4 text-base leading-relaxed">
              {project.improvements}
            </p>
            {/* Action Buttons */}
            <div className="mt-8 flex space-x-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition"
              >
                Live Site
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-medium rounded-md transition"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>

        {/* Go Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
