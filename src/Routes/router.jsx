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

const router = createBrowserRouter([
  // {
  //     path: "/",
  //     element: <MainLayout />, // 🧩 Includes Navbar/Footer
  //     errorElement: <NotFound />, // 404 page
  //     children: [
  //       { path: "/", element: <Home /> },
  //       { path: "/login", element: <Login /> },
  //       { path: "/register", element: <Register /> },
  //       { path: "/forget-password", element: <ForgetPassword /> },
  //       {
  //         path: "/event/:id",
  //         element: (
  //           <PrivateRoute>
  //             <EventDetails />
  //           </PrivateRoute>
  //         ),
  //       },
  //       {
  //         path: "/profile",
  //         element: (
  //           <PrivateRoute>
  //             <Profile />
  //           </PrivateRoute>
  //         ),
  //       },
  //       {
  //         path: "/my-bookings", // ✅ Extra route (protected)
  //         element: (
  //           <PrivateRoute>
  //             <MyBookings />
  //           </PrivateRoute>
  //         ),
  //       },
  //     ],

  // },

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
        path: "/blogs",
        loader: () => fetch("../blogs.json"),
        element: <Blogs></Blogs>,
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "/blogs/:id",
         loader: () => fetch("../blogs.json"),
        element: <BlogDetails></BlogDetails>,
        hydrateFallbackElement:<Loading></Loading>
      },
    ],
  },
  {
    path: "/*",
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
