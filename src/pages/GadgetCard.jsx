import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const GadgetCard = ({ gadget, handleAddWish }) => {
  return (
    <div className="bg-white">
      <div className="flex flex-col gap-5  p-4">
        <img
          className="w-[280px] h-[180px]"
          src={gadget?.product_image}
          alt=""
        />
        <h2>{gadget?.product_title}</h2>
        <p>Price: {gadget?.price} Tk</p>
        <div className="flex justify-center gap-6">
          <Link to={`/gadget/gadget/${gadget.product_id}`}>
            <button className="btn text-[#8f37d7] border border-[#8f37d7] ">
              View Details
            </button>
          </Link>
          <button onClick={() => handleAddWish(gadget)}>
            <FcLike className="text-2xl " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GadgetCard;
