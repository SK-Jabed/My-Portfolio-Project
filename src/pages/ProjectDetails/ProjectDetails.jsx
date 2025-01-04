import React from "react";
import { useParams } from "react-router-dom";

const projectDetails = {
  1: {
    title: "Gadget Heaven",
    description:
      "An e-commerce platform offering a wide range of gadgets. This project was built with modern technologies like React and Firebase.",
    challenges: "Managing state across multiple components using Redux...",
    improvements: "Implementing AI-based product recommendations...",
    liveLink: "https://gadgetheaven.com",
    githubLink: "https://github.com/username/gadget-heaven",
  },
  2: {
    title: "WhereIsIt",
    description:
      "A platform to connect individuals who lost and found belongings...",
    challenges: "Implementing real-time notifications...",
    improvements: "Adding multi-language support...",
    liveLink: "https://whereisit.com",
    githubLink: "https://github.com/username/whereisit",
  },
  // Add more project details as needed...
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return <div className="text-center text-white">Project not found.</div>;
  }

  return (
    <div className="min-h-screen py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-400">{project.title}</h1>
        <p className="mt-4 text-lg">{project.description}</p>
        <h2 className="mt-8 text-2xl font-semibold">Challenges Faced</h2>
        <p className="mt-2">{project.challenges}</p>
        <h2 className="mt-8 text-2xl font-semibold">Future Improvements</h2>
        <p className="mt-2">{project.improvements}</p>
        <div className="mt-8">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 mr-4"
          >
            Live Site
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
