import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Shop from "../pages/shop/Shop";
import Contact from "../pages/contact/Contact";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import UserHome from "../pages/dashboard/userDashboard/UserHome";
import UserReservation from "../pages/dashboard/userDashboard/UserReservation";
import UserPaymentHistory from "../pages/dashboard/userDashboard/UserPaymentHistory";
import UserCart from "../pages/dashboard/userDashboard/UserCart";
import UserAddReview from "../pages/dashboard/userDashboard/UserAddReview";
import UserBooking from "../pages/dashboard/userDashboard/UserBooking";
import AdminHome from "../pages/dashboard/adminDashboard/AdminHome";
import AdminAddItem from "../pages/dashboard/adminDashboard/AdminAddItem";
import AdminManageItem from "../pages/dashboard/adminDashboard/AdminManageItem";
import AdminBooking from "../pages/dashboard/adminDashboard/AdminBooking";
import AdminAllUser from "../pages/dashboard/adminDashboard/AdminAllUser";

const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "shop",
        element: (
          <PrivateRoute>
            {" "}
            <Shop />
          </PrivateRoute>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // admin dashboard route
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "add-item",
        element: <AdminAddItem />,
      },
      {
        path: "manage-item",
        element: <AdminManageItem />,
      },
      {
        path: "manage-booking",
        element: <AdminBooking />,
      },
      {
        path: "all-user",
        element: <AdminAllUser />,
      },

      // user dashboard route
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "reservation",
        element: <UserReservation />,
      },
      {
        path: "payment-history",
        element: <UserPaymentHistory />,
      },
      {
        path: "cart",
        element: <UserCart />,
      },
      {
        path: "add-review",
        element: <UserAddReview />,
      },
      {
        path: "booking",
        element: <UserBooking />,
      },
    ],
  },
]);
export default AllRoutes;
