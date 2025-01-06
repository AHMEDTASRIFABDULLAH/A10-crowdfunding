import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import loginbg from "../../assets/loginbg.png";
const AddCampaing = () => {
  const { user } = useContext(AuthContext);
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
    const campainData = {
      image,
      title,
      type,
      description,
      minDonation,
      deadline,
      email,
      username,
    };
    fetch("https://server-site-smoky.vercel.app/allcampaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(campainData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "You campaign added successfully",
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
          form.reset();
        }
      });
  };
  window.scroll(0, 0);
  return (
    <div className="p-10 pb-6" style={{ backgroundImage: `url(${loginbg})` }}>
      <form
        onSubmit={handelAddCampaign}
        className="md:max-w-2xl mx-auto p-8 bg-[#5a58586f]  rounded-lg shadow-md mt-2"
      >
        <div className="mb-6">
          <label htmlFor="image" className="block text-white font-bold mb-2">
            Image/Thumbnail:
          </label>
          <input
            type="url"
            id="image"
            name="image"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="title" className="block text-white font-bold mb-2">
            Campaign Title:
          </label>
          <input
            required
            type="text"
            id="title"
            name="title"
            placeholder="title"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />{" "}
        </div>{" "}
        <div className="mb-6">
          <label htmlFor="type" className="block text-white font-bold mb-2">
            Campaign Type:
          </label>
          <select
            id="type"
            name="type"
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
            className="block text-white font-bold mb-2"
          >
            Description:
          </label>{" "}
          <textarea
            required
            id="description"
            name="description"
            placeholder="Description"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>{" "}
        </div>{" "}
        <div className="mb-6">
          {" "}
          <label
            htmlFor="minDonation"
            className="block text-white font-bold mb-2"
          >
            Minimum Donation Amount:
          </label>{" "}
          <input
            required
            type="number"
            placeholder="$"
            id="minDonation"
            name="minDonation"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />{" "}
        </div>{" "}
        <div className="mb-6">
          {" "}
          <label htmlFor="deadline" className="block text-white font-bold mb-2">
            Deadline:
          </label>{" "}
          <input
            required
            type="date"
            id="deadline"
            name="deadline"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />{" "}
        </div>{" "}
        <div className="mb-6">
          {" "}
          <label htmlFor="email" className="block text-white font-bold mb-2">
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
          <label htmlFor="username" className="block text-white font-bold mb-2">
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
          Add
        </button>{" "}
      </form>
    </div>
  );
};

export default AddCampaing;
