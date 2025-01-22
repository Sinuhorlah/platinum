import React from "react";
import {
  FiWifi,
  FiMonitor,
  FiSmartphone,
  FiDollarSign,
  FiMessageSquare,
  FiZap,
} from "react-icons/fi";
import picture from "../../assets/Images/CallCenter.jpg";
import centerImage from "../Images/Replacement.png";

const OurServices = () => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center " id="services">
        Our Services
      </h2>

      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${picture})` }}
      >
        <div className="absolute inset-0 bg-purple-600 bg-opacity-60"></div>

        <div className="relative flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
           
            <div className="space-y-6 text-center md:text-right md:pt-12">
              {[
                {
                  Icon: FiWifi,
                  title: "Buy Data",
                  description:
                    "Start enjoying this very low rates Data plan for your internet browsing databundle.",
                },
                {
                  Icon: FiMonitor,
                  title: "Cable Subscription",
                  description:
                    "Instantly Activate Cable subscription with favorable discount compared to others.",
                },
                {
                  Icon: FiSmartphone,
                  title: "Airtime TopUp",
                  description:
                    "Making an online recharge has become very easy and safe on PLATINUM EASY CREDIT.",
                },
              ].map(({ Icon, title, description }) => (
                <div className="flex items-center space-x-4 md:justify-end">
                  <Icon className="text-white text-4xl sm:text-5xl font-bold" />
                  <div>
                    <h4 className="text-lg sm:text-2xl font-semibold">
                      {title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

           
            <div className="flex justify-center w-full">
              <img
                src={centerImage}
                alt="Service Illustration"
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="space-y-6 text-center md:text-left md:pt-12">
              {[
                {
                  Icon: FiDollarSign,
                  title: "Airtime To Cash",
                  description:
                    "We offer this service at a very good attractive rate. Log in to see the current conversion rate.",
                },
                {
                  Icon: FiMessageSquare,
                  title: "Bulk SMS",
                  description:
                    "Send Bulk SMS to any number for as low as just 1.5 kobo per unit.",
                },
                {
                  Icon: FiZap,
                  title: "Utility Payment",
                  description:
                    "Because we understand your needs, we have made bills and utilities payment convenient.",
                },
              ].map(({ Icon, title, description }) => (
                <div className="flex items-center space-x-4 md:justify-start">
                  <Icon className="text-white text-4xl sm:text-5xl font-bold" />
                  <div>
                    <h4 className="text-lg sm:text-2xl font-semibold">
                      {title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
