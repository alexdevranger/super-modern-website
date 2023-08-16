import React, { useState, useEffect } from "react";
import aboutus from "../images/about_optimized.webp";
import mob1 from "../images/mob1.png";
import mob2 from "../images/mob2.png";
import mob3 from "../images/mob3.png";
import mob4 from "../images/mob4.png";
import mob5 from "../images/mob5.png";
import mob6 from "../images/mob6.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider from "./Slider";

const Mobile = () => {
  const CarouselData = [
    {
      image: mob1,
    },
    {
      image: mob2,
    },
    {
      image: mob3,
    },
    {
      image: mob4,
    },
    {
      image: mob5,
    },
    {
      image: mob6,
    },
  ];
  const slides = [
    {
      image:
        "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
      title: "Avatar: The Way of Water",
      subTitle:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      interval: 1500,
    },
    {
      image:
        "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      title: "Black Adam",
      subTitle:
        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      interval: 500,
    },
    {
      image:
        "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
      title: "Black Panther: Wakanda Forever",
      subTitle:
        "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
      interval: 2500,
    },
  ];
  //   const [currentSlide, setCurrentSlide] = useState(0);
  //   const [paused, setPaused] = useState(false);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       if (!paused) {
  //         setCurrentSlide((prevSlide) =>
  //           prevSlide === CarouselData.length - 1 ? 0 : prevSlide + 1
  //         );
  //       }
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, [paused]);

  //   const nextSlide = () => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === CarouselData.length - 1 ? 0 : prevSlide + 1
  //     );
  //   };

  //   const prevSlide = () => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === 0 ? CarouselData.length - 1 : prevSlide - 1
  //     );
  //   };

  //   const handleSwipeLeft = () => {
  //     nextSlide();
  //   };

  //   const handleSwipeRight = () => {
  //     prevSlide();
  //   };
  return (
    <div style={{ width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      {/* <WaterWave
            // imageUrl={bgg}
            style={{ width: "100%", height: "100%" }}
            children={() => ( */}
      <div className="flex flex-col xl:flex-row lg:flex-col md:flex-col sm:flex-col min-[300px]:flex-col max-[639px]:flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start blue-violet xl:w-[50%] lg:w-[70%] w:full md:w-[100%] m-auto sm:w-full pl-[60px] p-[40px]">
          <h1
            className="text-3xl sm:text-5xl py-2 font-bold"
            style={{ fontWeight: "700!important" }}
          >
            DUBX Mobile Wallet
          </h1>
          <h3 className="text-white text-2xl sm:text-3xl my-4">
            Our blockchain can transform your business
          </h3>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            We are a group of multinational, talented and diverse professionals
            aiming to bring the next big thing in blockchain technology into
            reality. The group was founded in Feb 2016.
          </p>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            In ArabianChain, we aim to revolutionize the way Governments,
            Businesses and individuals perceive and deal with Economy,
            E-Services and Digital transformation by leading the way in
            entrepreneurial thinking and innovation in blockchain technology.
          </p>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            Our unique collection of experiences from top international firms
            such as Microsoft, Dell, Ericsson and Oracle in addition to our
            vertical business domain knowledge in banking, telecommunications,
            healthcare and public sector puts us in an advantages position to
            bringing positive change to the thriving economy in the MENA region.
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center m-auto">
          <div className="w-[250px] h-auto">
            <Carousel
              autoPlay
              infiniteLoop
              showArrows={false}
              showStatus={false}
              width={"280px"}
              interval={5000}
              transitionTime={700}
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                const defStyle = {
                  color: "white",
                  cursor: "pointer",
                };
                const style = isSelected
                  ? { ...defStyle, color: "red" }
                  : { ...defStyle };
                return (
                  <span
                    style={style}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-label={`${label} ${index + 1}`}
                  >
                    {/* {"cust " + index} */}
                  </span>
                );
              }}
            >
              <div>
                <img alt="..." src={mob1} />
              </div>
              <div>
                <img alt="..." src={mob2} />
              </div>
              <div>
                <img alt="..." src={mob3} />
              </div>
              <div>
                <img alt="..." src={mob4} />
              </div>
              <div>
                <img alt="..." src={mob5} />
              </div>
              <div>
                <img alt="..." src={mob6} />
              </div>
            </Carousel>
          </div>
        </div>
        {/* <div className="flex-1 flex flex-col justify-start items-center">
          <div className="">
            <div className="mt-8">
              <div className="max-w-[260px] w-[260px] h-auto flex overflow-hidden relative">
                <AiOutlineLeft
                  onClick={prevSlide}
                  className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
                />

                <Swipe
                  onSwipeLeft={handleSwipeLeft}
                  onSwipeRight={handleSwipeRight}
                >
                  {CarouselData.map((slide, index) => (
                    <img
                      src={slide.image}
                      alt="This is a carousel slide"
                      key={index}
                      className={
                        index === currentSlide
                          ? "block w-full h-auto object-cover"
                          : "hidden"
                      }
                      onMouseEnter={() => setPaused(true)}
                      onMouseLeave={() => setPaused(false)}
                    />
                  ))}
                </Swipe>

                <div className="absolute w-full flex justify-center bottom-0">
                  {CarouselData.map((element, index) => (
                    <div
                      className={`h-2 w-2 ${
                        index === currentSlide ? "bg-purple-700" : "bg-white"
                      } rounded-full mx-2 mb-2 cursor-pointer`}
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                    ></div>
                  ))}
                </div>

                <AiOutlineRight
                  onClick={nextSlide}
                  className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* )}
          /> */}
      <div>
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default Mobile;
