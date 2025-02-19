import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
      <footer className="bg-gray-100 py-10 px-6 md:px-20">
        {/* Call-to-Action Button at the Top */}
        <img src="https://www.alphawizz.com/img/newimg/AlphaWizz_black_logo.png" alt="Agon Logo" className="h-10 mt-10" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-end items-center mb-8 text-gray-800">
          <p className="font-semibold text-lg mr-4">Ready to get started?</p>
          <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800">Create an Account</button>
        </div>


<div className="lg:h-[1px] lg:w-[98%] bg-gray-400 mb-12 mt-12"></div>

        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-gray-800">
          {/* Logo & Contact */}
          <div>
            <p>4517 Washington Ave.<br/>Manchester, Kentucky 39495</p>
            <p className="mt-2">(239) 555-0108</p>
            <p className="mt-2">contact@agon.com</p>
          </div>
          
          {/* About Us */}
          <div>
            <h3 className="font-semibold mb-2">About Us</h3>
            <ul className="space-y-1">
              <li>Mission & Vision</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Press & Media</li>
              <li>Advertising</li>
              <li>Testimonials</li>
            </ul>
          </div>
          
          {/* Discover */}
          <div>
            <h3 className="font-semibold mb-2">Discover</h3>
            <ul className="space-y-1">
              <li>Our Blog</li>
              <li>Plans & Pricing</li>
              <li>Knowledge Base</li>
              <li>Cookie Policy</li>
              <li>Office Center</li>
              <li>News & Events</li>
            </ul>
          </div>
  
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>FAQs</li>
              <li>Editor Help</li>
              <li>Community</li>
              <li>Live Chatting</li>
              <li>Contact Us</li>
              <li>Support Center</li>
            </ul>
          </div>
  
          {/* Useful Links */}
          <div>
            <h3 className="font-semibold mb-2">Useful Links</h3>
            <ul className="space-y-1">
              <li>Request an offer</li>
              <li>How it works</li>
              <li>Pricing</li>
              <li>Reviews</li>
              <li>Stories</li>
            </ul>
          </div>
        </div>
        

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>&copy; Agon Official 2022</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Cookies</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
          </div>
          <div className="flex space-x-3 mt-2 md:mt-0">
            <a href="#" className="text-xl size-10 bg-[#006D77] rounded-full text-white flex justify-center items-center"><FaFacebookF /></a>
            <a href="#" className="text-xl size-10 bg-[#006D77] rounded-full text-white flex justify-center items-center"><FaTwitter /></a>
            <a href="#" className="text-xl size-10 bg-[#006D77] rounded-full text-white flex justify-center items-center"><FaInstagram /></a>
            <a href="#" className="text-xl size-10 bg-[#006D77] rounded-full text-white flex justify-center items-center"><FaLinkedinIn /></a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  