import { useParams } from "react-router-dom";
import GadgetTitle from "../components/GadgetTitle";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const GadgetDetails = () => {
  const { id } = useParams();
  const [gadget, setGadgets] = useState({});
  console.log(gadget);

  useEffect(() => {
    axios("/gadget.json").then((res) => {
      const data = res.data;
      const findGadget = data.find((item) => item.product_id === id);
      setGadgets(findGadget);
    });
  }, [id]);

  const handleAddCart = async () => {
    try {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updateCart = [...existingCart, gadget];
      localStorage.setItem("cart", JSON.stringify(updateCart));

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Cart Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log("cart not added");
    }
  };

  return (
    <div>
      <div>
        <GadgetTitle
          title="Product Details"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></GadgetTitle>
      </div>
      <div>
        <div
          className="w-[1040px] h-[530px] mx-auto -mt-[100px] mb-20
            p-4 bg-white rounded-2xl flex gap-[32px]
           "
        >
          <div>
            <img
              className="w-[420px] h-[480px] rounded-[9px]"
              src={gadget?.product_image}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[16px] py-2">
            <h2>{gadget?.product_title}</h2>
            <p
              className={` max-w-[120px] p-1 text-center rounded-md ${
                gadget?.availability ? "bg-green-400" : "bg-red-400"
              } `}
            >
              {gadget?.availability ? "In Stock " : "Out Of Stock"}
            </p>
            <h3>{gadget?.description}</h3>
            <p className="text-bold text-xl text-black">Specification</p>

            {gadget?.specification?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}

            <Rating
              initialRating={gadget?.rating}
              readonly
              emptySymbol={<FaRegStar className="text-gray-400 text-xl" />}
              fullSymbol={<FaStar className="text-yellow-500 text-xl" />}
            />
            <div>
              <button
                onClick={handleAddCart}
                className="btn bg-[#8e38d5] text-white"
              >
                Add To Card <IoCartOutline className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
