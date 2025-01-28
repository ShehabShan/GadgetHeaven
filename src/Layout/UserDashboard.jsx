import { FaHome } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const UserDashboard = () => {
  const { user } = useAuth();

  const dropDown = (
    <>
      {user && (
        <>
          <li className="uppercase">
            <NavLink to="/userDashboard/myProfile">
              <FaHome></FaHome>My Profile
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/userDashboard/myApplication">
              <FaHome></FaHome>My Application
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/userDashboard/myReviews">
              <FaHome></FaHome>My Reviews
            </NavLink>
          </li>
        </>
      )}

      <div className="divider"></div>
      <li className="uppercase">
        <NavLink to="/">
          <FaHome></FaHome>Home
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="min-h-[100vh]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-4">
        <div className="border border-blue-700  lg:w-[300px]">
          <div className="">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 text-[#7d7d7d] rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {dropDown}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl fixed">
              <h3 className="text-2xl ">School Hive Admin</h3>
            </Link>
          </div>
          <div className=" hidden lg:flex  pt-6 ">
            <ul className="menu flex gap-3  lg:flex lg:flex-col  fixed text-black">
              {dropDown}
            </ul>
          </div>
        </div>

        <div className="flex-1 px-8 pt-3 border border-red-600 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
