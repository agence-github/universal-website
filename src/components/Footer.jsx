import React from 'react';
import { FaLinkedin, FaFacebookF, FaInstagram, FaXing } from 'react-icons/fa'; 
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#C49E5F] py-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start lg:items-start text-center lg:text-left">
        <div className="mb-8 md:mb-0 flex-1">
          <h3 className="font-bold text-lg mb-4">COMPANY</h3>
          <ul className="font-light space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our vision
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Leadership
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0 flex-1">
          <h3 className="font-bold text-lg mb-4">BRANDS</h3>
          <ul className="font-light space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Freya
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Love
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Care
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0 flex-1">
          <h3 className="font-bold text-lg mb-4">DISTRIBUTOR</h3>
          <ul className="font-light space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Become a distributor
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Distributor resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Distributor FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0 flex-1">
          <h3 className="font-bold text-lg mb-4">CAREERS</h3>
          <ul className="font-light space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Job openings
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Employee benefits
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career development
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0 flex-1">
          <h3 className="font-bold text-lg mb-4">SOCIAL MEDIA</h3>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:underline text-2xl">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-2xl">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-2xl">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-2xl">
              <BsTwitterX />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <hr className="border-t border-white mb-4" />
        <p className="text-sm">
          Copyright © 2024 Universal Distribution LLC. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
