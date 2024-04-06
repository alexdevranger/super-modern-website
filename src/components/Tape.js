import React, { useState } from "react";

function Tape(props) {
  const [dataLogo] = useState([
    {
      id: 1,
      name: "CoinRanking",
      link: "https://coinranking.com/coin/jv4FQoNed+dubxcoin-dubx",
    },
    {
      id: 2,
      name: "Linkedin",
      link: "https://www.linkedin.com/pulse/arabianchain-technologies-dubxcoindubx-amer-emran/",
    },
    {
      id: 3,
      name: "CoinCarp",
      link: "https://www.coincarp.com/currencies/dubxcoin/",
    },
    {
      id: 4,
      name: "MetaSchool",
      link: "https://metaschool.so/rpc/dubxcoinNetwork",
    },
    {
      id: 5,
      name: "CoinPaprika",
      link: "https://coinpaprika.com/coin/dubx-dubxcoin/",
    },
    {
      id: 6,
      name: "ADVFN",
      link: "https://www.advfn.com/crypto/DUBXCOIN-DUBX",
    },
    {
      id: 7,
      name: "ChainList",
      link: "https://chainlist.org/chain/3269",
    },
    {
      id: 8,
      name: "ThirdWeb",
      link: "https://thirdweb.com/dubxcoin-network",
    },
    {
      id: 9,
      name: "DigitalCoinPrice",
      link: "https://digitalcoinprice.com/coins/dubxcoin",
    },
    {
      id: 10,
      name: "TikTok",
      link: "https://www.tiktok.com/@crypto_dubx_coin",
    },
    {
      id: 11,
      name: "CoinGabbar",
      link: "https://www.coingabbar.com/en/crypto-currency/arabianchain-dubx-prices-usd",
    },
    {
      id: 12,
      name: "DigitalCoinPrice",
      link: "https://digitalcoinprice.com/coins/dubxcoin",
    },
  ]);
  return (
    <section className="w-full py-12">
      <div className="logo-slider-wrap">
        <div className="logo-slider-inner">
          {dataLogo.map((idx) => (
            <a href={idx.link} target="_blank">
              <h3 key={idx.id} className="font-semibold">
                {idx.name}
              </h3>
            </a>
          ))}
        </div>
        <div className="logo-slider-inner style-2">
          {dataLogo.map((idx) => (
            <h3 key={idx.id} className="font-semibold">
              {idx.name}
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tape;
