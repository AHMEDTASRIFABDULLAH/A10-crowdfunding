import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import loginbg from "../../assets/loginbg.png";
const Login = () => {
  const { userLogin, handelGoogleLogin, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelGoogle = () => {
    handelGoogleLogin()
      .then(() => {
        toast.success("Login Successfully ");
        navigate("/");
      })
      .catch((error) => {
        logOut();
        console.log("Error", error);
      });
  };

  const handelLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    userLogin(email, password)
      .then((result) => {
        toast.success(" Login success ");

        navigate("/");
      })
      .catch((error) => {
        toast.error("incorr pass or email", error);
      });
  };
  window.scroll(0, 0);
  return (
    <div className="p-6" style={{ backgroundImage: `url(${loginbg})` }}>
      <div className="md:w-[60%] mx-auto  bg-[#5a58582a] p-6 rounded-xl">
        <form onSubmit={handelLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
            <p className="text-red-600">{Error}</p>
          </div>
          <p>
            Don&apos;t have an account Please
            <Link
              className="underline-offset-1 underline text-gray-200"
              to="/signup"
            >
              Sign Up
            </Link>
          </p>
          <div className="form-control mt-2">
            <button type="submit" onClick={handelGoogle} className="btn ">
              Google Login <FcGoogle className="text-xl" />
            </button>
          </div>
          <div className="form-control mt-2">
            <button
              type="submit"
              className="btn bg-black text-white border-none hover:bg-black"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
