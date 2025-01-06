import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import loginbg from "../../assets/loginbg.png";
const Update = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelAddCampaign = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const type = form.type.value;
    const description = form.description.value;
    const minDonation = form.minDonation.value;
    const deadline = form.deadline.value;
    const email = form.email.value;
    const username = form.username.value;
    const UpdatedcampainData = {
      image,
      title,
      type,
      description,
      minDonation,
      deadline,
      email,
      username,
    };
    fetch(`https://server-site-smoky.vercel.app/update/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedcampainData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update successfully",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
                        rgba(0,0,123,0.4)
                        url("/images/nyan-cat.gif")
                        left top
                        no-repeat
                      `,
          });
          navigate("/campaign");
        }
      });
  };
  window.scroll(0, 0);
  return (
    <div style={{ backgroundImage: `url(${loginbg})` }}>
      <h1 className="text-center text-3xl font-bold pt-6">Update Campaings</h1>
      <form
        onSubmit={handelAddCampaign}
        className="bg-[#5a58582a] md:max-w-2xl mx-auto p-8  rounded-lg shadow-md mt-2"
      >
        <div className="mb-6">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image/Thumbnail:
          </label>
          <input
            type="url"
            id="image"
            name="image"
            defaultValue={data.image}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Campaign Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={data.title}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />{" "}
        </div>{" "}
        <div className="mb-6">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
            Campaign Type:
          </label>
          <select
            id="type"
            name="type"
            defaultValue={data.type}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="personal">Personal Issue</option>{" "}
            <option value="startup">Startup</option>{" "}
            <option value="business">Business</option>{" "}
            <option value="creative">Creative Ideas</option>{" "}
          </select>{" "}
        </div>{" "}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description:
          </label>{" "}
          <textarea
            id="description"
            name="description"
            defaultValue={data.description}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>{" "}
        </div>{" "}
        <div className="mb-6">
          {" "}
          <label
            htmlFor="minDonation"
            className="block text-gray-700 font-bold mb-2"
          >
            Minimum Donation Amount:
          </label>{" "}
          <input
            type="number"
            id="minDonation"
            name="minDonation"
            defaultValue={data.minDonation}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />{" "}
        </div>{" "}
        <div className="mb-6">
          {" "}
          <label
            htmlFor="deadline"
            className="block text-gray-700 font-bold mb-2"
          >
            Deadline:
          </label>{" "}
          <input
            type="date"
            id="deadline"
            name="deadline"
            defaultValue={data.deadline}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />{" "}
        </div>{" "}
        <div className="mb-6">
          {" "}
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            User Email:
          </label>{" "}
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user?.email}
            className="w-full px-4 py-3 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />{" "}
        </div>{" "}
        <div className="mb-6">
          {" "}
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            User Name:
          </label>{" "}
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={user?.displayName}
            className="w-full px-4 py-3 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />{" "}
        </div>{" "}
        <button
          type="submit"
          className="btn bg-black text-white border-none hover:text-black w-full"
        >
          Update
        </button>{" "}
      </form>
      update
    </div>
  );
};

export default Update;
