import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import useAuth from "../hooks/useAuth";
import { RotatingLines } from "react-loader-spinner";

const HomeLayout = () => {
  const { loader } = useAuth();
  if (loader) {
    return (
      <p className="h-screen flex items-center justify-center">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
          color="#BB8506"
        />
      </p>
    );
  }

  return (
    <div className="font-Rubik">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
