import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
const MyDonations = () => {
  const { user } = useContext(AuthContext);
  const donateData = useLoaderData();
  const [userEmail, setUserEmail] = useState([]);

  useEffect(() => {
    const newdata = donateData.filter((data) => data.loginEmail === user.email);
    setUserEmail(newdata);
  }, []);

  // const check = donateData.find((d) => d.loginEmail === user?.email);
  // console.log(check);
  window.scroll(0, 0);
  return (
    <div>
      <h1 className="text-center font-bold text-2xl my-4">
        {user?.displayName} your contribution
      </h1>

      {userEmail.map((d) => (
        <div key={d._id}>
          <div className="max-w-sm mx-auto mb-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4 ">
            <div className="md:flex ">
              <div className="md:flex-shrink-0 ">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48 rounded-lg"
                  src={d.image}
                  alt=""
                />
              </div>
              <div className="p-8 ">
                <div className=" tracking-wide text-xl 0 font-semibold">
                  Title : {d.title}
                </div>
                <p className="mt-2 text-gray-500">
                  <span className="font-bold text-gray-600">Description :</span>{" "}
                  {d.description}
                </p>
                <p className="mt-2 text-gray-500">
                  {" "}
                  <span className="font-bold text-gray-600">
                    Deadline :
                  </span>{" "}
                  {d.deadline}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyDonations;
