import { Link } from "react-router-dom";
import { plus2 } from "../../assets/icons";
import { minus } from "../../assets/icons";
import { useState, useEffect, useCallback } from "react";

const CartItemsCard = ({
  id,
  price,
  productName,
  size,
  topHeading,
  image,
  removeFromCart,
  getData,
}) => {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(price);

  const getDataCallback = useCallback(
    (id, newTotal) => {
      getData(id, newTotal);
    },
    [getData]
  );

  useEffect(() => {
    const newTotal = (parseFloat(price.slice(3))).toFixed(2) * count;
    setTotal(newTotal);
    getDataCallback(id, newTotal);
  }, [count, price, id]);

  // Error Corrected

  function handleInc() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDec() {
    setCount((prevCount) => (prevCount === 1 ? 1 : prevCount - 1));
  }

  return (
    <section>
      <div className="flex justify-between gap-5 px-5 py-5 border-b-[1.3px] border-black my-2 max-sm:flex-col">
        <div id="imageDiv">
          <img className="" src={image} alt="CartImage" width={150} height={100} />
        </div>

        <div className="w-auto flex ">
          <div className="font-macys-medium text-sm flex flex-1 flex-col justify-between py-2">
            <h1 className="uppercase font-macys-medium text-[12px] font-bold">
              {topHeading}
            </h1>
            <Link
              className="underline"
              to={`/singlePageSection/${productName}`}
            >
              <p className="font-normal">{productName}</p>
            </Link>
            <h1>Size: {size}</h1>
          </div>

          <div>
            <button onClick={() => removeFromCart(id)}>Remove</button>
          </div>
        </div>

<div className="flex items-start">
  <div className="w-[250px] flex flex-col items-center font-macys-medium text-sm">
          Qty
          <div className="w-[100%] flex justify-between">
            <button
              onClick={() => handleDec()}
              className="border-2 px-5 bg-slate-100"
            >
              <img src={minus} alt="minus" width={15} />
            </button>
            <span>{count}</span>
            <button
              onClick={() => handleInc()}
              className="border-2 px-5 bg-slate-100"
            >
              <img src={plus2} alt="plus" width={15} />
            </button>
          </div>
        </div>

        <div className="w-[180px] text-right font-macys-bold text-sm flex flex-col gap-3">
          <h1>{price}</h1>
          <h1 className="text-[17px]">Total {total}</h1>
        </div>
</div>
        
      </div>
    </section>
  );
};

export default CartItemsCard;
