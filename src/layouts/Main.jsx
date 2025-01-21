import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../pages/Banner";
import BannerPic from "../pages/BannerPic";

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-[#f7f7f7]">
      {/* Navbar */}
      <div className="bg-[#9339dd] text-white rounded-xl">
        <Navbar />
        <Banner></Banner>
      </div>
      <BannerPic></BannerPic>

      {/* Outlet */}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
