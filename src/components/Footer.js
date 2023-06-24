import React from "react";
import logo from "../images/gradientLogo.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer pt-[100px]">
    <div className="w-full flex md:flex-row flex-col justify-between items-center my-4">
      <div className="flex lg:flex-[0.5] justify-center items-center">
        <LazyLoadImage
          effect="blur"
          loading="lazy"
          decoding="async"
          alt="logo"
          src={logo}
          className="w-32"
        />
      </div>
      <div className="flex flex-1 flex-col sm:flex-row justify-evenly md:items-center items-center content-center flex-wrap sm:mt-0 mt-5 w-full">
        <div className="text-white text-base text-left mx-2 cursor-pointer mt-6 md:mt-0">
          <a
            href="https://explorer.arabianchain.org/#/"
            target="_blank"
            rel="noreferrer"
          >
            <p>Explorer</p>
          </a>
          <a
            href="https://galaxy.arabianchain.org"
            target="_blank"
            rel="noreferrer"
          >
            <p>Galaxy Wallet</p>
          </a>
          <a href="https://arabianchain.org/" target="_blank" rel="noreferrer">
            <p>Website</p>
          </a>
          <a href="https://arabianchain.org/" target="_blank" rel="noreferrer">
            <p>Desktop Wallet</p>
          </a>
        </div>
        <div className="text-white text-base text-left mx-2 cursor-pointer mt-6 md:mt-0">
          <a
            href="http://dubxpool.arabianchain.org/"
            target="_blank"
            rel="noreferrer"
          >
            <p>Pool</p>
          </a>
          <a
            href="http://dubx.krokipool.pro/#/"
            target="_blank"
            rel="noreferrer"
          >
            <p>Kroki Pool</p>
          </a>
          <a
            href="https://github.com/DUBXCOIN/go-dubxcoin"
            target="_blank"
            rel="noreferrer"
          >
            <p>Github Source</p>
          </a>
          <a
            href="https://twitter.com/arabianchaintec"
            target="_blank"
            rel="noreferrer"
          >
            <p>Twitter</p>
          </a>
        </div>
        <div className="text-white text-base text-center md:text-left mx-2 cursor-pointer mt-6 md:mt-0">
          {/* <p>contact us</p> */}
          <p>info@arabianchain.org</p>
          <p className="flex flex-row w-[300px] justify-center md:justify-start mt-2">
            <a
              href="https://github.com/DUBXCOIN/go-dubxcoin"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="mr-[40px] text-[30px] text-white" />
            </a>
            <a
              href="https://twitter.com/arabianchaintec"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="mr-[30px] text-[30px] text-white" />
            </a>
            <a
              href="https://web.telegram.org/k/#@DUBXCOIN_GROUP"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegramPlane className="text-[30px] text-white" />
            </a>
          </p>
          <p className="text-[white] text-sm text-left font-medium mt-4 hover:text-[pink] hover:underline">
            <Link to="/disclaimer">DISCLAIMER</Link>
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Come join us and hear for the unexpected miracle
      </p>
      {/* <p className="text-white text-sm text-center font-medium mt-2 hover:text-[pink] hover:underline">
        <Link to="/disclaimer">DISCLAIMER</Link>
      </p> */}
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs flex items-center">
        <span className="text-[15px] mr-[10px]">© </span> arabianchain2023
      </p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
