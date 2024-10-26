import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";

import EngFlag from "/src/assets/eng.png";
import SpaFlag from "/src/assets/spanish.png";
import { LuUser2 } from "react-icons/lu";

const Navbar = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setShowLanguageDropdown(false); // Close the dropdown after selecting a language
  };

  return (
    <div className="px-44">
      <div className="flex items-center justify-center gap-64 border-t-2 border-b-2 border-[#C20009] py-5">
        <nav className="flex items-center gap-20">
          <Link>Features</Link>
          <Link>Resources</Link>
          <Link to="/pricing">Prices</Link>
          <Link>About</Link>
        </nav>

        <div className="flex items-center gap-3 relative">
          <div className="flex items-center gap-2 cursor-pointer" onClick={toggleLanguageDropdown}>
            <p>{selectedLanguage === "English" ? "Eng" : "Spa"}</p>
            <FaChevronDown />
          </div>

          {showLanguageDropdown && (
            <div className="absolute shadow-[4px_4px_10px_rgba(188,30,45,0.1)] top-full mt-8 right-14 bg-white w-[180px] h-[72px] shadow-md">
              <p
                className="flex items-center gap-2 h-[36px] cursor-pointer text-[#191C1F] hover:bg-gray-100 p-2"
                onClick={() => selectLanguage("English")}
              >
                <img src={EngFlag} alt="English" className="w-4 h-4" />
                English
                {selectedLanguage === "English" && <FaCheck className="text-[#BC1E2D] ml-auto" />}
              </p>
              <p
                className="flex items-center gap-2 h-[36px] cursor-pointer text-[#5F6C72] hover:bg-gray-100 p-2"
                onClick={() => selectLanguage("Spanish")}
              >
                <img src={SpaFlag} alt="Spanish" className="w-4 h-4" />
                Spanish
                {selectedLanguage === "Spanish" && <FaCheck className="text-[#BC1E2D] ml-auto" />}
              </p>
            </div>
          )}
          <span>
            <FiShoppingCart size={20} color="#BC1E2D" />
          </span>
          <span>
            <LuUser2 size={20} color="#BC1E2D" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
