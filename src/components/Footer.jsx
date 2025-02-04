import React from 'react';
import { FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa'; 
import { BsTwitterX } from "react-icons/bs";

const FooterSection = ({ title, items }) => (
  <div className="mb-8 md:mb-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4">
    <h3 className="font-bold text-lg mb-4">{title}</h3>
    <ul className="font-light space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.link} className="hover:underline transition-colors duration-300">
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ Icon, link }) => (
  <a href={link} className="text-white hover:text-gray-200 transition-colors duration-300">
    <Icon size={24} />
  </a>
);

const Footer = () => {
  const footerSections = [
    {
      title: "COMPANY",
      items: [
        { text: "About us", link: "/about" },
        { text: "Contact us", link: "/contact" },
      ],
    },
    {
      title: "BRANDS",
      items: [
        { text: "Freya", link: "/brands/freya" },
        { text: "Luv", link: "/brands/luv" },
        { text: "Care", link: "/brands/care" },
        { text: "Skino", link: "/brands/skino" },
        { text: "Max Cleaning", link: "/brands/max-cleaning" },
        { text: "Max Styling Wax", link: "/brands/max-styling-wax" },
        { text: "Max Styling Gel", link: "/brands/max-styling-gel" },
      ],
    },
    {
      title: "DISTRIBUTOR",
      items: [
        { text: "Become a distributor", link: "/distributor" },
      ],
    },
    {
      title: "CAREERS",
      items: [
        { text: "Job openings", link: "/careers" },
      ],
    },
  ];

  const socialIcons = [
    { Icon: FaLinkedin, link: "#" },
    { Icon: FaFacebookF, link: "#" },
    { Icon: FaInstagram, link: "#" },
    { Icon: BsTwitterX, link: "#" },
  ];

  return (
    <footer className="bg-[#C49E5F] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {footerSections.map((section, index) => (
            <FooterSection key={index} {...section} />
          ))}
          {/* <div className="mb-8 md:mb-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4">
            <h3 className="font-bold text-lg mb-4">SOCIAL MEDIA</h3>
            <div className="flex space-x-4">
              {socialIcons.map((icon, index) => (
                <SocialIcon key={index} {...icon} />
              ))}
            </div>
          </div> */}
        </div>
        <div className="mt-12 pt-8 border-t border-white/30 text-center">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} Universal Distribution LLC. All Rights Reserved
          </p>
          <p className="text-sm">
            Created by The Agenc-E
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
