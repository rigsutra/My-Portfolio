// Footer.js
import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 md:py-20 px-4">
      <div className="container mx-auto flex flex-col w-[80%]">
        <div className="flex flex-col md:flex-row gap-20 mb-6 ">
          <div className=" text-left ml-5">
            <p className="text-lg font-semibold  mb-5">ASHISH SINGH</p>
            <p className="text-base text-left w-[55%] leading-loose  ">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <div className="md:ml-12 py-5 flex flex-col ">
            <p className="text-xl font-semibold mb-5 text-left">SOCIAL</p>
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
        </div>
        <div className="flex flex-col w-full">
          <div className="bg-slate-400 mb-4 h-[1px]"></div>
          <div className="mt-4 md:mt-0">
            <p className="text-[10px] text-center mt-4">
              © Copyright 2024. Made by Ashish Singh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
