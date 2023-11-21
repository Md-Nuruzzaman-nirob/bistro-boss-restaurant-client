import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardNavbar from "../components/dashboardComponents/DashboardNavbar";

const DashboardLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="grid grid-cols-12 min-h-screen relative">
      <div className="hidden lg:block col-span-3 2xl:col-span-2  bg-[#BB8506] text-white py-10">
        <DashboardNavbar />
      </div>

      <label className="lg:hidden fixed bottom-10 right-10 btn btn-circle swap swap-rotate">
        <input onClick={() => setIsDrawerOpen(!isDrawerOpen)} type="checkbox" />

        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>

      <div
        className={`lg:hidden fixed top-0 left-0 h-screen w-64  py-10 bg-[#BB8506] text-white transition-transform transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } duration-500 ease-in-out z-50`}
      >
        <DashboardNavbar />
      </div>

      <div className="col-span-12 lg:col-span-9 2xl:col-span-10 p-5 sm:p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
