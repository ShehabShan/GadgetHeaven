import { Link, NavLink } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import useModaretor from "../../Hooks/useModaretor";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isModaretor] = useModaretor();
  console.log(isAdmin);
  console.log("navbar modrator", isModaretor);

  // const [isModarate, setModarate] = useState(true);

  const hanldeSingOut = () => {
    console.log("logout");
    logOut()
      .then(() => {
        console.log("Successful Sing Out");
      })
      .catch((error) => {
        console.log("failed to sing out", error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allScholership">All Scholership</NavLink>
      </li>
    </>
  );

  const dropDown = (
    <>
      {user && (
        <li>
          <NavLink to="/userDashboard/myProfile">User Dashboard</NavLink>
        </li>
      )}
      {isModaretor || useAdmin ? (
        <li>
          <NavLink to="/modaratorDashboard/myProfile">
            Modarate Dashboard
          </NavLink>
        </li>
      ) : (
        ""
      )}
      {isAdmin && (
        <li>
          <NavLink to="/adminDashboard/adminProfile">Admin Dashboard</NavLink>
        </li>
      )}
      <li>
        <button
          onClick={hanldeSingOut}
          className=" bg-blue-500 text-white py-1 border flex justify-center "
        >
          Sing Out
        </button>
      </li>
    </>
  );

  return (
    <div className=" bg-white text-black flex justify-between w-[100%] border mx-auto p-3 rounded-lg ">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <h3 className="text-2xl ">School Hive</h3>
        </Link>
      </div>
      <div className=" hidden lg:flex">
        <ul className=" flex gap-3 text-[#7d7d7d]">{links}</ul>
      </div>

      <div className="">
        {!user ? (
          <div className="space-x-4">
            <Link to="/signIn" className="btn bg-blue-500 text-white ">
              Login
            </Link>
          </div>
        ) : (
          <>
            <div id="profilePic" className="dropdown dropdown-end  ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow
                gap-1"
              >
                {dropDown}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
