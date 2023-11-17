import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Container from "../shared/Container";

const Navbar = () => {
  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#BB8506] underline" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#BB8506] underline" : ""
        }
      >
        All Menu
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#BB8506] underline" : ""
        }
      >
        Shop Now
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#BB8506] underline" : ""
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#BB8506] underline" : ""
        }
      >
        Cart
      </NavLink>
    </>
  );
  return (
    <nav className="w-full fixed z-10 bg-black/60">
      <Container className="flex items-center justify-between text-white py-3 ">
        <div className="flex items-center">
          <Link className="flex items-end gap-2 text-xl font-light uppercase border-none outline-none">
            <img className="h-8 lg:h-10 w-8 lg:w-10" src={logo} alt="" />
            <h3 className="text-base lg:text-xl">
              <span className="text-[#BB8506]">B</span>istro{" "}
              <span className="text-[#BB8506]">B</span>oss
            </h3>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 text-lg font-light underline-offset-[6px] tracking-widest">
            {navLink}
          </ul>
        </div>
        <div className="flex items-center gap-5 lg:gap-0">
          <Link to={"/login"}>
            <button className="px-5 btn btn-xs lg:btn-sm bg-[#BB8506] hover:bg-white  text-white hover:text-[#BB8506] border-0 border-b-4 border-white hover:border-[#BB8506] rounded-lg transition-colors duration-500 ease-in-out font-light outline-none">
              Login
            </button>
          </Link>
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow rounded-box w-52 bg-gray-800 space-y-5 text-lg right-0"
            >
              {navLink}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
