import React from "react";
import NFTImg from "../images/NFTMarketplace.png";
import NFTSteps from "../images/NFTSteps.png";

const NFT = () => {
  return (
    <div className="gradient-bg-footer flex xl:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 border-t">
      <div className="w-full xl:w-1/2 flex flex-col items-center">
        <img src={NFTImg} className="rounded-md" />
        <img src={NFTSteps} className="mt-4 rounded-md" />
      </div>
      <div className="flex-1 flex flex-col justify-start items-center xl:items-start xl:pl-[30px] mt-20 mf:mt-0 h-full">
        <a
          href="https://nft.arabianchain.org/"
          target="blank"
          rel="noopener noreferrer"
          className="text-3xl sm:text-5xl py-2 font-bold cursor-pointer text-white text-center xl:text-left"
        >
          <h1 className="text-3xl sm:text-5xl text-center my-2 font-bold">
            NFT MARKETPLACE
          </h1>
        </a>
        <h4 className="text-white text-2xl sm:text-3xl my-4 text-center xl:text-left">
          Discover and Collect Unique Digital Art with DUBX NFT Marketplace
        </h4>
        <p className="text-shadow text-left my-2 text-white p-3 rounded-md font-light md:w-9/12 w-11/12 text-base border border-[#3fa3d167]">
          DUBX NFT Marketplace offers a revolutionary platform for discovering,
          collecting, and trading unique digital artworks. Explore a diverse
          range of NFT collections created by talented artists from around the
          world. Our secure and user-friendly platform provides a seamless
          experience, ensuring authenticity and reliability.
        </p>
        <p className="text-move text-left p-3 text-white rounded-md font-light md:w-9/12 w-11/12 text-base border border-[#9354c9] my-6 py-6">
          Experience a seamless journey as you navigate through our curated
          selection of NFTs, each representing a masterpiece crafted by
          visionary artists. Join us today and embark on your NFT journey,
          igniting your passion for the digital art revolution.
        </p>
        <p className="text-shadowWhite text-left p-3 text-white rounded-md font-light md:w-9/12 w-11/12 text-base border border-[#ffffff77] mb-6 py-6">
          With a commitment to authenticity and reliability, our platform
          provides creators and collectors alike with a seamless experience.
          Immerse yourself in a world of endless creativity and possibility, and
          join us in shaping the future of digital art.
        </p>
      </div>
    </div>
  );
};

export default NFT;
