import axios from "axios";

const axiosSec = axios.create({
  baseURL: "https://server-site-smoky.vercel.app",
});
const useAxiosSec = () => {
  return axiosSec;
};

export default useAxiosSec;
