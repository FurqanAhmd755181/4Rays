import React from "react";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { FaRegCalendar } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import news from "../../../assets/News.png";
import imagee from "../../../assets/News.png";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import news1 from "../../../assets/news.png";
import news2 from "../../../assets/news2.png";
import news3 from "../../../assets/news3.png";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate("/blogdetails"); // Navigate to the desired route
  };
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);
  const blogsPerPage = 8;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`); // Replace this with your filtering logic
    setIsOpen(false); // Close dropdown after selecting an option
  };
  const newsData = [
    {
      id: 1,
      img: news1,
      headline:
        "Cras nisl dolor, et metus sit amet, vulputate condimentum dolor.",
      description:
        "Maecenas scelerisque, tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
      author: "John Doe",
      date: "Oct 07, 2024",
      messages: 453,
    },
    {
      id: 2,
      img: news2,
      headline:
        "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
      description:
        "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.",
      author: "Jane Smith",
      date: "Oct 06, 2024",
      messages: 738,
    },
    {
      id: 3,
      img: news3,
      headline:
        "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
      description:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
      author: "Alex Brown",
      date: "Oct 05, 2024",
      messages: 826,
    },
    {
      id: 3,
      img: news3,
      headline:
        "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
      description:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
      author: "Alex Brown",
      date: "Oct 05, 2024",
      messages: 826,
    },
    {
      id: 3,
      img: news3,
      headline:
        "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
      description:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
      author: "Alex Brown",
      date: "Oct 05, 2024",
      messages: 826,
    },
    {
      id: 3,
      img: news3,
      headline:
        "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
      description:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
      author: "Alex Brown",
      date: "Oct 05, 2024",
      messages: 826,
    },
    {
      id: 3,
      img: news3,
      headline:
        "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
      description:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
      author: "Alex Brown",
      date: "Oct 05, 2024",
      messages: 826,
    },
    {
      id: 3,
      img: news3,
      headline:
        "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
      description:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
      author: "Alex Brown",
      date: "Oct 05, 2024",
      messages: 826,
    },
    {
      id: 3,
      img: news3,
      headline:
        "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
      description:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
      author: "Alex Brown",
      date: "Oct 05, 2024",
      messages: 826,
    },
    {
      id: 3,
      img: news3,
      headline:
        "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
      description:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
      author: "Alex Brown",
      date: "Oct 05, 2024",
      messages: 826,
    },
  ];
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = newsData.slice(indexOfFirstBlog, indexOfLastBlog);
  // Calculate the total number of pages
  const totalPages = Math.ceil(newsData.length / blogsPerPage);
  const pagesToShow = Array.from(
    { length: Math.min(totalPages, 10) },
    (_, index) => index + 1
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = () => {
    const foundBlog = newsData.find((blog) =>
      blog.headline.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundBlog) {
      setIsNotFound(false);
      navigate(`/blogdetails/${foundBlog.id}`);
    } else {
      setIsNotFound(true);
      navigate("/error");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const categories  = [
    "All",
        "Electronics Devices",
        "Computer & Laptop",
        "Computer Accessories",
        "SmartPhone",
        "Headphone",
        "Mobile Accessories",
        "Gaming Console",
        "Camera & Photo",
  ];

  return (
    <div>
     
      <div className="grid grid-cols-12 gap-10 px-[120px] mt-[50px]">
        <div className="col-span-4 flex flex-col gap-4">
          <div className="flex flex-col border rounded-md p-3">
            <h1 className="px-3 text-[16px]">CATEGORY</h1>
            <ul className="px-3 flex flex-col gap-2 mt-2">
              {categories .map((product, index) => (
                <li className="flex items-center" key={index}>
                  <input
                    type="radio"
                    id={`item${index + 1}`}
                    name="category"
                    className="mr-2 custom-radio "
                  />
                  <label htmlFor={`item${index + 1}`} className="text-[14px]">
                    {product}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col border rounded-md p-3">
            <h1 className="px-3 text-[16px]">LATEST BLOG</h1>
            <div className="px-3 flex items-start gap-4">
              <img src={news} alt="" className="w-16 h-16 object-cover rounded-lg" />{" "}
              <div className="flex flex-col overflow-hidden">
                {" "}
                <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                  Curabitur pulvinar aliquam lectus, non blandit erat mattis
                  vitae.
                </p>
                <span className="text-gray-500 text-sm">October 9, 2024</span>{" "}
              </div>
            </div>
            <div className="p-3 flex items-start gap-4">
              <img src={news} alt="" className="w-16 h-16 object-cover rounded-lg" />{" "}
              <div className="flex flex-col overflow-hidden">
                {" "}
                <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                  Curabitur pulvinar aliquam lectus, non blandit erat mattis
                  vitae.
                </p>
                <span className="text-gray-500 text-sm">October 9, 2024</span>{" "}
              </div>
            </div>
            <div className="p-3 flex items-start gap-4">
              <img src={news} alt="" className="w-16 h-16 object-cover rounded-lg" />{" "}
              <div className="flex flex-col overflow-hidden">
                {" "}
                <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                  Curabitur pulvinar aliquam lectus, non blandit erat mattis
                  vitae.
                </p>
                <span className="text-gray-500 text-sm">October 9, 2024</span>{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col border rounded-md p-3">
            <h1 className="text-[16px] font-[500]">Gallery</h1>
            <div className="flex flex-wrap gap-1 px-3">
              {" "}
              <div className="flex gap-1 w-full">
                <img className="w-1/4 p-1 rounded-xl" src={imagee} alt="" />
                <img className="w-1/4 p-1 rounded-xl" src={imagee} alt="" />
                <img className="w-1/4 p-1 rounded-xl" src={imagee} alt="" />
                <img className="w-1/4 p-1 rounded-xl" src={imagee} alt="" />
              </div>
              <div className="flex gap-1 w-full">
                <img className="w-1/4 p-1 rounded-xl" src={imagee} alt="" />
                <img className="w-1/4 p-1 rounded-xl" src={imagee} alt="" />
                <img className="w-1/4 p-1 rounded-xl" src={imagee} alt="" />
                <img className="w-1/4 p-1 rounded-xl" src={imagee} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-2">
            <h1 className="text-[16px] font-[500]">POPULAR TAGS</h1>
            <div className="flex flex-col gap-3">
              <div className="flex gap-1 w-full">
                <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#BC1E2D] hover:text-[#BC1E2D]">
                  Game
                </button>
                <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#BC1E2D] hover:text-[#BC1E2D]">
                  iPhone
                </button>
                <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#BC1E2D] hover:text-[#BC1E2D]">
                  TV
                </button>
                <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#BC1E2D] hover:text-[#BC1E2D]">
                  Asus Laptops
                </button>
              </div>
              <div className="flex gap-1 w-full">
                <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#BC1E2D] hover:text-[#BC1E2D]">
                  Macbook{" "}
                </button>
                <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#BC1E2D] hover:text-[#BC1E2D]">
                  SSD
                </button>
                <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#BC1E2D] hover:text-[#BC1E2D]">
                  Speaker
                </button>
                <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#BC1E2D] hover:text-[#BC1E2D]">
                  Graphics
                </button>
              </div>
              <div className="flex gap-1 w-full">
                <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#BC1E2D] hover:text-[#BC1E2D]">
                  Macbook{" "}
                </button>
                <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#BC1E2D] hover:text-[#BC1E2D]">
                  SSD
                </button>
                <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#BC1E2D] hover:text-[#BC1E2D]">
                  Speaker
                </button>
                <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#BC1E2D] hover:text-[#BC1E2D]">
                  Graphics{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <div
      className="flex items-center border border-gray-300 rounded-md"
      style={{ width: "424px", height: "44px" }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown} // Trigger search on Enter key
        className="flex-grow h-full px-2 outline-none border-none placeholder-gray-400" // Added height and padding
      />
        <button onClick={handleSearch} className="text-gray-600 h-full flex items-center justify-center px-2">
          <AiOutlineSearch />
        </button>
    </div>

    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          Most Popular 
          <IoIosArrowDown
            className="-mr-1 ml-2 h-5 w-5"
            aria-hidden="true"
          />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {["Option 1", "Option 2", "Option 3", "Option 4"].map(
              (option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {option}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  </div>
  <div className="grid grid-cols-2 gap-6 px-4">
    {newsData.map((news) => (
      <div
        key={news.id}
        className="bg-white p-4 flex flex-col shadow-md w-full"
      >
        <img
          src={news.img}
          alt={news.headline}
          className="w-full h-48 object-cover mb-4"
        />

        <div className="flex gap-4 items-center mb-4">
          <div className="flex items-center space-x-1">
            <VscAccount size={20} color="#BC1E2D" /> {/* Updated icon color */}
            <span className="text-[#475156] text-[14px]">
              {news.author}
            </span>
          </div>

          <div className="flex items-center space-x-1">
            <FaRegCalendar size={20} color="#BC1E2D" /> {/* Updated icon color */}
            <span className="text-[#475156] text-[14px]">
              {news.date}
            </span>
          </div>

          <div className="flex items-center space-x-1">
            <AiOutlineMessage size={20} color="#BC1E2D" /> {/* Updated icon color */}
            <span className="text-[#475156] text-[14px]">
              {news.messages}
            </span>
          </div>
        </div>

        <h2 className="text-[24px] font-semibold mb-2">
          {news.headline}
        </h2>

        <p className="text-gray-600 mb-4">{news.description}</p>
        <button
          onClick={handleButtonClick}
          className="w-[162px] h-[48px] flex items-center gap-3 border border-[#BC1E2D] text-[#BC1E2D] px-2 py-2 rounded-full" // Updated border and text color, rounded
        >
          Read More
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    ))}
  </div>
  <div className="flex justify-center mt-4">
  <button
    onClick={handlePrevPage}
    className="mx-1 px-3 py-2 rounded-full border border-[#BC1E2D] bg-white text-[#BC1E2D] hover:bg-[#BC1E2D] hover:text-white disabled:opacity-50"
    disabled={currentPage === 1}
  >
    &lt; {/* Left Arrow */}
   
  </button>
  {pagesToShow.map((page) => (
    <button
      key={page}
      onClick={() => setCurrentPage(page)}
      className={`mx-1 px-3 py-2 rounded-full border ${
        currentPage === page
          ? "bg-[#BC1E2D] text-white font-bold" // Active page style
          : "bg-white text-[#BC1E2D]"
      } hover:bg-[#BC1E2D] hover:text-white transition duration-200`} // Hover effect
    >
      {page}
    </button>
  ))}
  <button
    onClick={handleNextPage}
    className="mx-1 px-3 py-2 rounded-full border border-[#BC1E2D] bg-white text-[#BC1E2D] hover:bg-[#BC1E2D] hover:text-white disabled:opacity-50"
    disabled={currentPage === totalPages}
  >
    &gt; {/* Right Arrow */}
    
  </button>
</div>

</div>

      </div>
    </div>
  );
};

export default BlogList;
