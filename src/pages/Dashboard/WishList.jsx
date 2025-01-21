import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Swal from "sweetalert2";

const WishList = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("wish")) || [];
    setCarts(savedCart);
  }, []);

  const handleAddCart = async (cart) => {
    try {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updateCart = [...existingCart, cart];
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
    <div className="max-w-[1080px] mx-auto">
      <div>
        <h2 className="text-2xl font-bold">WishList</h2>
      </div>

      {carts.map((cart, index) => (
        <CartItem
          key={index}
          cart={cart}
          handleAddCart={handleAddCart}
        ></CartItem>
      ))}
    </div>
  );
};

export default WishList;
