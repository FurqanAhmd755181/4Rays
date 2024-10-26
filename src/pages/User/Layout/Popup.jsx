import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <div 
        className="flex items-center gap-2 cursor-pointer" 
        onClick={toggleDropdown}
      >
        <p>Eng</p>
        <FaChevronDown />
      </div>

      {isOpen && (
        <div className="absolute mt-2 w-44 bg-white rounded-lg shadow-lg z-10">
          <div className="flex items-center w-full h-9 px-3 cursor-pointer hover:bg-gray-100">
            <img src="path/to/english-flag.png" alt="English" className="w-5 h-5 mr-2" />
            <p>English</p>
          </div>
          <div className="flex items-center w-full h-9 px-3 cursor-pointer hover:bg-gray-100">
            <img src="path/to/spanish-flag.png" alt="Spanish" className="w-5 h-5 mr-2" />
            <p>Spanish</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
