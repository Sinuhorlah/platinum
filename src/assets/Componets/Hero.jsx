import React from "react";
import googlePlayBadge from "../../assets/Images/NewApple.png";
import appStoreBadge from "../../assets/Images/play.png";
import heroImage from "../../assets/Images/RMO.png";

const Hero = () => {
  return (
    <section className="relative text-white py-10 px-4 lg:py-20 lg:px-16 overflow-hidden bg-[#896be5] flex items-center">
      <div className="container mx-auto flex flex-wrap lg:flex-wrap items-center justify-between">
        <div className=" flex flex-wrap lg:w-1/2 text-center lg:text-left px-4">
          <h1 className="text-3xl lg:text-5xl  mb-6 leading-tight text-white">
            Unlock the Power <br /> of Your Airtime
          </h1>
          <p className="text-base lg:text-lg mb-6 text-white">
            Easily transfer credit across networks, turn excess airtime into
            cash, and recharge your phone or data in moments. With our seamless
            platform, sending airtime to loved ones in Nigeria has never been
            faster or simpler. No account? No problem!{" "}
            <span className="text-black "> Click the GET STARTED</span> and
            experience instant convenience today.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start space-x-4">
            <button className="bg-white px-4 rounded-md">
              <img src={googlePlayBadge} alt="Google Play" className="h-10 lg:h-12 w-auto " />
            </button>
            <button className="bg-black px-4 py-1 rounded-md">
              <img src={appStoreBadge} alt="App Store" className="h-10 lg:h-12 w-auto" />
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-wrap justify-center items-center mt-8 lg:mt-0 px-4 h-[520px]">
          <img src={heroImage} alt="" className="max-w-full w-3/4 lg:w-full object-contain h-[600px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
