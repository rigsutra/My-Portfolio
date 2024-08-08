// About.js
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Wordpress",
    "PHP",
    "SASS",
    "GIT",
    "Github",
    "Responsive Design",
    "SEO",
    "Terminal",
  ];

  return (
    <section id="about" className="bg-white relative  py-20">
      <div className="container mx-auto text-center">
        <div className="flex flex-col pt-10 items-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-3">
            ABOUT ME
          </h2>
          <div className="w-6 h-1 rounded-md bg-purple-700"></div>
        </div>
        <p className="text-lg md:text-xl leading-relaxed mt-3 text-gray-600 mx-auto  md:max-w-3xl ">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-10 w-[80%] mx-auto text-[#666] ">
        <div className="md:w-1/2 m-3 ">
          <div className="container mx-auto px-4  py-16">
            <h2 className="text-3xl text-black font-bold mb-6">
              Get to Know Me!
            </h2>
            <p className="text-lg text-gray-600 mb-4 tracking-wide ">
              I'm a <span className="font-medium">Frontend Web Developer</span>{" "}
              building and managing the Front-end of Websites and Web
              Applications that leads to the success of the overall product.
              Check out some of my work in the{" "}
              <span className="font-medium">Projects</span> section.
            </p>
            <p className="text-lg text-gray-600 mb-4 tracking-wide">
              I also like sharing content related to the stuff that I have
              learned over the years in{" "}
              <span className="font-medium">Web Development</span> so it can
              help other people of the Dev Community. Feel free to Connect or
              Follow me on my{" "}
              <a
                href="https://www.linkedin.com/in/"
                className="underline text-purple-600"
              >
                Linkedin
              </a>{" "}
              and{" "}
              <a
                href="https://www.instagram.com/"
                className="underline text-purple-500"
              >
                Instagram
              </a>{" "}
              where I post useful content related to Web Development and
              Programming
            </p>
            <p className="text-lg text-gray-600 tracking-wide ">
              I'm open to <span className="font-medium"> Job </span>{" "}
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don't hesitate to <span className="font-medium"> contact</span>{" "}
              me.
            </p>
          </div>
          <motion.button
            className="bg-purple-700 text-white font-bold py-4 px-10 rounded ml-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            CONTACT
          </motion.button>
        </div>
        <div className="md:w-1/2 m-3">
          <div className="container mx-auto px-4 py-16">
            <div className="text-3xl text-black font-semibold mb-6">
              My Skills
            </div>
            <div className="flex flex-wrap justify-center mt-2 md:justify-start gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-100 rounded-lg px-5 py-2 text-center text-[16px]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
