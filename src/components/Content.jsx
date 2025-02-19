import React from 'react'
import { TiArrowRightThick } from "react-icons/ti";
import { Swiper, SwiperSlide } from 'swiper/react';



function Content() {
    return (
        <>





            <section>
                <div className='h-full w-screen mt-16 flex flex-row justify-evenly mb-14'>



                    <div className="p-6 mb-14">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="bg-[#DBECE5] lg:h-[500px] lg:w-[400px] p-6 shadow-lg rounded-2xl pt-[50px] pl-12 relative overflow-hidden">
                                <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/business-strategy.svg" alt="design" className='pb-8' />
                                <h3 className="text-4xl  mb-4 font-[Chivo,sans-serif] font-bold mt-5">Business Strategy</h3>
                                <p className='mt-5'>You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                <button className='mt-10 h-[75px] w-52 bg-white rounded-[50px] flex flex-row justify-center items-center text-black text-xl font-bold '>Get Start <TiArrowRightThick className='ml-4' />
                                </button>
                                <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/bg-business.svg" alt="design" className='absolute right-0 bottom-0' />

                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#D1ECFD] lg:h-[500px] lg:w-[400px] p-6 shadow-lg rounded-2xl pt-[50px] pl-12 relative overflow-hidden">
                                <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/local.svg" alt="design" className='pb-8' />
                                <h3 className="text-4xl  mb-4 font-[Chivo,sans-serif] font-bold mt-5">Local Marketing</h3>
                                <p className='mt-5'>You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                <button className='mt-10 h-[75px] w-52 bg-white rounded-[50px] flex flex-row justify-center items-center text-black text-xl font-bold '>Get Start <TiArrowRightThick className='ml-4' />
                                </button>
                                <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/bg-local.svg" alt="design" className='absolute right-0 bottom-0' />

                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#FFF3EA] lg:h-[500px] lg:w-[400px] p-6 shadow-lg rounded-2xl pt-[50px] pl-12 relative overflow-hidden">
                                <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/social.svg" alt="design" className='pb-8' />
                                <h3 className="text-4xl  mb-4 font-[Chivo,sans-serif] font-bold mt-5">Social media</h3>
                                <p className='mt-5'>You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                <button className='mt-10 h-[75px] w-52 bg-white rounded-[50px] flex flex-row justify-center items-center text-black text-xl font-bold '>Get Start <TiArrowRightThick className='ml-4' />
                                </button>
                                <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/bg-social.svg" alt="design" className='absolute right-0 bottom-0' />

                            </div>
                        </div>
                    </div>


                </div>
            </section>


            <section>
                <div className='lg:h-full mt-16 md:flex justify-evenly   '>

                    <div className='flex-1 rounded p-10'>  <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/img-2.png" alt="image sd" className=' rounded-xl' /> </div>
                    <div className='flex-1 h-screen  p-10 '>
                        
                        <div className='h-10 w-64 flex justify-center items-center rounded-3xl bg-[#FAEDE3] text-bold '>What We Do, What You Get </div>
                        <h1 className="text-black lg:text-5xl text-xl font-bold mt-5 ">About Alphawizz</h1>
                        <div className='h-20  text-[#475467] md:text-xl mt-5 ] tracking-widest'><p>Alphawizz Technologies is an established IT software development company with a dedicated team of over 100 professionals. Since 2019, we have been at the forefront of developing cutting-edge software solutions for medium and large enterprises across various industries. Our company is ISO certified, reflecting our commitment to integrating advanced technologies for the advancement of IT development. <br /><br />
                            At Alphawizz, our goal is to define, architect, and create technological solutions with a focus on financial efficiency, offering clients cost-effective and revenue-generating services for their businesses. This approach allows us to deliver affordable Web & Mobile Application Development Services tailored to meet our clients' needs effectively.</p></div>
                    </div>

                </div>
            </section>


            






        </>
    )
}

export default Content
