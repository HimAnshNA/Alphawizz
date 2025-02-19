import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingOptions = [
    {
      name: "Standard",
      monthlyPrice: 35,
      annualPrice: 350, // 10 months pricing (discounted)
      features: [
        "Unlimited updates",
        "Custom permissions",
        "Custom designs & features",
      ],
      missingFeatures: ["Custom hashtags"],
    },
    {
      name: "Essentials",
      monthlyPrice: 89,
      annualPrice: 890,
      features: [
        "Unlimited updates",
        "Custom permissions",
        "Custom instructors",
      ],
      missingFeatures: ["Optimize hashtags"],
    },
    {
      name: "Premium",
      monthlyPrice: 125,
      annualPrice: 1250,
      features: [
        "Unlimited updates",
        "Custom designs & features",
        "Custom permissions",
        "Optimize hashtags",
        "Custom instructors",
      ],
      missingFeatures: [],
    },
  ];

  return (
    <div className="bg-[#006D77] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">
          Choose The Best Plan <br />That's For You
        </h2>
        <div className="flex justify-center items-center mt-4">
          <span className="mr-3 text-gray-300">Billed Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer focus:outline-none "
              checked={isAnnual}
              onChange={() => setIsAnnual(!isAnnual)}
            />
            <div className="w-12 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-white rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
          </label>
          <span className="ml-3 text-gray-300">Bill Annually</span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-6">
        {pricingOptions.map((plan, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-xl shadow-lg p-6 flex flex-col "
          >
           
            <p className="text-4xl font-bold my-3">
              ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
              <span className="text-gray-500 text-lg"> / {isAnnual ? "year" : "month"}</span>
            </p>
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="text-gray-500 mt-4 mb-4 font-['Noto Sans'] text-sm">
              {plan.name === "Premium"
                ? "Advanced features for pros who need more customization."
                : "All the basics for businesses that are just getting started."}
            </p>
            <hr className="w-full my-4" />

            {/* Features List */}
            <ul className="w-full space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center  text-[#006D77]">
                  <FaCheckCircle /> <span className="ml-2 text-gray-800">{feature}</span>
                </li>
              ))}
              {plan.missingFeatures.map((feature, i) => (
                <li key={i} className="flex items-center  text-gray-500">
                <IoIosCloseCircleOutline /><span className="ml-2 text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-6 w-64 bg-white border-[1px] font-bold  border-black text-black px-6 py-2 rounded-xl text-lg  hover:bg-[#101828] hover:text-white transition flex justify-between items-center">
              Get Started<FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
