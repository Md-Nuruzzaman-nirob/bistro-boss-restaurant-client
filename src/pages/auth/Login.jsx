import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/others/authentication.gif";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { useForm } from "react-hook-form";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { loginUser } = useAuth();

  useEffect(() => {
    loadCaptchaEnginge(5, "transparent", "black");
  }, []);

  const handleCaptcha = (e) => {
    if (validateCaptcha(e.target.value, false) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigates = useNavigate();

  const onSubmit = (e) => {
    const email = e.email;
    const password = e.password;
    loginUser(email, password)
      .then(() => {
        navigates(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className={
        "my-0 xl:mx-0 px- min-h-screen flex flex-row-reverse items-center justify-center bg-slate-50"
      }
    >
      <div className="flex-1 flex justify-evenly">
        <div className="">
          <h3 className="mb-14 text-4xl font-semibold text-center">
            Login Now!!!
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body shadow-2xl bg-base-100 w-[500px] "
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered focus:outline-none focus:border-[#BB8506]"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <span className="text-red-600">*Email Address is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered focus:outline-none focus:border-[#BB8506]"
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600">*Password is required</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate
                  reloadText="Reload My Captcha"
                  reloadColor="#BB8506"
                />
              </label>
              <input
                onChange={handleCaptcha}
                type="text"
                name="captcha"
                placeholder="captcha"
                className="input input-bordered focus:outline-none focus:border-[#BB8506]"
              />
            </div>

            <div className="form-control mt-4">
              <button disabled={disabled} className="w-full btn btn-warning">
                Login
              </button>
            </div>
            <div>
              <p className="text-center">
                haven&apos;t any account?{" "}
                <Link to={"/register"} className="hover:underline">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center lg:text-left flex-1 overflow-hidden">
        <img className="w-[1000px]" src={image} alt="" />
      </div>
    </div>
  );
};

export default Login;
