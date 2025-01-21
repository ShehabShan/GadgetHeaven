import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
const Navbar = () => {
  const menu = (
    <>
      <ul className="flex gap-5">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>

        <NavLink>
          <li>Statistics</li>
        </NavLink>

        <NavLink to="/gadget/dashboard">
          <li>Dashboard</li>
        </NavLink>
      </ul>
    </>
  );

  return (
    <div className="navbar justify-between px-6">
      <div>
        <h2 className="text-2xl">Gadget Heaven</h2>
      </div>
      <div>{menu}</div>

      <div className="flex gap-4">
        <div>
          <FaShoppingCart className="text-2xl" />
        </div>

        <div>
          <FcLike className="text-2xl " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
