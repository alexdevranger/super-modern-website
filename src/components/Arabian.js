import React, { useEffect } from "react";
import arLogo from "../images/ar-logo_optimized.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Arabian() {
  // const [showModal, setShowModal] = React.useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true);
  //   }, 3000);
  // }, []);

  return (
    <div className="flex w-full justify-center items-center">
      {/* {showModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-auto">
              <div className="bg-[#170e2a] rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    <span className="block text-2xl outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-center">
                    <img
                      src={launch}
                      alt="d-bank"
                      className="w-[318px] sm:w-[500px] h-auto"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-solid border-gray-200 rounded-b">
                  <button
                    className="bg-[#673ab7] text-white active:bg-[#533ab7] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )} */}
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 mt-20">
        <div className="flex-1 flex flex-col justify-start items-center w-[70%]">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            decoding="async"
            alt="Arabianchain Logo"
            src={arLogo}
          />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start pl-[30px]">
          <h1
            className="text-3xl sm:text-5xl py-2 font-bold text-left"
            style={{ fontWeight: "700!important" }}
          >
            About
            <br />
            ArabianChain Technologies
          </h1>
          <h3 className="text-white text-2xl sm:text-3xl my-4">
            It is the first public, decentralized and consensus-driven
            blockchain in the MENA region
          </h3>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            Arabianchain Technologies is a Bahrain based venture that is
            unlocking the potential of tomorrow’s economy by enabling today’s
            blockchain innovation.
          </p>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            It allows for self-executing and globally accessible smart contracts
            and decentralized Apps to be developed, and for digital tokens to be
            transacted, tracked and safeguarded over a network of thousands of
            connected yet distributed devices.
          </p>
          <a
            href="https://arabianchain.org/whitepaper.pdf"
            type="submit"
            target="_blank"
            rel="noreferrer"
            className="my-12 bg-[#1BF8EC] px-7 py-2 rounded-full cursor-pointer hover:bg-[#1BF8EC] text-[#4a2084] font-bold"
          >
            whitepaper
          </a>
        </div>
      </div>
    </div>
  );
}

export default Arabian;
