import React, { useState } from "react";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NewAccordion from "../components/NewAccordion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
  return (
    <div style={{ width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="flex flex-col xl:flex-row lg:flex-col md:flex-col sm:flex-col min-[300px]:flex-col max-[639px]:flex-col items-center justify-center md:p-20 py-12 px-4">
        <div className="flex-1 w-1/2 flex flex-col justify-center blue-violet items-left xl:w-[50%] lg:w-[70%] w:full md:w-[100%] m-auto sm:w-full pl-[60px] p-[40px]">
          <h1
            className="text-3xl sm:text-5xl py-2 font-bold"
            style={{ fontWeight: "700!important" }}
          >
            DUBX Mobile Wallet
          </h1>
          <h3 className="text-white text-2xl sm:text-3xl my-3">
            Simplicity of mobile management
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
              <LazyLoadImage effect="blur" alt="mob1" src={mob1} />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadImage effect="blur" alt="mob2" src={mob2} />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadImage effect="blur" alt="mob3" src={mob3} />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadImage effect="blur" alt="mob4" src={mob4} />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadImage effect="blur" alt="mob5" src={mob5} />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadImage effect="blur" alt="mob6" src={mob6} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center stars-container w-full">
        <div className="flex flex-col items-center justify-center md:p-20 py-12 px-4 w-full lg:w-[70%] m-auto">
          <h1
            className="text-3xl sm:text-5xl py-2 font-bold"
            style={{ fontWeight: "700!important" }}
          >
            FAQ
          </h1>
          <div className="flex flex-col xl:flex-row">
            <div className="w-full 2xl:w-1/2 accordion-container">
              <NewAccordion
                button="Secure wallet with 4-digit PIN"
                contents="When you first open the app, you will be given the option to set up a PIN or skip this step. Your PIN is saved in the local storage of your phone. You can later remove or change it."
              />
              <NewAccordion
                button="Create new wallet or import existing"
                contents="Click the PLUS icon on the Wallets page and then click the button 'Create New Wallet'. If you have the Private Key of your wallet, you can import it by clicking the PLUS icon on the wallets page and then the button 'IMPORT WALLET FROM PRIVATE KEY'. If you have the Keystore and Password of your wallet, you can import it by clicking the PLUS icon on the wallets page and then the button 'IMPORT WALLET FROM KEYSTORE'."
              />
              <NewAccordion
                button="Mainnet vs Testnet"
                contents="To test the wallet's features, click the Settings button and choose TESTNET as an option then try to send them. When you change the network to TESTNET on the Settings page, any actions you perform in the wallet will not affect your mainnet DUBX balance."
              />
            </div>
            <div className="w-full 2xl:w-1/2 accordion-container">
              <NewAccordion
                button="EASY SEND"
                contents="Fill out the form with the recipient's Address and the Amount you want to send in DUBX coins. During the sending process, you will receive real-time updates about the mining status of the transaction. Once the transaction is mined and confirmed, you can click on the 'TX INFO' button to access all the relevant information about the transaction. "
              />
              <NewAccordion
                button="Languages and FAQ"
                contents="Choose your preferred language by clicking the 'Settings' button and then find the button with the language of your choice. In the FAQ section get all relevant answers about wallet features."
              />
              <NewAccordion
                button="TX History"
                contents="If you are on the MAINNET network, history will display  the last 5 transactions for the specific wallet you are currently viewing. If you are on the TESTNET network, you will see the last 5 transactions for all wallets."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobWallet;
