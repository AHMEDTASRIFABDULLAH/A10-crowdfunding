import { Link } from "react-router-dom";
import Banner from "./Banner";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MySectionOne from "../MySection/MySectionOne";
import { Zoom } from "react-awesome-reveal";
import MySection2 from "../MySection/MySection2";
import Loding from "./Loding";
import { useQuery } from "@tanstack/react-query";
import useAxiosSec from "../../Hooks/useAxiosSec";

const Home = () => {
  const axiosSec = useAxiosSec();
  const { user, isDark } = useContext(AuthContext);
  const { data: runningCampaign, isLoading } = useQuery({
    queryKey: ["allCampain"],
    queryFn: async () => {
      const { data } = await axiosSec.get(`/allcampaign`);
      return data;
    },
  });
  if (isLoading) return <Loding />;
  window.scroll(0, 0);
  return (
    <>
      <Banner />
      <div className="px-6 pb-14 " data-theme={isDark ? "dark" : "light"}>
        <h1 className="text-4xl my-6 text-center font-bold">
          Running Campaign
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

        <MySectionOne></MySectionOne>
        <MySection2></MySection2>
      </div>
    </>
  );
};

export default Home;
