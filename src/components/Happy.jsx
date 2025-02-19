import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";

const customers = [
  {
    name: "Brooklyn Simmons",
    company: "Nintendo",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would...",
    borderColor: "border-[#fad2e1]",
  },
  {
    name: "Jenny Wilson",
    company: "Starbucks",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback:
      "Their blood alcohol levels rose to 0.007 to 0.02 o/oo (parts per thousand), or 0.7 to 2.0 mg/L.",
    borderColor: "border-[#bee1e6]",
  },
  {
    name: "Albert Flores",
    company: "Bank of America",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    feedback:
      "So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would...",
    borderColor: "border-[#ddd3fa]",
  },
  {
    name: "Wade Warren",
    company: "Louis Vuitton",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    feedback:
      "Even factoring differences in body weight between children and adults into account.",
    borderColor: "border-[#d1ecfd]",
  },
];

const Happy = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header & Navigation */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Our Happy Customers</h2>
          <p className="text-gray-500 mt-1">
            Know about our clients, we are a worldwide corporate brand
          </p>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="space-x-3">
          <button className="swiper-button-prev-custom bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition-all duration-200">
            <IoIosArrowBack />
          </button>
          <button className="swiper-button-next-custom bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition-all duration-200">
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="swiper-container"
      >
        {customers.map((customer, index) => (
          <SwiperSlide key={index}>
            <div
              className={`border-8 h-80 ${customer.borderColor} p-6 shadow-md flex  space-x-4`}
            >
             
              <div>
              <img
                src={customer.image}
                alt={customer.name}
                className="w-14 h-14 rounded-full object-cover"
              />
                <h3 className="font-bold text-lg text-gray-900 mt-4">{customer.name}</h3>
                <p className="text-black text-sm">{customer.company}</p>
                <p className="mt-2 text-gray-700 ">{customer.feedback}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Happy;
