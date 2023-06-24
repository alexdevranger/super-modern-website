import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import newlogo from "../images/gradientLogo.webp";
// import WaterWave from "react-water-wave";

const EasyBuy = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div style={{ width: "100%", minHeight: "93vh", overflow: "hidden" }}>
      {/* <WaterWave
        style={{ width: "100%", height: "100%" }}
        children={() => ( */}
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col items-center justify-center md:p-20 py-12 px-4 mt-20">
          <div className="flex flex-col justify-start items-center">
            <h1
              className="text-3xl sm:text-5xl py-2 font-bold text-center"
              style={{ fontWeight: "700!important" }}
            >
              Easy BUY DUBX
            </h1>
            <h3 className="text-white text-xl sm:text-2xl my-4 text-center">
              Fill the form and you will get the offer
            </h3>
            <div className="background white-glassmorphism">
              <div className="flex flex-col justify-center items-center">
                <div className="screen">
                  <div className="screen-body">
                    <div className="screen-body-item left">
                      <h1 className="text-2xl py-2 font-bold text-center m-0">
                        DUBX PRESALE
                      </h1>

                      <div className="flex flex-col justify-center items-center w-[150px] h-[150px] text-center m-auto">
                        <LazyLoadImage
                          effect="blur"
                          loading="lazy"
                          decoding="async"
                          alt="newlogo"
                          src={newlogo}
                          width="100%"
                        />
                      </div>
                      <div className="app-contact">
                        CONTACT INFO : info@arabianchain.org
                      </div>
                    </div>
                    <div className="screen-body-item">
                      <div className="app-form">
                        <form
                          action="https://getform.io/f/94e17b34-0e44-454d-8091-6870f40224f2"
                          method="POST"
                        >
                          <div className="app-form-group">
                            <input
                              className="app-form-control uppercase"
                              placeholder="NAME"
                              type="text"
                              name="fullname"
                              value={fullname}
                              onChange={(e) => setFullname(e.target.value)}
                            />
                          </div>
                          <div className="app-form-group">
                            <input
                              className="app-form-control"
                              placeholder="EMAIL"
                              type="email"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="app-form-group">
                            <input
                              className="app-form-control"
                              placeholder="AMOUNT DUBX"
                              type="number"
                              name="amount"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                            />
                          </div>
                          <div className="app-form-group message">
                            <input
                              className="app-form-control"
                              placeholder="MESSAGE"
                              type="text"
                              name="message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            />
                          </div>
                          <input
                            type="hidden"
                            name="_gotcha"
                            style={{ display: "none !important" }}
                          />
                          <div className="app-form-group buttons">
                            <button
                              type="submit"
                              className="mx-4 my-8 bg-[#1BF8EC] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#1BF8EC] text-[#4a2084] font-bold"
                            >
                              SEND
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )}
      /> */}
    </div>
  );
};

export default EasyBuy;
