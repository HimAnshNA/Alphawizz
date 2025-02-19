import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="relative bg-[#FFF3EA] mt-16 mb-24 p-10 rounded-2xl max-w-5xl h-xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Section: Text & Input */}
      <div className="max-w-lg">
        <p className="text-sm font-medium text-gray-600">NEWSLETTER</p>
        <h2 className="text-5xl font-bold text-gray-900 mt-2">
          Subscribe our newsletter
        </h2>
        <p className="text-gray-600 mt-2">
          By clicking the button, you are agreeing with our{" "}
          <span className="text-teal-600 font-semibold cursor-pointer">
            Term & Conditions
          </span>
        </p>

        {/* Input Field */}
        <div className="mt-6 flex items-center bg-white p-2 rounded-full shadow-md">
          <input
            type="email"
            placeholder="Enter your mail .."
            className="flex-grow px-4 py-6 outline-none text-gray-700 rounded-l-full"
          />
          <button className="bg-[#016D77] text-white px-4 py-4 rounded-full hover:bg-teal-700 transition">
          <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Right Section: Image & Floating Stats */}
      <div className="relative">
        <img
          src="https://agon-html-demo.vercel.app/demos/assets/imgs/template/img-newsletter.png"
          alt="Team Work"
          className="w-72 h-88 rounded-lg shadow-lg object-cover"
        />
        {/* Floating Stats Card with Motion */}
        <motion.div
          className="absolute -bottom-6 -left-6 lg:-bottom-24 lg:-left-32 bg-white p-3 rounded-xl shadow-lg w-64"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3, // Duration of one full cycle
            repeat: Infinity, // Infinite loop
            ease: "easeInOut", // Smooth animation
          }}
        >
        
     
          <img
            src="https://agon-html-demo.vercel.app/demos/assets/imgs/template/chart.png"
            alt="Graph"
            className="mt-1"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NewsLetter;
