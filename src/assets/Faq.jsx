import React, { useState } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <div>
      <section id="faq" className="py-12 bg-gray-50" >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Frequently Asked Questions
              <span className="block mt-2 h-1 w-20 bg-blue-600 mx-auto"></span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="rounded-lg overflow-hidden ">
                <img src="https://img.freepik.com/free-vector/tiny-people-sitting-standing-near-giant-faq_74855-7879.jpg" alt="FAQ" className="w-full h-auto"/>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleAccordion(0)}
                    className="w-full text-left px-6 py-4 bg-white font-medium text-gray-700 focus:outline-none">
                    How To Buy Data?
                  </button>
                  {activeIndex === 0 && (
                    <div className="px-6 py-4">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Log in to your account</li>
                        <li>If not, click here to register</li>
                        <li>After logging in, click "Fund My Account"</li>
                        <li>
                          Select "Coupon Payment". NB: You can buy coupon codes
                          from our agents
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleAccordion(1)}
                    className="w-full text-left px-6 py-4 bg-white font-medium text-gray-700 focus:outline-none" >
                    What Are The Codes For Checking Data Balance?
                  </button>
                  {activeIndex === 1 && (
                    <div className="px-6 py-4">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>MTN - *461*4#</li>
                        <li>9mobile (SME) - *229*9#</li>
                        <li>9mobile (Gifting) - *228#</li>
                        <li>Airtel - *140#</li>
                        <li>Glo - *127*0#</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="border border-gray-200 rounded-lg">
                  <button onClick={() => toggleAccordion(2)}className="w-full text-left px-6 py-4 bg-white font-medium text-gray-700 focus:outline-none" >
                    How Do I Fund My Wallet?
                  </button>
                  {activeIndex === 2 && (
                    <div className="px-6 py-4">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Bank payment</li>
                        <li>
                          Online Payment with your ATM card details via Paystack
                          Payment Gateway
                        </li>
                        <li>Payment with airtime</li>
                        <li>Payment with Coupon Code(s)</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleAccordion(3)}
                    className="w-full text-left px-6 py-4 bg-white font-medium text-gray-700 focus:outline-none" >
                    Can I Send Airtime?
                  </button>
                  {activeIndex === 3 && (
                    <div className="px-6 py-4">
                      <p className="text-gray-600">
                        Yes, you can, but payment with airtime attracts a smalladditional charge. Kindly fund your wallet with airtime. </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
