import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import loginbg from "../../assets/loginbg.png";
const SignUp = () => {
  const { signupdata, setUser, userProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelSignUp = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const photo = from.photo.value;
    const password = from.password.value;
    const signUpData = {
      name,
      email,
      photo,
      password,
    };
    const passwordRegex = /^(?=.*[A-Z]).*$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must: Uppercase");
      return;
    }
    const lowercase = /^(?=.*[a-z]).*$/;
    if (!lowercase.test(password)) {
      toast.error("Password must: lowercase");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be  6 characters");
      return;
    }

    signupdata(email, password)
      .then((result) => {
        userProfile(name, photo);
        setUser(result.user);

        fetch("https://server-site-smoky.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signUpData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              logOut();
              navigate("/login");
              toast.success("Sign Up Successfully ");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  window.scroll(0, 0);
  return (
    <div className="p-6 " style={{ backgroundImage: `url(${loginbg})` }}>
      <div className="md:w-[60%] mx-auto  bg-[#5a58582a] p-6 rounded-xl">
        <form onSubmit={handelSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="url"
              placeholder="Photo"
              className="input input-bordered"
              required
              name="photo"
            />
          </div>
          <p className="text-red-600">{Error}</p>
          <p>
            Have an account Please{" "}
            <Link
              className="underline-offset-1 underline text-gray-200"
              to="/login"
            >
              Login
            </Link>
          </p>

          <div className="form-control mt-6">
            <button className="btn bg-black hover:bg-black text-white border-none">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
