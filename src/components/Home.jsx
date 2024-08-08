// Home.js
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaBook,
} from "react-icons/fa";

const Home = () => {
  return (
    <div id="home">
      <section className="relative min-h-screen flex justify-center items-center bg-gray-100 text-center">
        <div className="absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-7xl py-12">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-[60px] font-extrabold tracking-widest">
              HEY, I'M ASHISH SINGH
            </h1>
            <p className="text-lg md:text-[21px] mt-12 mb-10 mx-auto md:max-w-3xl leading-relaxed">
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that lead to the success of the overall product.
            </p>
            <Link to="/projects">
              <motion.button
                className="bg-[#7843E9] text-white font-bold py-4 px-20 rounded mt-5"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white shadow-lg p-3 hidden lg:block">
          <div>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl my-3 text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-3xl my-3 text-gray-700 hover:text-blue-400" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-3xl my-3 text-gray-700 hover:text-red-600" />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl my-3 text-gray-700 hover:text-black" />
            </a>
            <a
              href="https://www.goodreads.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBook className="text-3xl my-3 text-gray-700 hover:text-green-600" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
