import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
const Navbar = () => {
  return (
    <div className="px-44">
      <div className=" px-44 flex items-center justify-center gap-64 border-t-2 border-b-2 border-[#D9D9D9] py-5">
        <nav className="flex items-center gap-20">
          <Link className="text-[14px] font-[500] hover:text-[#BC1E2D] hover:underline">
            Features
          </Link>
          <Link className="text-[14px] font-[500] hover:text-[#BC1E2D] hover:underline  ">
            Resources
          </Link>
          <Link className="text-[14px] font-[500] hover:text-[#BC1E2D] hover:underline ">
            Prices
          </Link>
          <Link className="text-[14px] font-[500] hover:text-[#BC1E2D]  hover:underline">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <p className="text-[15px] font-[500]">Eng</p>
            <span>
              <FaChevronDown />
            </span>
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
