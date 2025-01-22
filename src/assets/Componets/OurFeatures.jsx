import React from 'react';
import Image from "../../assets/Images/RMO.png";

function OurFeatures() {
  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-20 lg:px-40 mt-20">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
        Our Features
      </h2>
      <p className="text-center text-gray-600 mt-4 md:mt-6">
        We offer instant recharge of Airtime, Databundle, <br /> CableTV (DStv, GOtv & Startimes), 
        Electricity Bill Payment, <br /> Airtime to cash, and more...
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-16 md:mt-20">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-600 text-lg leading-relaxed md:pr-8 ">
          <span className='font-bold mt-10 text-3xl'>We Provide Awesome Services.</span>   <br />
            Certain things are hard; making payments shouldn't be one of them. 
            PLATINUM EASY CREDIT helps you make payments for services you enjoy right from the comfort of your home or office. 
            The experience of total convenience, fast service delivery, and easy payment is just at your fingertips.
          </p>
        </div>

        <div className="md:w-[50%] flex justify-center mt-8 md:mt-0">
          <img src="/boy.jpg"  alt="Advert"  className="w-64 md:w-80 object-cover"/>
        </div>
      </div>
    </section>
  );
}

export default OurFeatures;
