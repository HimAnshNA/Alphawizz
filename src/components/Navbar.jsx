import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menu, close } from 'ionicons/icons';
import SideBarMenu from './SideBarMenu';
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";



function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenun = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (<>
 
      <div className=" lg:sticky top-0 z-50 lg:shadow font-[Poppins] h-[100px] mt-8 justify-center items-center bg-white  ">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <img
              className="w-auto h-16 cursor-pointer"
              src="https://www.alphawizz.com/img/newimg/AlphaWizz_black_logo.png"
              alt="..."
            />
          </div>
          <div
            className={`nav-links text-lg duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 ${isMenuOpen ? 'top-[9%]' : ''}`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500" href="#">Products</a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">Solution</a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">Resource</a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">Developers</a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec] sm:scale-90">Get started</button>
          



            <div className="relative">
              <button
                className="text-3xl cursor-pointer zindex"
                style={{ position:'relative' ,zIndex: 9 }}
                onClick={toggleMenun}
              >
                {isMenuOpen ? <IoMdClose /> : <IoIosMenu />}
              </button>

              {isMenuOpen && <SideBarMenu onClose={toggleMenun} />}


              
            </div>

          </div>
        </nav>
      </div>
</>
  );
}

export default Navbar;


// import React, { useState } from 'react';
// import SideBarMenu from './SideBarMenu';
// // import { RxHamburgerMenu } from "react-icons/rx";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className="bg-white">
//         <nav className="flex justify-between items-center w-[90%] h-500px mx-auto">
//           <div>
//             <img
//               className="w-30 h-10 cursor-pointer"
//               src="https://www.alphawizz.com/img/newimg/AlphaWizz_black_logo.png"
//               alt="..."
//             />
//           </div>

//           <div className="hidden md:flex space-x-6">
//             <a href="#" className="hover:text-gray-500">Products</a>
//             <a href="#" className="hover:text-gray-500">Solution</a>
//             <a href="#" className="hover:text-gray-500">Resource</a>
//             <a href="#" className="hover:text-gray-500">Developers</a>
//             <a href="#" className="hover:text-gray-500">Pricing</a>
//           </div>

//           <div className="hidden md:block lg:hidden">
//             <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
//               Get Started
//             </button>
//           </div>

//           <SideBarMenu/>
//         </nav>

//         <div
//           className={`fixed top-0 right-0 w-80 h-screen bg-white shadow-md overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
//         >
//           <div className="p-4">
//             <h2 className="text-lg font-semibold mb-4">Menu</h2>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100">Products</a>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100">Solution</a>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100">Resource</a>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100">Developers</a>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100">Pricing</a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;


