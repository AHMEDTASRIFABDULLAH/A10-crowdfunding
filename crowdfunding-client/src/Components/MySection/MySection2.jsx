import b1 from "../../assets/brands/1.png";
import b3 from "../../assets/brands/3.png";
import b4 from "../../assets/brands/4.png";
import b5 from "../../assets/brands/5.png";
import b6 from "../../assets/brands/6.png";
import b7 from "../../assets/brands/7.png";
import b8 from "../../assets/brands/8.png";
import hand from "../../assets/brands/rose-petals.png";
import Marquee from "react-fast-marquee";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
const MySection2 = () => {
  window.scroll(0, 0);
  return (
    <div>
      <h1 className="font-semibold text-2xl my-6">OUR PARTNERS</h1>
      <p className="text-3xl md:text-6xl font-bold">
        More than 50 <span className="text-pink-500">Companies</span> and
        <span className="text-pink-500"> Institutions</span> that trust us over
        the years
      </p>
      <Marquee speed={130} pauseOnClick={true}>
        <div className="flex  flex-wrap w-full mt-6">
          <img className="mr-4" src={b1} alt="" />
          <img className="mr-4" src={b3} alt="" />
          <img className="mr-4" src={b4} alt="" />
          <img className="mr-4" src={b5} alt="" />
          <img className="mr-4" src={b6} alt="" />
          <img className="mr-4" src={b7} alt="" />
          <img className="mr-4" src={b8} alt="" />
        </div>
      </Marquee>
      <div
        style={{ backgroundImage: `url(${hand})` }}
        className="  rounded-xl bg-center  mt-6  object-cover border-2 border-black"
      >
        <div className=" flex flex-col md:flex-row justify-between gap-2">
          <div className="p-10">
            <h1 className="text-5xl text-white mb-6 mt-8">Call center</h1>
            <h2 className="text-3xl text-white mb-6">(0351) 1117-555</h2>
            <h1 className="text-5xl text-white mb-6">Email</h1>
            <h1 className="text-3xl text-white ">contact@indegogo.id</h1>
          </div>
          <div className=" p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl">
              <h1 className="text-xl my-2 font-bold text-gray-500">
                Name : Jessie G. Richardson
              </h1>
              <div className="flex gap-2">
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaRegStarHalfStroke className="text-orange-500" />
              </div>
              <p className="my-1 text-gray-500">
                Follow up with a review request when the experience of doing
                business with you is still fresh in a customer’s memory.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <h1 className="text-xl my-2 font-bold text-gray-500">
                Name : Martin D. Jones
              </h1>
              <div className="flex gap-2">
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaRegStarHalfStroke className="text-orange-500" />
              </div>
              <p className="my-1 text-gray-500">
                Follow up with a review request when the experience of doing
                business with you is still fresh in a customer’s memory.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <h1 className="text-xl my-2 font-bold text-gray-500">
                Name : Benjamin A. Diener
              </h1>
              <div className="flex gap-2">
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaRegStarHalfStroke className="text-orange-500" />
              </div>
              <p className="my-1 text-gray-500">
                Follow up with a review request when the experience of doing
                business with you is still fresh in a customer’s memory.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <h1 className="text-xl my-2 font-bold text-gray-500">
                Name : Benjamin A. Diener
              </h1>
              <div className="flex gap-2">
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaRegStarHalfStroke className="text-orange-500" />
              </div>
              <p className="my-1 text-gray-500">
                Follow up with a review request when the experience of doing
                business with you is still fresh in a customer’s memory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySection2;
