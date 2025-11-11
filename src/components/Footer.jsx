import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiGoogletasks } from "react-icons/si";
const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#2E073F]  text-white p-10">
        <div>
          <div className="flex justify-between gap-1 items-center">
            <SiGoogletasks size={18} />
            <h6 className=" text-white font-semibold">Task Bridge</h6>
          </div>
          <p className="text-sm text-gray-400 max-w-xs mt-3">
            © TaskBridge. 2025 CreativeLayers. All rights reserved.{" "}
          </p>
        </div>

        <nav>
          <h6 className="footer-title">About</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Jobs on Task Bridge</a>
          <a className="link link-hover">Terms of Service</a>
        </nav>
        <nav>
          <h6 className="footer-title">Categories</h6>
          <a className="link link-hover">Web Development</a>
          <a className="link link-hover">Digital Marketing</a>
          <a className="link link-hover">Trending</a>
        </nav>

        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help & Support</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">FAQ</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover">
            {" "}
            <div className="flex gap-1 items-center">
              <FaSquareXTwitter />
              Task Bridge
            </div>
          </a>
          <a className="link link-hover">
            {" "}
            <div className="flex gap-1 items-center">
              <FaLinkedin /> Task Bridge
            </div>
          </a>
          <a className="link link-hover">
            {" "}
            <div className="flex gap-1 items-center">
              <FaFacebook /> Task Bridge
            </div>
          </a>
          <a className="link link-hover">
            {" "}

          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
