import { GiCrossMark } from "react-icons/gi";
import Cart from "./Cart";

const CartItem = ({
  cart,
  index,
  troggle,
  handleDeleteCart,
  handleAddCart,
}) => {
  return (
    <div className="border bg-white p-10 mt-7  rounded-lg">
      <div className="flex gap-10 items-center">
        <div>
          <img
            className="w-[200px] h-[150px]"
            src={cart?.product_image}
            alt="image"
          />
        </div>
        <div className="flex items-center gap-16">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">{cart?.product_title}</h2>

            <p className="text-[18px] font-light">{cart?.description}</p>
            <p className="text-xl font-semibold">Price: {cart?.price}</p>
            {troggle ? (
              ""
            ) : (
              <div>
                <button
                  onClick={() => handleAddCart(cart)}
                  className="btn bg-[#8c37d3] rounded-xl text-white px-8"
                >
                  Add to Cat
                </button>
              </div>
            )}
          </div>

          <div>
            <GiCrossMark
              onClick={() => handleDeleteCart(index)}
              className="text-2xl text-red-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
