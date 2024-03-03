import CartItemsCard from "../Sections/CartPageSection/CartItemsCard";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("CART")));

  const [totals, setTotals] = useState([]);

  const removeFromCart = (itemId) => {
    const updatedCart = data.filter((item) => item.id !== itemId);
    setData(updatedCart);
    setTotals((prevTotals) => {
      const updatedTotals = { ...prevTotals };
      delete updatedTotals[itemId];
      return updatedTotals;
    });
    localStorage.setItem("CART", JSON.stringify(updatedCart));
  };
  function getData(id, newTotal) {
    setTotals((prevTotals) => {
      const updatedTotals = { ...prevTotals, [id]: newTotal };
      return updatedTotals;
    });
  }
  

const calculateTotalSum = () => {
  const totalSum = Object.values(totals)
    .reduce((acc, total) => acc + parseFloat(total || 0), 0)
    .toFixed(2);
  return totalSum;
};

  return (
    <section className="px-6 flex justify-between py-5 max-lg:flex-col">
      <div className="max-lg:w-full w-[55%]">
        <div className="py-3 border-b-[1.3px] border-black">
          <h1 className="font-macys-bold text-3xl">Your Bag</h1>
        </div>
        {data.map((ele) => (
          <CartItemsCard
            getData={getData}
            {...ele}
            key={ele.id}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>

      <div className="max-lg:w-full w-[35%]">
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

        <div className="flex flex-col gap-5 font-macys-light py-7 border-b-[1.2px] border-black">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${calculateTotalSum()}</span>
          </div>
          <button className="bg-black py-3 px-3 rounded-lg text-white font-macys-medium w-full">Proceed To Checkout</button>

          <Link className="underline" to="/sale">Continue Shopping</Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
