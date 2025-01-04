import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Gadget Heaven",
    image: "https://i.ibb.co.com/wKjrD4s/Screenshot-2025-01-05-022827.png", // Replace with project image URL
    description: "An e-commerce platform for the latest gadgets...",
    technologies: ["React", "Tailwind CSS", "Firebase", "Redux"],
  },
  {
    id: 2,
    title: "WhereIsIt",
    image: "https://i.ibb.co.com/xz1D4GF/Screenshot-2025-01-05-023258.png", // Replace with project image URL
    description: "A platform to connect people for lost and found items...",
    technologies: ["Next.js", "Daisy UI", "MongoDB"],
  },
  {
    id: 3,
    title: "Crowdcube",
    image: "https://i.ibb.co.com/Fx5JGKw/Screenshot-2025-01-05-023809.png", // Replace with project image URL
    description: "A crowdfunding website to raise funds for your ideas...",
    technologies: ["React", "Node.js", "Express.js", "Stripe"],
  },
  {
    id: 4,
    title: "Winter Donation",
    image: "https://i.ibb.co.com/SQGgf96/Screenshot-2025-01-05-022651.png", // Replace with project image URL
    description: "A platform to donate winter clothes to needy people...",
    technologies: ["React", "SwiperJS", "Tailwind CSS"],
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-400 animate-fade-in-down">
            My Best Projects
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Explore my top projects and the challenges I overcame to complete
            them.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm text-gray-500 font-semibold">
                    Technologies:
                  </h4>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-md"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleViewDetails(project.id)}
                  className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
