import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t">
      <div className="flex items-center gap-4">
        <div className="flex cursor-pointer">
          <img className="w-8" src="/education_favicon.png" alt="icon" />
          <img
            className="hidden md:block w-25 h-10"
            src={assets.learnify_logo}
            alt="logo"
          />
        </div>
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2025 © Learnify. All Right Reserved.
        </p>
      </div>
      <div className="flex items-center gap-3 max-md:mt-4">
        <a href="#">
          <img src={assets.facebook_icon} alt="facebook icon" />
        </a>
        <a href="#">
          <img src={assets.twitter_icon} alt="twitter icon" />
        </a>
        <a href="#">
          <img src={assets.instagram_icon} alt="instagram icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
