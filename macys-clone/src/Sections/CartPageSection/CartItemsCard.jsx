import axios from "axios";
import { Link } from "react-router-dom";

const CartItemsCard = ({ id, price, productName, size, topHeading, image }) => {

async function deleteData(id){
    try {
        let res = await axios({
            method: "delete",
            baseURL: `http://localhost:3000/Cart/${id}`
        })
        console.log("Item Removed", res)
    } catch (error) {
        console.log("Error");
    }
}



  return (
    <section>
      <div className="flex gap-10 border border-black w-[55%] px-5 py-5">
        <div id="imageDiv">
          <img src={image} alt="CartImage" width={100} height={100} />
        </div>

        <div>
          <div className="font-macys-medium text-sm flex flex-1 flex-col justify-between py-2">
            <h1 className="uppercase font-macys-medium text-[12px] font-bold">
              {topHeading}
            </h1>
            <Link
              className="underline"
              to={`/singlePageSection/${productName}`}
            >
              <h1 className="w-[50%]">{productName}</h1>
            </Link>
            <h1>Size: {size}</h1>
          </div>

          <div>
            <button onClick={()=>deleteData(id)}>Remove</button>
          </div>
        </div>

        <div>
          <h1>{price}</h1>
        </div>
      </div>
    </section>
  );
};

export default CartItemsCard;
