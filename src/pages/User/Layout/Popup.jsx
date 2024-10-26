// Popup.jsx
import React from "react";
import { FaCheck } from "react-icons/fa6";


const Popup = ({ selectedLanguage, selectLanguage }) => {
  return (
    <div className="absolute shadow-[4px_4px_10px_rgba(188,30,45,0.1)] top-full mt-8 right-14 bg-white w-[180px] shadow-md">
      {/* Display the active language on top */}
      {selectedLanguage === "English" ? (
        <>
          <p
            className="flex items-center gap-3 h-[36px] cursor-pointer p-2 text-[14px] font-medium font-public-sans"
            onClick={() => selectLanguage("English")}
            style={{ color: "#191C1F" }} // Active color for English
          >
            <img src="/eng.svg" alt="English" className="w-5 h-5" />
            English
            <FaCheck className="text-[#BC1E2D] ml-auto" />
          </p>
          <p
            className="flex items-center gap-3 h-[36px] cursor-pointer p-2 text-[14px] font-regular font-public-sans"
            onClick={() => selectLanguage("Spanish")}
            style={{ color: "#5F6C72" }} // Inactive color for Spanish
          >
            <img src="/spanish.svg" alt="Spanish" className="w-5 h-5" />
            Spanish
          </p>
        </>
      ) : (
        <>
          <p
            className="flex items-center gap-3 h-[36px] cursor-pointer p-2 font-medium"
            onClick={() => selectLanguage("Spanish")}
            style={{ color: "#191C1F" }} // Active color for Spanish
          >
            <img src="/spanish.svg" alt="Spanish" className="w-4 h-4" />
            Spanish
            <FaCheck className="text-[#BC1E2D] ml-auto" />
          </p>
          <p
            className="flex items-center gap-3 h-[36px] cursor-pointer p-2"
            onClick={() => selectLanguage("English")}
            style={{ color: "#5F6C72" }} // Inactive color for English
          >
            <img src="/eng.svg" alt="English" className="w-4 h-4" />
            English
          </p>
        </>
      )}
    </div>
  );
};

export default Popup;
