import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <Link to="/" className="btn-error btn m-6">
        Back To Home
      </Link>
      <h1 className="font-extrabold text-red-700 text-center text-5xl md:text-8xl">
        404.......
      </h1>
    </div>
  );
};

export default Error;
