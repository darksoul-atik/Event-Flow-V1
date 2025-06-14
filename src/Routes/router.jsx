import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";
import Error404Page from "../Pages/Error404Page";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import EventDetails from "../Pages/EventDetails";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Blogs";
import Loading from "../Components/Loading";
import BlogDetails from "../Components/BlogDetails";
import Reservation from "../Pages/Reservation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("../review.json"),
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "/event/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "/blogs",
        loader: () => fetch("../blogs.json"),
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/blogs/:id",
        loader: () => fetch("../blogs.json"),
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "*",
    element: <Error404Page></Error404Page>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
