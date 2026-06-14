"use client";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
interface FooterProps {
  home?: boolean;
}

const Footer: React.FC<FooterProps> = ({ home }) => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div
      className={
        home ? "footerHome py-6 z-50 relative" : "footer py-6 z-50 relative"
      }
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="footer-copywright w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-white">Designed and Developed by Henston</h3>
        </div>
        <div className="footer-copywright w-full md:w-1/3 text-center mb-4 md:mb-0">
          <h3 className="text-white">Copyright © {year} Henston Dsouza</h3>
        </div>
        <div className="footer-body w-full md:w-1/3 text-center md:text-right">
          <ul className="footer-icons flex justify-center md:justify-end space-x-4">
            <li className="social-icons">
              <a
                href="https://github.com/henston-dza"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="text-2xl" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://discordapp.com/users/1217812225037959238"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="text-2xl" />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/henston-melroy-dsouza/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.reddit.com/user/Bros_4_/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaReddit className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
