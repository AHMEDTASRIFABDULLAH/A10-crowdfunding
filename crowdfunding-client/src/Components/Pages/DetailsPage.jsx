import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { MdCalendarMonth } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi";
import { TbClipboardTypography } from "react-icons/tb";
const DetailsPage = () => {
  const { user } = useContext(AuthContext);

  const data = useLoaderData();
  const loginEmail = user?.email;
  const loginName = user?.displayName;
  const today = new Date();
  const currentDate = today.toISOString().split("T")[0];
  const {
    image,
    title,
    type,
    description,
    minDonation,
    deadline,
    email,
    username,
  } = data;
  const handelDonatedUsers = () => {
    if (currentDate > deadline) {
      return toast.error("Date Over");
    }
    const donateUser = {
      image,
      title,
      type,
      description,
      minDonation,
      deadline,
      email,
      username,
      loginEmail,
      loginName,
    };
    fetch("https://server-site-smoky.vercel.app/mycampaign", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(donateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Donate Success");
      });
  };
  window.scroll(0, 0);
  return (
    <div className=" md:flex justify-between p-6 bg-white rounded-lg shadow-lg  ">
      <div className="md:w-1/2">
        <img className="rounded-lg h-full object-cover" src={image} alt="" />
      </div>
      <div className="md:pl-6 md:w-1/2 flex flex-col gap-1">
        <h1 className="mb-4 mt-5 md:mt-0 font-bold text-3xl">{title}</h1>
        <p className="text-gray-600">{description}</p>
        <p className="flex gap-3 text-xl my-4 items-center  text-gray-600">
          <HiCurrencyDollar className="text-orange-500" />
          {minDonation}
        </p>
        <p className="flex gap-3 text-xl items-center  text-gray-600">
          <MdCalendarMonth className="text-rose-500" />
          {deadline}
        </p>
        <p className="flex gap-3 text-xl my-4 items-center  text-gray-600">
          <TbClipboardTypography className="text-pink-500" />
          {type}
        </p>
        <div className="mt-6 border-b-2 pb-3 border-gray-300">
          <p className="my-4 text-gray-600">{username}</p>
          <p className="text-gray-600">{email}</p>
        </div>

        <button
          onClick={handelDonatedUsers}
          className="w-full bg-gray-800 hover:bg-black focus:font-bold font-semibold rounded-md text-white py-3 mt-12"
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
