import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Zoom } from "react-awesome-reveal";
import Loding from "./Loding";
import useAxiosSec from "../../Hooks/useAxiosSec";
import { useQuery } from "@tanstack/react-query";
const AllCampains = () => {
  const { user } = useContext(AuthContext);
  const axiosSec = useAxiosSec();
  const [sort, setSort] = useState("");
  console.log(sort);
  // const handelSort = () => {
  //   const sorted = [...data].sort((a, b) => a.minDonation - b.minDonation);
  //   setSortedData(sorted);
  // };
  const { data: runningCampaign, isLoading } = useQuery({
    queryKey: ["allCampaindata", sort],
    queryFn: async () => {
      const { data } = await axiosSec.get(`/allcampaigndata?sort=${sort}`);
      return data;
    },
  });
  if (isLoading) return <Loding />;
  window.scroll(0, 0);
  console.log(runningCampaign);
  return (
    <div className="mb-6 p-6 bg-gray-50">
      <div>
        <select
          name="category"
          id="category"
          className="border p-4 rounded-md"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="asc">Sort By Min Donation</option>
        </select>
      </div>
      {/*  */}
      <h1 className="text-3xl font-bold text-gray-800 pb-6  text-center ">
        All Campaigns
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6  ">
        {runningCampaign?.map((d) => (
          <div
            key={d._id}
            className="bg-base-100 border-gray-100 border-2 p-1 pb-2 hover:shadow-md "
          >
            <figure>
              <img
                className="h-72 object-cover bg-no-repeat w-full"
                src={d.image}
                alt="donate"
              />
            </figure>

            <div>
              <h2 className="card-title mt-3 font-bold">{d.title}</h2>
              <div className="badge mt-3 bg-pink-500 badge-secondary">
                {d.deadline}
              </div>
              <Zoom>
                <div className="card-actions justify-end">
                  <Link
                    className="badge badge-outline w-full p-4 rounded-sm mt-4"
                    to={`${user?.email ? `/details/${d._id}` : `/login`}`}
                  >
                    <div>See More</div>
                  </Link>
                </div>
              </Zoom>
            </div>
          </div>
        ))}
      </div>
      {/* <div className=" p-8">
        <button
          onClick={handelSort}
          className="btn bg-[#1F2937] text-white hover:bg-[#1F2937] my-6"
        >
          Sort by Minimum Donation
        </button>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse bg-white rounded-lg shadow-md">
            <thead className="bg-[#1F2937] text-white">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-medium uppercase tracking-wider">
                  Image
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium uppercase tracking-wider">
                  Title
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium uppercase tracking-wider">
                  Type
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium uppercase tracking-wider">
                  Minimum Donation
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium uppercase tracking-wider">
                  Deadline
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium uppercase tracking-wider">
                  More
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((campaign, index) => (
                <tr
                  key={campaign._id}
                  className={`hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-4 px-6 text-center">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-16 h-16 object-cover rounded-lg mx-auto"
                    />
                  </td>
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    {campaign.title}
                  </td>
                  <td className="py-4 px-6 text-gray-600">{campaign.type}</td>
                  <td className="py-4 px-6 text-green-600 font-semibold">
                    ${campaign.minDonation}
                  </td>
                  <td className="py-4 px-6 text-gray-500">
                    {campaign.deadline}
                  </td>
                  <td className="py-4 px-6 text-gray-500">
                    {user ? (
                      <Link to={`/details/${campaign._id}`}>
                        <button className="badge badge-secondary">
                          Details
                        </button>
                      </Link>
                    ) : (
                      <Link to={`/login`}>
                        <button className="badge badge-secondary">
                          Details
                        </button>
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default AllCampains;
