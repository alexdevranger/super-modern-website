import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logoAr.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <nav className="w-full flex justify-end items-center p-8 relative">
      <div className="absolute left-0">
        <NavLink to="/" activeclassname="active-link">
          <img src={logo} alt="logo" className="w-48 lg:w-64 cursor-pointer" />
        </NavLink>
      </div>
      <div className="flex justify-end items-center">
        <ul className="text-white min-[814px]:flex hidden list-none flex-row items-center navUl">
          <li className="mx-1 lg:mx-2 cursor-pointer text-[14px] xl:text-[20px]">
            <NavLink to="/" activeclassname="active-link">
              home
            </NavLink>
          </li>
          <li className="mx-1 lg:mx-2 cursor-pointer text-[14px] xl:text-[20px]">
            <NavLink to="/about-us" activeclassname="active-link">
              about us
            </NavLink>
          </li>
          <li className="mx-1 lg:mx-2 cursor-pointer text-[14px] xl:text-[20px]">
            <NavLink to="/roadmap" activeclassname="active-link">
              roadmap
            </NavLink>
          </li>
          <li className="mx-1 lg:mx-2 cursor-pointer text-[14px] xl:text-[20px]">
            <NavLink to="/send" activeclassname="active-link">
              easy-send
            </NavLink>
          </li>
          <li className="mx-1 lg:mx-2 cursor-pointer text-[14px] xl:text-[20px]">
            <NavLink to="/mobile-wallet" activeclassname="active-link">
              mobile
            </NavLink>
          </li>
          <li className="mx-1 lg:mx-2 cursor-pointer text-[14px] xl:text-[20px]">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={toggleDropdown}
                className="text-[14px] lg:text-[20px] border p-2 rounded-md border-[#3F51B5] hover:bg-[#1bf8ec] hover:text-black"
              >
                apps
              </button>
              {isOpen && (
                <ul className="absolute top-full ml-[-30px] px-3 bg-gray-800 text-white py-2 rounded-lg shadow-lg w-[130px]">
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.arabianchain.wallet&hl=bs&gl=US&pli=1"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 text-sm hover:bg-gray-700 mt-2"
                    >
                      Mobile
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://nft.arabianchain.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 text-sm hover:bg-gray-700 mt-2"
                    >
                      NFT
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://galaxy.arabianchain.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 text-sm hover:bg-gray-700 mt-2"
                    >
                      Galaxy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://explorer.arabianchain.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 text-sm hover:bg-gray-700 mt-2"
                    >
                      Explorer
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="mx-1 lg:mx-2 cursor-pointer text-[14px] lg:text-[20px]">
            <NavLink to="/contact" activeclassname="active-link">
              contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex relative">
        {!toggleMenu && (
          <HiOutlineMenu
            fontSize={28}
            className="text-white min-[814px]:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white min-[814px]:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 absolute -top-0 -right-2 min-w-[300px] p-3 min-h-[760px] h-full shadow-2xl min-[814px]:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <li className="mx-4 my-5 py-2 border-b border-t w-full text-center cursor-pointer border-purple-400">
              <Link to="/">HOME</Link>
            </li>
            <li className="mx-4 my-5 py-2 border-b border-t w-full text-center cursor-pointer border-purple-400">
              <Link to="/about-us">ABOUT US</Link>
            </li>
            <li className="mx-4 my-5 py-2 border-b border-t w-full text-center cursor-pointer border-purple-400">
              <Link to="/roadmap">ROADMAP</Link>
            </li>
            <li className="mx-4 my-5 py-2 border-b border-t w-full text-center cursor-pointer border-purple-400">
              <Link to="/send">EASY-SEND</Link>
            </li>
            <li className="mx-4 my-5 py-2 border-b border-t w-full text-center cursor-pointer border-purple-400">
              <Link to="/mobile-wallet">MOBILE</Link>
            </li>
            <h2 className="font-bold w-full border-t text-center pt-2">APPS</h2>
            <li className="mx-4 my-2 mt-4 w-full text-left cursor-pointer">
              <a
                href="https://nft.arabianchain.org/"
                target="_blank"
                rel="noreferrer"
              >
                - NFT MARKETPLACE
              </a>
            </li>
            <li className="mx-4 my-2 w-full text-left cursor-pointer">
              <a
                href="https://galaxy.arabianchain.org/"
                target="_blank"
                rel="noreferrer"
              >
                - GALAXY
              </a>
            </li>
            <li className="mx-4 my-2 w-full text-left cursor-pointer">
              <a
                href="https://explorer.arabianchain.org/"
                target="_blank"
                rel="noreferrer"
              >
                - EXPLORER
              </a>
            </li>
            <li className="mx-4 my-2 w-full text-left cursor-pointer border-b pb-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.arabianchain.wallet&hl=bs&gl=US&pli=1"
                target="_blank"
                rel="noreferrer"
              >
                - MOBILE WALLET
              </a>
            </li>
            <li className="mx-4 my-5 border-b border-t py-2 w-full text-center cursor-pointer border-purple-400">
              <Link to="/contact">CONTACT</Link>
            </li>
            {/* <li className="mx-4 my-8 bg-[#1BF8EC] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#1BF8EC] text-[#4a2084] font-bold">
              Login
            </li> */}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
