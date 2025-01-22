import React from "react";

import picture from "../../assets/Images/Contact.jpg";

const ContactUs = () => {
  return (
    <>
      <div
        className="relative w-full h-96 bg-cover bg-center mt-4  mb-40 "
        style={{ backgroundImage: `url(${picture})` }}
      >
        <div className="absolute inset-0 bg-purple-600 bg-opacity-60"></div>

        <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4 ">
              <h2 className="text-center text-4xl mb-2">Contact Us</h2>
              <p className="mb-2"> We are available 24/7 for any complaints our customers might have.</p>
              <p className="text-4xl">08143910394</p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
