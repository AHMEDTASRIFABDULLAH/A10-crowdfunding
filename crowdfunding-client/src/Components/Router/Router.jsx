import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AllCampains from "../Pages/AllCampains";
import MyDonations from "../Pages/MyDonations";
import AddCampaing from "../Pages/AddCampaing";
import MyCampaign from "../Pages/MyCampaign";
import Update from "../Pages/Update";
import DetailsPage from "../Pages/DetailsPage";
import Private from "../Pages/Private";
import Error from "../Pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/campaign",
        element: <AllCampains></AllCampains>,
      },
      {
        path: `/donations`,
        element: (
          <Private>
            <MyDonations></MyDonations>
          </Private>
        ),
        loader: () => fetch("https://server-site-smoky.vercel.app/donations"),
      },
      {
        path: "/addcampaing",
        element: (
          <Private>
            <AddCampaing></AddCampaing>
          </Private>
        ),
      },
      {
        path: `/mycampaing/:email`,
        element: (
          <Private>
            {" "}
            <MyCampaign></MyCampaign>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-site-smoky.vercel.app/allcampaign/${params.email}`
          ),
      },
      {
        path: `update/:id`,
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://server-site-smoky.vercel.app/update/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(`https://server-site-smoky.vercel.app/details/${params.id}`),
      },
    ],
  },
]);

export default router;
