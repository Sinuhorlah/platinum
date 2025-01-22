import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#896be5] relative mt-34">
      
      <div className="bg-white max-w-5xl mx-auto rounded-lg shadow-lg px-6 py-8 md:py-12 relative -top-10 mt-24">
 
        <div className="grid grid-cols-1">
     
          <div>
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6">
              Address  </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-10 h-10 border border-purple-400 rounded-full flex items-center justify-center mr-4 text-[#896be5] bg-white">
                  <i className="fas fa-home"></i>
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                23, JOSEPH AVENUE, SANGOTEDO,
                  <br />
                  MARKET, LEKKI EPE EXPRESSWAY
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 border border-blue-300 rounded-full flex items-center justify-center mr-4 text-[#896be5] bg-white">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                +2348143910394 <br />
                +2349094944212
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 border border-blue-300 rounded-full flex items-center justify-center mr-4 text-[#896be5] bg-white">
                  <i className="fas fa-envelope"></i>
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  info@platinumeasycredit.com, <br/>
                  support@platinumeasycredit.com
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 border border-blue-300 rounded-full flex items-center justify-center mr-4 text-[#896be5] bg-white">
                  <i className="fas fa-globe"></i>
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  <www className="Platinunmeasycredit com"></www>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#896be5] px-6 py-8 text-white text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://web.facebook.com/johndoe?_rdc=1&_rdr" className="text-white bg-[#896be5] w-10 h-10 flex items-center justify-center rounded-full hover:bg-purple-400" >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white bg-[#896be5] w-10 h-10 flex items-center justify-center rounded-full hover:bg-purple-400" >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" className="text-white bg-[#896be5] w-10 h-10 flex items-center justify-center rounded-full hover:bg-purple-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-white bg-[#896be5] w-10 h-10 flex items-center justify-center rounded-full hover:bg-purple-400" >
            <i className="fab fa-google"></i>
          </a>
        </div>
        <p className="text-white text-sm md:text-base">
          © 2024 All rights reserved | PLATINUM EASYCREDIT
        </p>
      </div>
    </footer>
  );
};

export default Footer;
