import React, { useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import ListingImg from "../images/listing.png";
import BinanceArticle from "../images/binanceArticle.png";
import CMCArticle from "../images/CMCArticle.png";
import Tape from "./Tape";

const Articles = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gradient-pink pt-32 border-t border-b text-white lg:px-24">
      {/* TITLE */}
      <h1
        className="text-3xl sm:text-5xl text-center my-2 font-bold"
        style={{ fontWeight: "700!important", color: "#fff" }}
      >
        DUBX News
      </h1>
      <Tape />
      <div className="flex">
        {/* LINKS */}
        <div className="flex flex-col items-center md:p-12 py-12 px-4 justify-around min-[1608px]:flex-row">
          {/* COINMARKETCAP */}
          <div
            className="m-4 flex 
                        2xl:min-w-[450px]
                        2xl:max-w-[500px]
                        sm:min-w-[270px]
                        sm:max-w-[400px]
                        min-w-full
                        flex-col p-3 rounded-md border shadow-xl bg-[#fff4] text-white"
          >
            <img src={ListingImg} className="rounded-md shadow-xl" />
            <h4 className="text-center font-semibold text-xl pt-12">
              DUBX CoinMarketCap
            </h4>
            <h5 className="font-bold text-2xl pb-6 text-center">LISTING</h5>
            <p className="text-sm px-6 pb-12 text-center">
              We are thrilled to announce that DUBX coin has been listed on
              CoinMarketCap, marking a significant milestone in our journey.
            </p>
            <a
              href="https://coinmarketcap.com/currencies/dubxcoin/"
              type="submit"
              target="_blank"
              className="border rounded-md px-3 mx-4 py-2 cursor-pointer hover:bg-[#ba58e9] hover:border-[#ba58e9] hover:shadow-xl text-white transition-all ease-in duration-300 text-center text-lg 2xl:text-xl my-1 font-bold flex items-center justify-center"
            >
              Go to link
            </a>
          </div>

          {/* BINANCE */}
          <div
            className="m-4 flex 
                        2xl:min-w-[450px]
                        2xl:max-w-[500px]
                        sm:min-w-[270px]
                        sm:max-w-[400px]
                        min-w-full
                        flex-col p-3 rounded-md border shadow-2xl bg-[#ffffffe5] text-black"
          >
            <img src={BinanceArticle} className="shadow-2xl rounded-md" />
            <div>
              <h4 className="text-center font-semibold text-2xl pt-12">
                Binance Article
              </h4>
              <h5 className=" px-6 pt-6 font-semibold">
                New Cryptocurrency Releases, Listings, & Presales Today — Book
                of Meow, Monkey Coin, <strong>DUBXCOIN</strong>
              </h5>
              <p className="text-sm px-6 pb-12 pt-5 text-center">
                The present market upswing has created favorable conditions for
                new tokens and presales to ...
              </p>
              <a
                href="https://www.binance.com/en/square/post/6379827672818?ref=811214462&utm_content=zRDyZ6imvi6e4LHGD-xGpw&utm_campaign=app_square_share_link&utm_source=telegram"
                type="submit"
                target="_blank"
                className="border border-[#ba58e9] shadow-xl rounded-md px-3 mx-4 py-2 cursor-pointer hover:bg-[#ba58e9] text-[#ba58e9] hover:text-white text-center text-lg 2xl:text-xl my-1 font-bold flex items-center justify-center"
              >
                Read more
              </a>
            </div>
          </div>

          {/* COINMARKETCAP ARTICLE */}
          <div
            className="m-4 flex 
                        2xl:min-w-[450px]
                        2xl:max-w-[500px]
                        sm:min-w-[270px]
                        sm:max-w-[400px]
                        min-w-full
                        flex-col p-3 rounded-md border shadow-xl bg-[#fff4] text-white text-center"
          >
            <img src={CMCArticle} className="border-b shadow-lg rounded-md" />
            <h4 className="font-semibold text-2xl pt-12">
              CoinMarketCap Article
            </h4>
            <p className="font-semibold py-5 ">
              New Cryptocurrency Releases, Listings, & Presales Today DUBXCOIN
            </p>
            <p className="pb-5 text-sm">
              Dubxcoin stands out as a leading open-source blockchain
              initiative, driving transformative advancements across ...
            </p>
            <a
              href="https://coinmarketcap.com/community/articles/66102deeaf3dee16e26a69b2/"
              type="submit"
              target="_blank"
              className="border rounded-md px-3 mx-4 py-2 cursor-pointer hover:bg-[#ba58e9] hover:border-[#ba58e9] hover:shadow-xl text-white transition-all ease-in duration-300 text-center text-lg 2xl:text-xl my-1 font-bold flex items-center justify-center"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
