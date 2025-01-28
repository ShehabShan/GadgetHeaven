import { FaGoogle } from "react-icons/fa";

import { useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { googleSingIn } = useAuth();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleGoogleLogin = () => {
    console.log("google login");
    googleSingIn().then((res) => {
      console.log(res.user.displayName);
      // const name = res.user?.displayName;
      // const email = res.user?.email;
      // const userInfo = {
      //   name,
      //   email,
      // };
      // axiosPublic.post("/users", userInfo);

      // navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <div>
        <button
          onClick={handleGoogleLogin}
          className="btn w-52 flex mx-auto mt-8"
        >
          <FaGoogle className="text-3xl"></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
