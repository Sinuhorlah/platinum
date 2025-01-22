
import React from "react";
import { FaHeadset, FaTelegram } from "react-icons/fa";
import { FaHelmetSafety, FaShield, FaSquareCaretUp } from "react-icons/fa6";

const Body = () => {
  return (
    <section className="px-4 py-10 md:px-20 lg:px-32 bg-white mb-10" id="about">
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold ">
          About PLATINUM EASY <br /> CREDIT
        </h2>

        <p className="mt-6 text-gray-600 max-w-4xl">
        Platinum Easy Credit app is a dedicated online platform/market place, where airtime is been traded and equally convert to cash. platinum easy credit app enables you to convert your phone airtime to money and your bank account will be credited immediately. you can transfer your airtime from one network to another, for instance, you can transfer from your glo line to mtn, airtel or etisalat. all transactional activities on this platform will be monitored by regulated authorities. If several languages coalesce the grammar of the resulting language

Every month they moved their money the old way – which wasted their time and money. So they invented a beautifully simple workaround that became a billion-dollar business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-xl hover:scale-105">
          <div className="flex justify-center items-center h-16 w-16 mx-auto ">
               <FaTelegram className="text-5xl text-purple-600" />
          </div>
    
          <h3 className="text-lg font-semibold mt-4">Automation</h3>
          <p className="mt-2 text-gray-600">
            In assurance to give you the best treat, all our services and transactions are running on an automated system. Without any delay in delivery.
          </p>
        </div>

      
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-xl hover:scale-105">
          <div className="flex justify-center items-center h-16 w-16 mx-auto">
          {/* <FaSquareCaretUp /> */}
          <FaShield  className="text-5xl"/>
          </div>
          <h3 className="text-lg font-semibold mt-4">You're Safe</h3>
          <p className="mt-2 text-gray-600">
            Our data delivery, bill payment, and wallet funding are automated. Airtime top-up and data purchase are automated and get delivered to you almost instantly.
          </p>
        </div>

       
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-xl hover:scale-105">
          <div className="flex justify-center items-center h-16 w-16 mx-auto ">
         <FaHeadset  className="text-5xl text-blue-700"/>
          </div>
          <h3 className="text-lg font-semibold mt-4">24/7 Support</h3>
          <p className="mt-2 text-gray-600">
            Our customers are premium to us; hence, satisfying them is our topmost priority. Our customer service is just a click away.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Body;
