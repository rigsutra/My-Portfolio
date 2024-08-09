import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="py-5 md:py-20">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 md:py-5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 md:h-58 object-cover p-2 pt-3 rounded-xl overflow-hidden"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-primary">{project.title}</h3>
          <p className="mt-2 text-accent">
            {project.description.length > 70
              ? project.description.slice(0, 70) + "..."
              : project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-purple-600 text-white py-2 px-4 rounded-md md:mt-3 hover:scale-105 transition-transform duration-300"
          >
            Open GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
