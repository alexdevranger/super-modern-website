import React from "react";
import dbank from "../images/digital_bank_optimized.webp";
import floating1 from "../images/floating1.mp4";
import security1 from "../images/security.mp4";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const DBank = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex flex-col items-center justify-between md:p-20 py-12 px-4 mt-20">
      <div className="flex flex-col justify-start items-center">
        <h1
          className="text-3xl sm:text-5xl py-2 font-bold text-center"
          style={{ fontWeight: "700!important" }}
        >
          Partnership integrating Omni-Channel Banking
        </h1>
        <h3 className="text-white text-xl sm:text-3xl my-4 text-center">
          Digital bank + Payment Processor
        </h3>
        <div className="flex flex-col justify-start items-center h-[18rem] sf:h-[20rem] sm:h-[30rem]">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            decoding="async"
            alt="d-bank"
            src={dbank}
            className="w-auto h-[235px] sm:h-[374px] md:h-[450px]"
          />
        </div>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base pl-[30px]">
          Omni-channel is much more than just providing multiple ways for
          customers to transact. It is about a seamless and consistent
          interaction between customers and their financial institutions across
          multiple channels. While multichannel is focused on transactions,
          omni-channel focuses on interactions.
        </p>
      </div>

      <div className="flex flex-col justify-center items-start w-full md:w-9/12 w-11/12 md:flex-row">
        <div className="flex flex-1 flex-col justify-center items-center">
          <h3 className="text-3xl my-4 gradient-title">Super App</h3>
          <div className="w-[90%] p-[10px] m-auto text-center">
            <video
              controls={false}
              loop={true}
              autoPlay={true}
              width="400"
              height="auto"
              muted
              playsInline
              className="rounded-lg w-[250px] sm:w-[400px] text-center m-auto"
            >
              <source src={floating1} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-white w-full pb-8 pt-4 px-[10%]">
            Launch your own Super App tailored to your bank and market within
            months not years. With a number of sticky features customers use our
            apps daily allowing banks to build on customer relations with
            intelligent data.
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <h3 className="text-3xl my-4 gradient-title">Digital Wallets</h3>
          <div className="w-[90%] p-[10px] m-auto text-center">
            <video
              controls={false}
              loop={true}
              autoPlay={true}
              width="400"
              height="auto"
              muted
              playsInline
              className="rounded-lg w-[250px] sm:w-[400px] text-center m-auto"
            >
              <source src={security1} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-white w-full pb-8 pt-4 px-[10%]">
            Fast-to-market financial offerings across deposits, credit, and
            savings with boundless product configurability.With our platform and
            payment acceptance using QR codesyou can now become the Rails and
            charge merchants a fee.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default DBank;
