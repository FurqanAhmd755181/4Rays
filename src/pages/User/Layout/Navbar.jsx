import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
<<<<<<< HEAD:src/LandingPage/Navbar.jsx
import { VscAccount } from "react-icons/vsc";
import EngFlag from "../assets/eng.png";
import SpaFlag from "../assets/spanish.png";

=======
import { LuUser2 } from "react-icons/lu";
>>>>>>> 0a9c6e252d718447a355d98b2e39eb9ea0aa64ab:src/pages/User/Layout/Navbar.jsx
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
<<<<<<< HEAD
<<<<<<< HEAD:src/LandingPage/Navbar.jsx
      <div className="px-44 flex items-center justify-center gap-64 border-t-2 border-b-2 border-[#C20009] py-5">
=======
      <div className=" px-44 flex items-center justify-center gap-64 border-t-2 border-b-2 border-[#D9D9D9] py-5">
>>>>>>> 0a9c6e252d718447a355d98b2e39eb9ea0aa64ab:src/pages/User/Layout/Navbar.jsx
        <nav className="flex items-center gap-20">
          <Link>Features</Link>
          <Link>Resources</Link>
          <Link to="/pricing">Prices</Link>
          <Link>About</Link>
        </nav>
<<<<<<< HEAD:src/LandingPage/Navbar.jsx
        <div className="flex items-center gap-3 relative">
          <div className="flex items-center gap-2 cursor-pointer" onClick={toggleLanguageDropdown}>
            <p>{selectedLanguage === "English" ? "Eng" : "Spa"}</p>
            <FaChevronDown />
=======
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <p className="text-[15px] font-[500]">Eng</p>
            <span>
              <FaChevronDown />
            </span>
>>>>>>> 0a9c6e252d718447a355d98b2e39eb9ea0aa64ab:src/pages/User/Layout/Navbar.jsx
          </div>
          {showLanguageDropdown && (
            <div className="absolute shadow-[4px_4px_10px_rgba(188,30,45,0.1)] top-full mt-8 right-14 bg-white w-[180px] h-[72px]  shadow-md">
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
=======
  <div className="px-44 flex items-center justify-center gap-64 border-t-2 border-b-2 border-[#D9D9D9] py-5">
    <nav className="flex items-center gap-20">
      <Link className="hover:text-[#BC1E2D] transition-colors">Features</Link>
      <Link className="hover:text-[#BC1E2D] transition-colors">Resources</Link>
      <Link to="/pricing" className="hover:text-[#BC1E2D] transition-colors">Prices</Link>
      <Link className="hover:text-[#BC1E2D] transition-colors">About</Link>
    </nav>
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <p className="text-[15px] font-[500]">Eng</p>
        <span>
          <FaChevronDown />
        </span>
>>>>>>> c6610a5e2f867df6acc09ae55960226133207309
      </div>
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
