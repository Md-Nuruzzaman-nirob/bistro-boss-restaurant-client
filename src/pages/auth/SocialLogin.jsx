import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocialLogin = async (login) => {
    try {
      await login();
      // toast.success("Register Successful!");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      // toast.error(error.message.slice(10));
    }
  };
  return (
    <>
      <div className="divider font-medium text-xs lg:text-sm">
        Or Login With
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="flex-1 btn btn-xs md:btn-sm lg:btn-md border-transparent font-bold font-Montserrat rounded-full"
        >
          <FcGoogle></FcGoogle> Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="flex-1 btn btn-xs md:btn-sm lg:btn-md border-transparent font-bold font-Montserrat rounded-full"
        >
          <FcGoogle></FcGoogle> Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
