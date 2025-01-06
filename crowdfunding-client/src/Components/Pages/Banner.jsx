import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

import { Swiper, SwiperSlide } from "swiper/react";
import slider from "../../assets/pexels-rdne-7414108.jpg";
import slider2 from "../../assets/s3.jpg";
import slider3 from "../../assets/s2.jpg";
import "swiper/swiper-bundle.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Banner = () => {
  return (
    <div className=" ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className=" h-[300px] sm:h-[600px]"
      >
        <SwiperSlide>
          <div
            className=" h-[300px] sm:h-[600px]  object-center bg-center  flex justify-center items-center "
            style={{ backgroundImage: `url(${slider})` }}
          >
            <div>
              <h1 className="text-center  text-xl sm:text-5xl p-6 text-white">
                Many{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  <Typewriter
                    words={[
                      "of the products",
                      "businesses",
                      "crowdfunded",
                      "Code",
                    ]}
                    loop={15}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className="text-center text-white px-6 text-xs sm:text-xl">
                Another example of a company that rose to success through
                Kickstarter campaigns is M3D, a company founded by two friends
                that manufactures small 3D printers. David Jones and Michael
                Armani raised $3.4 million for their Micro
              </p>
              <div className="flex justify-center mt-6">
                <button
                  data-tooltip-id="my-tooltip-1"
                  className="btn btn-error"
                >
                  See More
                  <ReactTooltip
                    id="my-tooltip-1"
                    place="bottom"
                    content="Please Donate!!"
                  />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className=" h-[300px] sm:h-[600px]  object-center bg-center  flex justify-center items-center "
            style={{ backgroundImage: `url(${slider2})` }}
          >
            <div>
              <h1 className="text-center  text-xl sm:text-5xl p-6 text-white">
                Compete Risk{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  <Typewriter
                    words={[
                      "Free with",
                      "businesses",
                      " $100,000",
                      " in Virtual",
                    ]}
                    loop={15}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className="text-center text-white px-6 text-xs sm:text-xl">
                Put your trading skills to the test with our FREE Stock
                Simulator. Compete with thousands of Investopedia traders and
                trade your way to the top! Submit trades in a virtual
                environment before you start risking your own money. Practice
                trading strategies so that when you&apos;re ready to enter the
                real market, you&apos;ve had the practice you need. Try our
                Stock
              </p>
              <div className="flex justify-center mt-6">
                <button
                  data-tooltip-id="my-tooltip-1"
                  className="btn btn-error"
                >
                  See More
                  <ReactTooltip
                    id="my-tooltip-1"
                    place="bottom"
                    content="Please Donate!!"
                  />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className=" h-[300px] sm:h-[600px]  object-center bg-center  flex justify-center items-center "
            style={{ backgroundImage: `url(${slider3})` }}
          >
            <div>
              <h1 className="text-center  text-xl sm:text-5xl p-6 text-white">
                What Is{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  <Typewriter
                    words={[
                      "Crowdfunding",
                      "and How Does",
                      " $100,000",
                      "  It Work",
                    ]}
                    loop={15}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className="text-center text-white px-6 text-xs sm:text-xl">
                Crowdfunding is the use of small amounts of capital from a large
                number of individuals to finance a new business venture.
                Depending on the type of crowdfunding, investors either donate
                money altruistically or get rewards such as equity in the
                company that raised the money. Do You Pay Back Crowdfunding?
              </p>
              <div className="flex justify-center mt-6">
                <button
                  data-tooltip-id="my-tooltip-1"
                  className="btn btn-error"
                >
                  See More
                  <ReactTooltip
                    id="my-tooltip-1"
                    place="bottom"
                    content="Please Donate!!"
                  />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
