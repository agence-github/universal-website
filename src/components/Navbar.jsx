import React, { useState, useEffect } from "react";
import Logo from "/assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/brands", label: "Our Brands" },
    { path: "/distributor", label: "Distributor Desk" },
    { path: "/supply-chain", label: "Supply Chain Network" },
    { path: "/careers", label: "Careers" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-8xl mx-auto px-4 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <img className="h-16 w-16 transition-all duration-300" src={Logo} alt="Logo" />
          </Link>

          <div className="hidden lg:flex items-center justify-center flex-1 space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-300 px-2 py-2 rounded-md ${
                  location.pathname === item.path
                    ? 'text-[#C49E5F] bg-opacity-20 bg-[#C49E5F]'
                    : `${isScrolled ? 'text-black' : 'text-black'} hover:text-[#C49E5F]`
                }`}
              >
                {item.label} 
              </Link>
            ))}
          </div>

          <Link to="/contact" className="hidden lg:block">
            <button className={`py-2 px-8 rounded-full transition-all duration-300 text-lg font-medium ${
              isScrolled
                ? 'bg-[#C49E5F] text-white hover:bg-opacity-90'
                : 'border-2 border-[#C49E5F] text-[#C49E5F] hover:bg-[#C49E5F] hover:text-white'
            }`}>
              Contact Us
            </button>
          </Link>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-[#C49E5F]'}`}
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden bg-[#C49E5F] w-64 overflow-y-auto ease-in-out transition-all duration-300 z-50`}
      >
        <div className="p-5">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="mt-10 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'bg-white text-[#C49E5F]'
                    : 'text-white hover:bg-white hover:text-[#C49E5F]'
                }`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="block pt-4">
              <button className="w-full text-[#C49E5F] py-2 px-8 rounded-full bg-white hover:bg-opacity-90 transition-all duration-300 text-base font-medium">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;