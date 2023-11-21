import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const DashboardNavbar = () => {
  const location = useLocation();

  const admin = true;
  const userNavLink = admin ? (
    <>
      <NavLink
        to="/dashboard/admin-home"
        className={
          location.pathname == "/dashboard/admin-home"
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        Admin Home
      </NavLink>

      <NavLink
        to="/dashboard/add-item"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        Add Item
      </NavLink>
      <NavLink
        to="/dashboard/manage-item"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        Manage Item
      </NavLink>
      <NavLink
        to="/dashboard/manage-booking"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        Manage Booking
      </NavLink>
      <NavLink
        to="/dashboard/all-user"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        All User
      </NavLink>
    </>
  ) : (
    <>
      <NavLink
        to="/dashboard/user-home"
        className={
          location.pathname == "/dashboard"
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        User Home
      </NavLink>

      <NavLink
        to="/dashboard/reservation"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        Reservation
      </NavLink>
      <NavLink
        to="/dashboard/payment-history"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        Payment History
      </NavLink>
      <NavLink
        to="/dashboard/cart"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        Cart
      </NavLink>
      <NavLink
        to="/dashboard/add-review"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        Add Review
      </NavLink>
      <NavLink
        to="/dashboard/booking"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        Booking
      </NavLink>
    </>
  );

  const homeNavLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        All Menu
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        Shop Now
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 font-semibold"
            : "hover:underline hover:underline-offset-8"
        }
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <div className="flex flex-col justify-between text-white gap-10 px-10">
      <div className="flex items-center">
        <Link className="flex items-end gap-2 text-xl uppercase border-none outline-none">
          <img className="h-8 lg:h-10 w-8 lg:w-10" src={logo} alt="" />
          <h3 className="text-base lg:text-xl font-bold">Bistro Boss</h3>
        </Link>
      </div>
      <div>
        <ul className="flex flex-col gap-5 text-lg tracking-widest">
          {userNavLink}
        </ul>
      </div>
      <hr />
      <div>
        <ul className="flex flex-col gap-5 text-lg tracking-widest">
          {homeNavLink}
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavbar;
