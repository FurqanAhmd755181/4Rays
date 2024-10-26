import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
const Navbar = () => {
  return (
    <div className="px-44">
      <div className=" px-44 flex items-center justify-center gap-64 border-t-2 border-b-2 border-[#C20009] py-5">
        <nav className="flex items-center gap-20">
          <Link>Features</Link>
          <Link>Resources</Link>
          <Link>Prices</Link>
          <Link>About</Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <p>Eng</p>
            <span>
              <FaChevronDown />
            </span>
          </div>
          <span>
            <FiShoppingCart size={20} color="red" />
          </span>
          <span>
            <VscAccount size={20} color="red" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
