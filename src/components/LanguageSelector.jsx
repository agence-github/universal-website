import { changeLanguage } from 'i18next';
import React, { useState, useEffect } from 'react';

function LanguageSelector() {
  const languages = [
    { code: "en", lang: "English" },
    { code: "ar", lang: "Arabic" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("en"); 

  const changeLanguageHandler = (code) => {
    setSelectedLanguage(code); 
    changeLanguage(code); 

    // Change website direction if Arabic is selected


    // if (code === "ar") {
    //   document.documentElement.setAttribute("dir", "rtl"); // Right to left for Arabic
    // } else {
    //   document.documentElement.setAttribute("dir", "ltr"); // Left to right for other languages
    // }
  };

  useEffect(() => {
    changeLanguage("en");
    document.documentElement.setAttribute("dir", "ltr"); 
  }, []);

  return (
    <div className="flex items-center justify-center  gap-4">
      {languages.map((lng) => (
        <button
          className={`transition duration-300 ease-in-out transform hover:scale-105 border px-4 py-2 rounded-lg mb-3 ${
            selectedLanguage === lng.code
              ? 'bg-blue-500 text-white border-transparent' 
              : 'border-white text-black' 
          }`}
          key={lng.code}
          onClick={() => changeLanguageHandler(lng.code)}
        >
          {lng.lang}
        </button>
      ))}
    </div>
  );
}

export default LanguageSelector;
