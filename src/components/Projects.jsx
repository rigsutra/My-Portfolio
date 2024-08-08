import React from "react";
import ProjectCard from "./ProjectCard"; // Make sure to adjust the path if necessary
import ChatAppImg from "../assets/images.jpeg";
import TodoImg from "../assets/my-actions-view-1.gif";
import portfoiloImg from "../assets/protfoilo.jpg";

const projects = [
  {
    id: 2,
    title: "ChatApp-MERN",
    description:
      "This is a MERN-Stack project. This is a real-time chat application with user login and registration.",
    image: ChatAppImg,
    link: "https://github.com/rigsutra/mern-chat-app/tree/main/mern-chat",
  },
  {
    id: 1,
    title: "Todo-Full Stack",
    description:
      "Full Stack Todo Project using MERN-Stack. Features Like Login and registration personalization tasks and EVENTS section",
    image: TodoImg,
    link: "https://github.com/rigsutra/todo-react-backend-and-frontend",
  },
  {
    id: 3,
    title: "My Portfolio",
    description:
      "A frontend portfolio website highlights a developer’s skills and projects with a professional, responsive design. It includes a homepage introduction, an About page with skills and experience, a Projects page with detailed work descriptions, and a Contact page with a form and social links. Optional features can enhance the site",
    image: portfoiloImg,
    link: "https://github.com/example/project3",
  },
  {
    id: 4,
    title: "Project 5",
    description: "Description of Project 4.",
    image: "path/to/image4.jpg",
    link: "https://github.com/example/project4",
  },

  // Add more projects as needed
];

const Projects = () => {
  // Sort projects by their id in ascending order
  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider pt-10 mb-3">
            PROJECTS
          </h2>
          <div className="w-6 h-1 rounded-md bg-purple-700"></div>
          <p className="text-lg md:text-xl leading-relaxed mt-3 text-gray-600 mx-auto md:max-w-3xl">
            Here you will find some of the personal projects that I created,
            each project containing GitHub links through which you can visit on
            your own.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-[80%]">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
