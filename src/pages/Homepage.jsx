


import React from 'react'
import Navbar from '../components/Navbar'
import { BsFillPlayCircleFill } from "react-icons/bs";
import { TiArrowRightThick } from "react-icons/ti";
import Content from '../components/Content';
import Offer from '../components/offer';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import Happy from '../components/Happy';
import NewsLetter from '../components/NewsLetter';


function Homepage() {
    return (
        <>




            <Navbar />


            <div>
                <div className='bg-[#FAEDE3] lg:h-[120vh] relative '>
                    {/* <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/template/pattern-1.svg" alt="back-layouts" className='absolute top-0 right-0  w-56 h-72 object-cover object-right-bottom' /> */}
                    <div className='absolute top-0 right-0  w-48 h-72 object-cover object-right-bottom  lg:bg-[url("https://agon-html-demo.vercel.app/demos/assets/imgs/template/pattern-1.svg")]'
                    ></div>

                    <div className='flex justify-between items-center lg:ml-6 z-[1]'>
                        <div className="">
                            <h1 className="text-black lg:text-8xl text-2xl font-bold p-10 ">We are  <br />
                                <span className="text-[#006D77]">awesome team</span>
                                <br />
                                for your <br />
                                business dream</h1>
                            <div className='h-20 w-[60%] flex items-center justify-center text-[#667085] lg:text-2xl ml-12 ]'>Integrated workflow designed for product teams. We create world-class development and branding..</div>
                            <div className='h-16 flex items-center justify-start mt-16 flex-col lg:flex-row'>
                                <button className='h-[75px] w-52 bg-[#101828] rounded-[50px] flex flex-row justify-center items-center text-white text-xl font-bold lg:ml-10 z-[2] '>Get Start <TiArrowRightThick className='ml-4' />
                                </button>
                                <button className='h-[75px] w-52 rounded-[50px] flex flex-row justify-center items-center text-[#101828] text-xl font-bold lg:ml-10 '>Learn More<TiArrowRightThick className='ml-4' />
                                </button></div>


                        </div>
                        <div className='w-1/5 h-full '>
                            <div className=" animate-up-down w-48  flex-row rounded-xl h-56 bg-[url('https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/watch-intro.png')] bg-cover bg-center bg-no-repeat absolute bottom-0 left-1/2 -translate-x-1/4  hidden lg:flex" >
                                <div className='ml-[-28px] flex items-center'><a href="https://www.youtube.com/watch?v=oRI37cOPBQQ" className='text-white bg-black rounded-full'><BsFillPlayCircleFill size={50} /></a></div>
                                <div className='text-white text-3xl font-bold p-10'>Watch intro video</div>

                            </div>


                        </div>
                        <div className='animate-left-right absolute bottom-0 right-0 hidden lg:block '>
                            <img src="../../public/images/mahila.png" alt="mahila" />
                        </div>


                    </div>


                    <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/template/pattern-2.svg" alt=" " className='absolute bottom-0 left-0  w-48 h-56 object-cover object-left-top z-[0] hidden lg:block' />
                    {/* <div className='absolute bottom-0 left-0  w-48 h-72 object-cover object-left-top z-[0] bg-[url("https://agon-html-demo.vercel.app/demos/assets/imgs/template/pattern-2.svg")]'
                    ></div> */}
                </div>
            </div>

            {/* <div className='h-32 w-screen mt-32 flex flex-row justify-evenly'> */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            
                <div class="hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out h-24 w-48 flex justify-center items-center">
                    <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/slider/logo/sample-logo-1.svg " alt="" className="h-32 w-40" />
                </div>
                <div class="hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out h-24 w-48 flex justify-center items-center">
                    <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/slider/logo/sample-logo-2.svg" className="h-32 w-40" alt="" />
                </div>
                <div class="hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out h-24 w-48 flex justify-center items-center">
                    <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/slider/logo/sample-logo-3.svg" className="h-32 w-40" alt="" />
                </div>
                <div class="hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out h-24 w-48 flex justify-center items-center">
                    <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/slider/logo/sample-logo-4.svg" className="h-32 w-40" alt="" />
                </div>
                <div class="hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out h-24 w-48 flex justify-center items-center">
                    <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/slider/logo/sample-logo-5.svg" className="h-32 w-40" alt="" />
                </div>
                <div class="hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out h-24 w-48 flex justify-center items-center">
                    <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/slider/logo/sample-logo-6.svg" className="h-32 w-40" alt="" />
                </div>


            </div>

            <Content />
            <Offer />
            <Happy />

            <Pricing />
            <NewsLetter/>
            <Footer />


            {/* <ScrollEffect/> */}





        </>
    )
}

export default Homepage
