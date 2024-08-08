// Footer.js
import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row md:justify-around">
        <div className="text-center md:text-left">
          <p className="text-lg font-medium mb-2">ASHISH SINGH</p>
          <p className="text-sm">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="text-center md:text-right flex">
          <p className="text-lg font-medium mb-2">SOCIAL</p>
          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="sm:flex md:flex lg:flex">
          <div className="bg-white w-full h-[1px]"></div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-center">
              © Copyright 2024. Made by Ashish Singh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
