import { useState } from "react";
import GadgetTitle from "../../components/GadgetTitle";
import Cart from "./Cart";
import WishList from "./WishList";

const Dashboard = () => {
  const [troggle, setTroggle] = useState(true);

  return (
    <div>
      <GadgetTitle
        title="Dashboard"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      ></GadgetTitle>
      <div className="-mt-[80px] flex justify-center gap-6">
        <button
          onClick={() => setTroggle(true)}
          className={`btn w-[120px] ${
            troggle
              ? "bg-[#f9f9f9] text-[#9339dd]"
              : "bg-transparent text-white"
          }`}
        >
          Cart
        </button>
        <button
          onClick={() => setTroggle(false)}
          className={`btn w-[120px] ${
            troggle
              ? "bg-transparent text-white"
              : "bg-[#f9f9f9] text-[#9339dd]"
          }`}
        >
          Wishlist
        </button>
      </div>
      <div className="mt-10">
        {troggle ? <Cart troggle={troggle}></Cart> : <WishList></WishList>}
      </div>
    </div>
  );
};

export default Dashboard;
