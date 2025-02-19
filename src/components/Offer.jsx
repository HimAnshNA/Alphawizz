import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Offer = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description: "One make creepeth, man bearing theira firmament.",
      image: "https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/market.svg",
    },
    {
      title: "Cognitive Solution",
      description: "One make creepeth, man bearing theira firmament.",
      image: "https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/market.svg",
    },
    {
      title: "Market Research",
      description: "One make creepeth, man bearing theira firmament.",
      image: "https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/consulting.svg",
    },
    {
      title: "Strategic Consulting",
      description: "One make creepeth, man bearing theira firmament.",
      image: "https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/market.svg",
    },
  ];

  return (

    <>
                <div className=' h-screen w-screen flex justify-center mb-12'>
                   

        
                  











               
    <section className="bg-[#FFF3EA] py-16 px-6 rounded-[80px] relative">
   <div className="absolute top-0 left-0"> <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/template/pattern-white.svg" alt="backgr" /></div>

      <div className="text-center">
        <h2 className="text-black lg:text-5xl text-xl font-bold mt-5 ">What We Offer</h2>
        <p className="text-gray-600 mt-2">
          What makes us different from others? We give holistic solutions with strategy, design & technology.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="mt-10 max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            
            
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-4"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="flex ">
              <div className="bg-white  p-6 rounded-2xl h-72 w-72">
                <img src={service.image} alt={service.title} className="w-12 h-12 ml-4 mt-6 " />
                <h1 className=" font-bold text-gray-900 text-xl mt-6 ml-4">{service.title}</h1>
                <p className="text-gray-600 mt-6 ml-4">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center mt-16">    <style>
                {`
                  .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    margin: 0 5px;
                    background-color: #9F9F9F;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                  }
                  .swiper-pagination-bullet-active {
                    background-color: #006D77;
                    width: 10px;
                    height: 10px;
                  }
                `}
              </style></div>
           
      </div>
    </section>

    </div>
    </>
  );
};

export default Offer;
