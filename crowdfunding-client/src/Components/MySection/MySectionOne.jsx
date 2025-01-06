import { Zoom, Slide } from "react-awesome-reveal";
import { GiAbbotMeeple } from "react-icons/gi";
import { GiAbstract034 } from "react-icons/gi";
import { GiAbstract066 } from "react-icons/gi";
import { GiAbstract099 } from "react-icons/gi";
const MySectionOne = () => {
  window.scroll(0, 0);
  return (
    <div className="mt-6 py-12 px-4 sm:px-6 lg:py-16 lg:px-8  rounded-lg shadow-lg">
      {" "}
      <Slide>
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Level up your investor knowledge{" "}
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Learn the basics, assess your risk tolerance, understand the benefits
          of our nominee service and learn how seriously we take our due
          diligence to protect your interests.
        </p>
      </Slide>
      <div className="text-center mb-8">
        <a href="#" className="text-pink-500 font-semibold hover:underline">
          Visit our knowledge centre →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Zoom>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <h1 className="flex justify-center">
              <GiAbbotMeeple className="text-8xl " />
            </h1>
            <h3 className="text-2xl font-semibold  my-4 text-center ">
              Investing!!
            </h3>
            <p className="text-gray-600 text-center">
              It protect our members’ interests, our due diligence charter
              outlines the process used to evaluate and vet companies seeking
              funding.Our people are the best in the business. Enjoy lightning
              fast email and phone support coverage so you can Unless indicated
              otherwise with
            </p>
          </div>
        </Zoom>
        <Zoom>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <h1 className="flex justify-center">
              <GiAbstract034 className="text-8xl " />
            </h1>
            <h3 className="text-xl font-semibold text-center my-4">
              What is the Crowdcube!!
            </h3>{" "}
            <p className="text-gray-600 text-center">
              {" "}
              Is protect our members’ interests, our due diligence charter
              outlines the process used to evaluate and vet companies seeking
              funding.Our people are the best in the business. Enjoy lightning
              fast email and phone support coverage so you can focus on what’s
              important.{" "}
            </p>{" "}
          </div>
        </Zoom>
        <Zoom>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <h1 className="flex justify-center">
              <GiAbstract066 className="text-8xl " />
            </h1>
            <h3 className="text-xl font-semibold text-center my-4">
              Investment calculator!!
            </h3>{" "}
            <p className="text-gray-600 text-center">
              {" "}
              that protect our members’ interests, our due diligence charter
              outlines the process used to evaluate and vet companies seeking
              funding.Our people are the best in the business. Enjoy lightning
              fast email and phone support coverage so you can focus
              crowdfunding website.{" "}
            </p>{" "}
          </div>{" "}
        </Zoom>
        <Zoom>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <h1 className="flex justify-center">
              <GiAbstract099 className="text-8xl " />
            </h1>
            <h3 className="text-xl font-semibold  my-4 text-center">
              Our due diligence charter!!
            </h3>{" "}
            <p className="text-gray-600">
              {" "}
              To protect our members’ interests, our due diligence charter
              outlines the process used to evaluate and vet companies seeking
              funding.Our people are the best in the business. Enjoy lightning
              fast email and phone support coverage so you can focus on what’s
              important.{" "}
            </p>{" "}
          </div>{" "}
        </Zoom>
      </div>{" "}
    </div>
  );
};

export default MySectionOne;
