import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hero from "/assets/career_hero.webp";

const jobTitles = [
  "Job title",
  "Software Engineer",
  "Product Manager",
  "Data Analyst",
  "UX Designer",
  "Marketing Specialist",
];

// Dummy data for job listings
const jobListings = [
  {
    title: "Software Engineer",
    location: "San Francisco",
    link: "#software-engineer-sf",
  },
  {
    title: "Product Manager",
    location: "New York",
    link: "#product-manager-ny",
  },
  { title: "Data Analyst", location: "Chicago", link: "#data-analyst-chicago" },
  { title: "UX Designer", location: "Los Angeles", link: "#ux-designer-la" },
  {
    title: "Marketing Specialist",
    location: "Boston",
    link: "#marketing-specialist-boston",
  },
];

const CareerHero = () => {
  const [jobTitle, setJobTitle] = useState("Job title");
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const results = jobListings.filter(
      (job) =>
        (jobTitle === "Job title" ||
          job.title.toLowerCase() === jobTitle.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
    );
    setSearchResults(results);
    setShowDropdown(location.length > 0 && results.length > 0);
  }, [jobTitle, location]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", jobTitle, "in", location);
  };

  return (
    <section>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={hero}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 text-center px-4 w-full max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-8xl cinzel-font mb-8 lg:pb-6"
          >
            Be Part of Something
            <br />
            <span className="text-6xl md:text-9xl cinzel-font">Beautiful</span>
          </motion.h1>
          <div className="relative">
            <motion.form
              onSubmit={handleSearch}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col md:flex-row gap-2 max-w-4xl mx-auto bg-white rounded-lg p-2"
            >
              <div className="flex-1">
                <select
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full p-3 rounded-md bg-transparent border-none focus:ring-0"
                >
                  {jobTitles.map((title, index) => (
                    <option key={index} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-3 rounded-md bg-transparent border-none focus:ring-0"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#C49E5F] text-white p-3 rounded-md flex items-center justify-center whitespace-nowrap"
              >
                <Search size={20} className="mr-2" />
                Search
              </motion.button>
            </motion.form>
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute w-full bg-white mt-2 rounded-lg shadow-lg overflow-hidden z-20"
                >
                  {searchResults.map((job, index) => (
                    <a
                      key={index}
                      href={job.link}
                      className="block p-3 hover:bg-gray-100 transition duration-150 ease-in-out text-left"
                    >
                      <div className="font-semibold text-gray-800">
                        {job.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {job.location}
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
