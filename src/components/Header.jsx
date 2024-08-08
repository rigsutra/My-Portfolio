// Header.js
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import profileImg from "../assets/img new.jpg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="py-4 px-10 md:py-4 md:px-20 shadow-md fixed w-full bg-white z-[1000]">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-full mr-4 md:mr-6 w-12 h-12 bg-[#7843E9] flex-shrink-0"
          />
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-xl font-bold whitespace-nowrap cursor-pointer"
          >
            ASHISH SINGH
          </ScrollLink>
        </div>

        <button className="md:hidden p-2 text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="flex items-center font-semibold cursor-pointer"
              >
                HOME
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="flex items-center font-semibold cursor-pointer"
              >
                ABOUT
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="flex items-center font-semibold cursor-pointer"
              >
                PROJECTS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="flex items-center font-semibold cursor-pointer"
              >
                CONTACT
              </ScrollLink>
            </li>
          </ul>
        </nav>

        <nav
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 right-0 w-48 bg-white shadow-md rounded-md`}
        >
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="flex items-center font-semibold cursor-pointer"
                onClick={toggleMenu}
              >
                HOME
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="flex items-center font-semibold cursor-pointer"
                onClick={toggleMenu}
              >
                ABOUT
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="flex items-center font-semibold cursor-pointer"
                onClick={toggleMenu}
              >
                PROJECTS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="flex items-center font-semibold cursor-pointer"
                onClick={toggleMenu}
              >
                CONTACT
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
