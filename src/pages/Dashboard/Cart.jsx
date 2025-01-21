import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Swal from "sweetalert2";
import success from "../../assets/Group.png";

const Cart = ({ troggle }) => {
  const [carts, setCarts] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedOption, setSelectedOption] = useState("default");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCarts(savedCart);
    const calctotalPrice = carts?.reduce(
      (total, cart) => total + cart.price,
      0
    );
    setTotalPrice(calctotalPrice);
  }, [carts]);

  const handleDeleteCart = (indexToRemove) => {
    const updateCart = carts.filter((_, index) => index !== indexToRemove);
    setCarts(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));
  };

  const handlePurchase = async () => {
    try {
      localStorage.removeItem("cart");
      setCarts([]);

      Swal.fire({
        title: "Payment Successfully",

        html: ` Thanks for purchasing. <br> Total: ${totalPrice}`,
        imageUrl: success,
      });
    } catch (error) {
      console.log("purchase");
    }
  };

  const hanldeSortPrice = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value === "lowToHigh") {
      const lowTohigh = carts.sort((a, b) => a.price - b.price);
      setCarts(lowTohigh);
    } else if (e.target.value === "highToLow") {
      const highToLow = carts.sort((a, b) => b.price - a.price);
      setCarts(highToLow);
    }
  };

  return (
    <div className="max-w-[1080px] mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Cart</h2>
        </div>
        <div className="flex justify-center items-center gap-3">
          <h2 className="text-2xl font-bold">Total Cost :{totalPrice} </h2>
          <select
            onChange={hanldeSortPrice}
            value={selectedOption}
            className="select select-ghost text-[#9038db]"
          >
            <option value="default" disabled>
              Sort by Price
            </option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
          <button
            onClick={handlePurchase}
            className="btn bg-[#9038db] text-white rounded-3xl"
          >
            Purchase
          </button>
        </div>
      </div>
      {carts?.map((cart, index) => (
        <CartItem
          key={index}
          cart={cart}
          index={index}
          troggle={troggle}
          handleDeleteCart={handleDeleteCart}
        ></CartItem>
      ))}
    </div>
  );
};

export default Cart;
