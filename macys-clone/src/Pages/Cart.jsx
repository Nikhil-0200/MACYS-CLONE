import CartItemsCard from "../Sections/CartPageSection/CartItemsCard";

import { useState } from "react";

const Cart = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("CART")));

  const removeFromCart = (itemId) => {
    const updatedCart = data.filter((item) => item.id !== itemId);
    setData(updatedCart);
    localStorage.setItem("CART", JSON.stringify(updatedCart));
  };

  return (
    <section className="px-6 flex justify-between py-5">
      <div className="w-[55%]">
        <div className="py-3 border-b-[1.3px] border-black">
          <h1 className="font-macys-bold text-3xl">Your Bag</h1>
        </div>
        {data.map((ele) => (
          <CartItemsCard
            {...ele}
            key={ele.id}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>

      <div className="w-[35%]">
        <div className="font-macys-medium py-3 pb-6 flex flex-col gap-4 border-b-[1.2px] border-black">
          <h1 className="text-xl">
            Enter Promo Code{" "}
            <span className="text-sm px-3">Limit 1 offer per order</span>
          </h1>
          <div className="border-[1.2px] border-black rounded-lg overflow-hidden justify-between flex">
            <input
              type="text"
              placeholder="Enter Promo Code"
              className="py-3 px-2 mx-2 w-full border-none focus:border-none focus:outline-none"
            />
            <button className="bg-black py-3 px-3 text-white font-macys-medium">
              Apply
            </button>
          </div>
        </div>

        <div className="py-7 border-b-[1.2px] border-black">
          <h1 className=" w-[90%] font-macys-light text-sm">
            Shipping, duties and taxes will be calculated at checkout, where
            applicable.
          </h1>
        </div>

        <div>
          <div>
            <span>Subtotal</span>
            <span></span>
          </div>
          <div></div>
          <button></button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
