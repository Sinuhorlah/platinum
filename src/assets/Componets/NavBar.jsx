import React, { useState, useEffect } from "react";
import Logo from "../../assets/Images/EasyCredit.png";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-sans z-50 top-0 fixed w-full">
      <header
        className={`flex justify-between items-center p-4 lg:px-16 ${
          isScrolled ? "bg-[#896be5] text-white shadow-md" : "bg-[#896be5] text-white"
        } transition-colors duration-300 fixed top-0 w-full`}
      >
   
  
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-40" />
        </div>

     
        <nav className="hidden lg:flex space-x-8 text-md justify-between">
          <a href="#">
            Home
          </a>
          <a href="#services">
           OurServices
          </a>
          <a href="#team">
            Our Team
          </a>
          <a href="#about">
            About Us
          </a>
          <a href="#faq">
                Faqs
              </a>
        </nav>
        <div>
          {/* <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 shadow-md transition">
            Get Started
          </button> */}
        </div>

        <button
          className="lg:hidden flex justify-center w-8 h-8 bg-gray-200 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {isOpen && (
          <div className="fixed top-16 left-0 right-0 bg-white text-black shadow-lg p-6 lg:hidden">
            <nav className="flex flex-col space-y-4 text-sm">
              <a href="#" className="hover:text-gray-500">
                Home
              </a>
              <a href="#" className="hover:text-gray-500">
               Our Services
              </a>
              <a href="#" className="hover:text-gray-500">
                Our Team
              </a>
              <a href="#" className="hover:text-gray-500">
                About Us
              </a>
              <a href="#" className="hover:text-gray-500">
                Faqs
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default NavBar;
