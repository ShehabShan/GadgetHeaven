import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Sheard/Nabvar";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <div className="max-w-[1440px]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
