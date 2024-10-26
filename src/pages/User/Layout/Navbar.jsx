import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import Popup from "./Popup";

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
          <Link to="/about">About</Link>
        </nav>

        <div className="flex items-center gap-3 relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleLanguageDropdown}
          >
            <p>{selectedLanguage === "English" ? "Eng" : "Spa"}</p>
            <FaChevronDown />
          </div>

          {showLanguageDropdown && (

            <Popup
              selectedLanguage={selectedLanguage}
              selectLanguage={selectLanguage}
            />

          )}
          <span>
            <Link to="/cart">
              <FiShoppingCart size={20} color="#BC1E2D" />
            </Link>
          </span>
          <Link to="/Signup" ><span>
            <LuUser2 size={20} color="#BC1E2D" />
          </span></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
