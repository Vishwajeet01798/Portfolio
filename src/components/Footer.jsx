import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook size={24} className="text-2xl cursor-pointer" />
              </a>
              <FaTwitter size={24} />
              <a href="https://www.instagram.com/vishwajeet_verma1/" target="_blank">
              <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/vishwajeet-verma-52622b203/" target="_blank">
              <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 . All rights reserved.
              </p>
              <p className="text-sm"> ❤️ Vishwajeet Verma </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
