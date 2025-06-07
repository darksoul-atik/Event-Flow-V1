import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Profile from "../Pages/Profile";
import Extrapage from "../Pages/extrapage";
import Home from "../Pages/Home";

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
  path:"/",
  element: <MainLayout></MainLayout>,
  children:[
    {
      index:true,
      element:<Home></Home>,
    },
    {
      path:"/profile",
      element:<Profile></Profile>,
    },
    {
      path:"/extra",
      element:<Extrapage></Extrapage>,
    },
  ]
}

]);

export default router;
