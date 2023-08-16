import React from "react";
import desktop from "../images/desktop_optimized.webp";
import webw from "../images/webw_optimized.webp";
import mining from "../images/mining_optimized.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaLinux } from "react-icons/fa";
import { SiWindows } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import { GiMining } from "react-icons/gi";
import { HiExternalLink } from "react-icons/hi";
import videoGalaxy from "../images/video1.mp4";
import videoMine from "../images/video2.mp4";

const Wallets = () => {
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const videoWallet = () => {
    setShowModal1(true);
  };
  const videoMining = () => {
    setShowModal2(true);
  };
  return (
    <div className="flex flex-col w-full justify-center items-center gradient-pink pt-32">
      {showModal1 && (
        <>
          <div className="justify-center items-center fixed inset-0 z-50 overflow-auto outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-full lg:max-w-[70%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold flex items-center">
                    HOW TO CREATE WALLET
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowModal1(false);
                    }}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col min-[450px]:flex-row">
                  <div className="w-full sm:block pr-1 pl-1">
                    <div className="flex flex-wrap place-content-evenly">
                      <video
                        controls={true}
                        autoPlay={true}
                        width="90%"
                        height="auto"
                        muted=""
                        src={videoGalaxy}
                        type="video/mp4"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal1(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
      {showModal2 && (
        <>
          <div className="justify-center items-center fixed inset-0 z-50 overflow-auto outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-full lg:max-w-[70%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold flex items-center">
                    HOW TO MINE ( DOUBLE CLICK DUBX.BAT )
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowModal2(false);
                    }}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col min-[450px]:flex-row">
                  <div className="w-full sm:block pr-1 pl-1">
                    <div className="flex flex-wrap place-content-evenly">
                      <video
                        controls={true}
                        autoPlay={true}
                        width="90%"
                        height="auto"
                        muted=""
                        src={videoMine}
                        type="video/mp4"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal2(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
      <h1
        className="text-3xl sm:text-5xl text-center my-2 font-bold"
        style={{ fontWeight: "700!important", color: "#fff" }}
      >
        Wallets & How To Mine
      </h1>
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 my-12">
        <div
          className="white-glassmorphism m-4 flex flex-1
                    2xl:min-w-[450px]
                    2xl:max-w-[500px]
                    sm:min-w-[270px]
                    sm:max-w-[400px]
                    min-w-full
                    flex-col p-3 rounded-md hover:shadow-2xl"
        >
          <h3 className="text-white text-1xl 2xl:text-2xl my-1 font-bold borderGradient">
            DESKTOP DUBX WALLET{" "}
            <a
              href="https://github.com/DUBXCOIN/dubx-desktop-wallet/blob/master/README.md"
              type="submit"
              className="mx-4 bg-[#1BF8EC] px-7 mx-4 rounded-full cursor-pointer hover:bg-[#1BF8EC] text-[#4a2084] font-bold"
            >
              github
            </a>
          </h3>
          <div
            className="flex flex-col justify-center items-center rounded-lg mt-8"
            style={{
              boxShadow:
                "0 8px 6px rgb(193 88 237 / 88%), rgb(148 93 221) 0px 8px 12px",
            }}
          >
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              decoding="async"
              alt="desktop"
              src={desktop}
            />
          </div>
          <p className="text-center my-2 text-white font-light text-base mt-6 flex items-center justify-evenly">
            <a
              href="https://github.com/DUBXCOIN/dubx-desktop-wallet/releases"
              target="_blank"
              rel="noreferrer"
            >
              <SiWindows className="mr-2 text-[30px] text-white" />
            </a>
            <a
              href="https://github.com/DUBXCOIN/dubx-desktop-wallet/releases"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinux className="mr-2 text-[30px] text-white" />
            </a>
          </p>
        </div>
        <div
          className="white-glassmorphism m-4 flex flex-1
                    2xl:min-w-[450px]
                    2xl:max-w-[500px]
                    sm:min-w-[270px]
                    sm:max-w-[400px]
                    min-w-full
                    flex-col p-3 rounded-md hover:shadow-2xl"
        >
          <h3 className="text-white text-1xl 2xl:text-2xl my-1 font-bold borderGradient">
            HOW TO CREATE WALLET
            <button
              type="button"
              onClick={videoWallet}
              className="mx-4 bg-[#1BF8EC] px-7 mx-4 rounded-full cursor-pointer hover:bg-[#1BF8EC] text-[#4a2084] font-bold"
            >
              video
            </button>
          </h3>
          <div
            className="flex flex-col justify-center items-center rounded-lg mt-8"
            style={{
              boxShadow:
                "0 8px 6px rgb(193 88 237 / 88%), rgb(148 93 221) 0px 8px 12px",
            }}
          >
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              decoding="async"
              alt="desktop"
              src={webw}
            />
          </div>
          <p className="text-center my-2 text-white font-light text-base mt-6 flex items-center justify-center">
            <a
              href=" https://galaxy.arabianchain.org"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center"
            >
              <FaWallet className="mr-4 text-[30px] text-white" /> galaxy wallet
              <HiExternalLink className="ml-3 text-[30px] text-white" />
            </a>
          </p>
        </div>
        <div
          className="white-glassmorphism m-4 flex flex-1
                    2xl:min-w-[450px]
                    2xl:max-w-[500px]
                    sm:min-w-[270px]
                    sm:max-w-[400px]
                    min-w-full
                    flex-col p-3 rounded-md hover:shadow-2xl"
        >
          <h3 className="text-white text-1xl 2xl:text-2xl my-1 font-bold borderGradient">
            START MINING DUBX.BAT
            <button
              type="button"
              onClick={videoMining}
              className="mx-4 bg-[#1BF8EC] px-7 mx-4 rounded-full cursor-pointer hover:bg-[#1BF8EC] text-[#4a2084] font-bold"
            >
              video
            </button>
          </h3>
          <div
            className="flex flex-col justify-center items-center rounded-lg mt-8"
            style={{
              boxShadow:
                "0 8px 6px rgb(193 88 237 / 88%), rgb(148 93 221) 0px 8px 12px",
            }}
          >
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              decoding="async"
              alt="mining"
              src={mining}
            />
          </div>
          <p className="text-center my-2 text-white font-light text-base mt-6 flex items-center justify-center">
            <a
              href="https://github.com/Claymore-Dual/Claymore-Dual-Miner/blob/master/files/EthDcrMiner64.exe"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center"
            >
              <GiMining className="mr-4 text-[30px] text-white" /> EthDcrMiner64
              <HiExternalLink className="ml-3 text-[30px] text-white" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wallets;
