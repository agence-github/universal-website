import { changeLanguage } from 'i18next';
import React, { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa'; 

function LanguageSelector() {
  const languages = [
    { code: "en", lang: "English" },
    { code: "ar", lang: "Arabic" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  const changeLanguageHandler = (code) => {
    setSelectedLanguage(code);
    changeLanguage(code);

    // Change website direction based on selected language
    // document.documentElement.setAttribute("dir", code === "ar" ? "rtl" : "ltr");
  };

  useEffect(() => {
    changeLanguage("en");
    document.documentElement.setAttribute("dir", "ltr");
  }, []);

  return (
    <div className="relative flex items-center lg:text-[#C49E5F] text-white justify-center gap-4">
      <button
        className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2"
        onClick={() => setDropdownOpen(!dropdownOpen)} 
      >
        <FaGlobe className="text-xl text-[#8a6e40]" />
        {selectedLanguage === "en" ? "En" : "Ar"}
      </button>

      
      {dropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-40 text-[#C49E5F] rounded-lg shadow-lg z-10">
          {languages.map((lng) => (
            <button
              className={`block w-full text-left px-4 py-2 text-sm ${
                selectedLanguage === lng.code ? 'lg:bg-[#C49E5F] bg-[#C49E5F] text-white' : 'lg:text-[#C49E5F] text-black'
              } lg:hover:bg-[#C49E5F] hover:bg-[#a9864e] hover:text-white`}
              key={lng.code}
              onClick={() => {
                changeLanguageHandler(lng.code);
                setDropdownOpen(false); 
              }}
            >
              {lng.lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
