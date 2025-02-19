import React, { useState } from 'react';

import { IoMdClose } from "react-icons/io";


function SideBarMenu({ onClose }) {


  return (
    <>
      <div
        className="fixed top-0 right-0 bg-white shadow-lg text-black p-4 h-screen w-96 transform transition-transform duration-300 ease-in-out 
                translate-x-0 z-[1000] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
        style={{ position: 'fixed', zIndex: 1 }}
      >
        <div className="flex items-center mb-4">
          <img
            src="https://agon-html-demo.vercel.app/demos/assets/imgs/template/ava_1.png"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-3">
            <p className="text-lg font-semibold">Hi, Steven!</p>
            <p className="text-sm">You have 5 new messages</p>
          </div>
        </div>

        <ul className="mt-6">
          <li className="py-2 cursor-pointer hover:text-gray-700">Home</li>
          <li className="py-2 cursor-pointer hover:text-gray-700">About</li>
          <li className="py-2 cursor-pointer hover:text-gray-700">Company</li>
          <li className="py-2 cursor-pointer hover:text-gray-700">Pages</li>
          <li className="py-2 cursor-pointer hover:text-gray-700">Blog</li>
          <li className="py-2 cursor-pointer hover:text-gray-700">Shop</li>
        </ul>


        {/* <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul> */}



      </div>
    </>

  );
}

export default SideBarMenu;



// import React, { useState } from 'react';
// import { RxHamburgerMenu } from "react-icons/rx";
// import { MdOutlineClose } from "react-icons/md";

// function SideBarMenu() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex">
//       <div
//         className={`bg-gray-800 text-white p-4 fixed top-0 left-0 h-screen w-64 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
//       >
//         <div className="flex justify-end">
//           {isSidebarOpen && (
//             <button onClick={toggleSidebar} className="p-2">
//               <MdOutlineClose />
//             </button>
//           )}
//         </div>
//         {/* Sidebar content here */}
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </div>

//       <div className="flex-grow p-4">
//         {/* Main content here */}
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={toggleSidebar}
//         >
//           <RxHamburgerMenu />
//         </button>
//       </div>
//     </div>
//   );
// }


// export default SideBarMenu;