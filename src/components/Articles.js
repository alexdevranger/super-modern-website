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

const Articles = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gradient-pink pt-32">
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
            COINMARKETCAP{" "}
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
          {/* <p className="text-center my-2 text-white font-light text-base mt-6 flex items-center justify-evenly">
           
          </p> */}
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
            BINANCE
            <button
              type="button"
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
          {/* <p className="text-center my-2 text-white font-light text-base mt-6 flex items-center justify-center">
            <a
              href=" https://galaxy.arabianchain.org"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center"
            >
              <FaWallet className="mr-4 text-[30px] text-white" /> galaxy wallet
              <HiExternalLink className="ml-3 text-[30px] text-white" />
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Articles;
