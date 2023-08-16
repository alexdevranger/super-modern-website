import React, { useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCube,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Accordion from "../components/Accordion";
import NewAccordion from "../components/NewAccordion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-cube";
import mob1 from "../images/mob1.png";
import mob2 from "../images/mob2.png";
import mob3 from "../images/mob3.png";
import mob4 from "../images/mob4.png";
import mob5 from "../images/mob5.png";
import mob6 from "../images/mob6.png";
import { BsSendCheckFill } from "react-icons/bs";
import { BsCheck2Circle } from "react-icons/bs";
import { BsPersonFillCheck } from "react-icons/bs";
import { PiDeviceMobileFill } from "react-icons/pi";
import { MdInstallMobile } from "react-icons/md";
import detectEthereumProvider from "@metamask/detect-provider";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-center white-glassmorphism p-3 hover:shadow-xl my-[10px]">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-10/12">{subtitle}</p>
    </div>
  </div>
);

const MobWallet = () => {
  const accordionItems = [
    {
      title: "Item 1",
      content: "Content for Item 1",
    },
    {
      title: "Item 2",
      content: "Content for Item 2",
    },
    {
      title: "Item 3",
      content: "Content for Item 3",
    },
    {
      title: "Item 4",
      content: "Content for Item 1",
    },
    {
      title: "Item 5",
      content: "Content for Item 2",
    },
    {
      title: "Item 6",
      content: "Content for Item 3",
    },
    {
      title: "Item 7",
      content: "Content for Item 1",
    },
  ];
  async function addDubxNetwork() {
    try {
      const result = await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0xA86A",
            rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
            chainName: "Avalanche Network",
            nativeCurrency: {
              name: "AVAX",
              symbol: "AVAX",
              decimals: 18,
            },
            blockExplorerUrls: ["https://snowtrace.io/"],
          },
        ],
      });

      console.log("Dubx network added to MetaMask:", result);
    } catch (error) {
      console.log("Error adding Dubx network to MetaMask:", error);
    }
  }
  return (
    <div style={{ width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      <div className="flex flex-col xl:flex-row lg:flex-col md:flex-col sm:flex-col min-[300px]:flex-col max-[639px]:flex-col items-center justify-center md:p-20 py-12 px-4">
        <div className="flex-1 w-1/2 flex flex-col justify-center blue-violet items-left xl:w-[50%] lg:w-[70%] w:full md:w-[100%] m-auto sm:w-full pl-[60px] p-[40px]">
          <h1
            className="text-3xl sm:text-5xl py-2 font-bold"
            style={{ fontWeight: "700!important" }}
          >
            DUBX Mobile Wallet
          </h1>
          <h3 className="text-white text-2xl sm:text-3xl my-3">
            Embrace the simplicity of mobile management
          </h3>
          <ServiceCard
            color="bg-[#8945F8]"
            icon={<BsCheck2Circle fontSize={21} className="text-white" />}
            subtitle="Unlock a world of financial flexibility with our user-friendly
            mobile wallet, enabling you to securely manage your DUBX holdings on
            the go."
          />
          <ServiceCard
            color="bg-[#8945F8]"
            icon={<BsPersonFillCheck fontSize={21} className="text-white" />}
            subtitle="Experience the future of borderless transactions with our mobile
            wallet, providing instant access to the exciting possibilities of
            DUBX blockchain."
          />
          <ServiceCard
            color="bg-[#8945F8]"
            icon={<BsSendCheckFill fontSize={21} className="text-white" />}
            subtitle="Navigate the dynamic world of blockchain technology effortlessly
            with our DUBX mobile wallet, your gateway to enhanced financial
            control and empowerment."
          />
          <ServiceCard
            color="bg-[#8945F8]"
            icon={<PiDeviceMobileFill fontSize={21} className="text-white" />}
            subtitle="Join the DUBX revolution and take control of your digital assets
            using our cutting-edge mobile wallet, revolutionizing how you
            interact with blockchain technology."
          />
          <ServiceCard
            color="bg-[#8945F8]"
            icon={<MdInstallMobile fontSize={21} className="text-white" />}
            subtitle="Secure your DUBX investments with confidence using our advanced
            mobile wallet, offering top-tier encryption and unparalleled ease of
            use."
          />
          {/* <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            Unlock a world of financial flexibility with our user-friendly
            mobile wallet, enabling you to securely manage your DUBX holdings on
            the go.
          </p>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            Experience the future of borderless transactions with our mobile
            wallet, providing instant access to the exciting possibilities of
            DUBX blockchain.
          </p>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            Navigate the dynamic world of blockchain technology effortlessly
            with our DUBX mobile wallet, your gateway to enhanced financial
            control and empowerment.
          </p>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            Join the DUBX revolution and take control of your digital assets
            using our cutting-edge mobile wallet, revolutionizing how you
            interact with blockchain technology.
          </p>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            Secure your DUBX investments with confidence using our advanced
            mobile wallet, offering top-tier encryption and unparalleled ease of
            use.
          </p> */}
        </div>
        <div className="flex-1 w-1/2 flex flex-col justify-start items-start blue-violet-flat xl:w-[50%] lg:w-[70%] w:full md:w-[100%] m-auto sm:w-full pl-[60px] p-[40px]">
          <Swiper
            effect={"cube"}
            autoplay={true}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 5,
              shadowScale: 0.94,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCube, Pagination, Autoplay, Navigation]}
            loop={true}
            scrollbar={{ draggable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={mob1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mob2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mob3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mob4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mob5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mob6} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:p-20 py-12 px-4">
        <h1
          className="text-3xl sm:text-5xl py-2 font-bold"
          style={{ fontWeight: "700!important" }}
        >
          FAQ
        </h1>
        <div className="w-full xl:w-[70%] 2xl:w-[50%] accordion-container">
          {/* <Accordion items={accordionItems} /> */}
          <NewAccordion
            button="Accordion Button1"
            contents="Accordion Contents1"
          />
          <NewAccordion
            button="Accordion Button2"
            contents="Accordion Contents2"
          />
          <NewAccordion
            button="Accordion Button3"
            contents="Accordion Contents3
          Accordion Contents3
          Accordion Contents3"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:p-20 py-12 px-4">
        <button onClick={addDubxNetwork} style={{ background: "#fff" }}>
          add network
        </button>
      </div>
    </div>
  );
};

export default MobWallet;
