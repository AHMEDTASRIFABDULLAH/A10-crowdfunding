import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCampaign = () => {
  const myCampaignData = useLoaderData();
  const [userData, setData] = useState(myCampaignData);
  const handelDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-site-smoky.vercel.app/allcampaign/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const newData = userData.filter((d) => d._id !== _id);
              setData(newData);
            }
          });
      }
    });
  };
  window.scroll(0, 0);
  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">My Campaigns</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-800 text-white text-left">
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Type</th>
                <th className="border border-gray-300 px-4 py-2">
                  Minimum Donation{" "}
                </th>
                <th className="border border-gray-300 px-4 py-2">Deadline</th>
                <th className="border border-gray-300 px-4 py-2">
                  Update/Delete
                </th>
              </tr>
            </thead>
            {userData.map((d) => (
              <tbody key={d._id}>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {d.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{d.type}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {d.minDonation}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {d.deadline}
                  </td>

                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex gap-2">
                      <Link to={`/update/${d._id}`}>
                        {" "}
                        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handelDelete(d._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        {userData ? (
          " "
        ) : (
          <p className="text-center text-gray-500">
            No reviews found for this email.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyCampaign;
