
import axios from "axios";
import { useState } from "react";


async function submitData(data) {
    try {
        const formattedData = {
            id: generateUniqueId(),
            topHeading: data.TopHeading.topHeading,
            productName: data.ProductName.productName,
            price: data.Price.price,
            size: data.Size,
            image:data.Image.image1
        };

        let res = await axios({
            method: "post",
            baseURL: "http://localhost:3000/Cart",
            data: formattedData,
        });

        console.log(res);
    } catch (error) {
        console.error("Error submitting data:", error);
    }
}

// Function to generate a unique ID (you can use a library like uuid for this)
function generateUniqueId() {
    return new Date().getTime().toString();
}


export const RightSection = ({
  id,
  productName,
  rating,
  topHeading,
  price, 
  image1,
}) => {
 

  const [size, setSize] = useState("Please select");
  const [data, setData] = useState({
    TopHeading: {topHeading},
    ProductName: {productName},
    Rating: {rating},
    Price: {price},
    Size:"",
    Image: {image1},
  })

  return (
    <section className="w-[78%] px-10">
      <div>
        <h1 className="uppercase font-macys-medium text-sm">{topHeading}</h1>
        <h1 className="w-[100%] font-macys-bold text-[26px] leading-tight py-3">
          {productName}
        </h1>
        <h1 className="font-macys-medium text-sm py-3">{rating}</h1>
        <h1 className="font-macys-bold text-lg py-3">{price}</h1>
      </div>

      <div className="py-10">
        <h1 className="font-macys-medium text-sm">SIZE: {size}</h1>

        <div className="font-macys-light text-sm grid grid-cols-5 gap-4 py-5">
          {["XXS", "XS", "S", "M", "L", "XL", "XXL"].map((sizeData, index) => (
            <button
              key={index}
              onClick={() =>{ 
                setSize(sizeData); 
                 setData({...data, Size:sizeData})
                }}
              className={`border-[1.5px] border-black py-3 rounded-md ${
                size === sizeData ? "border-[2.5px] border-black" : ""
              }`}
            >
              {sizeData}
            </button>
          ))}
        </div>
      </div>

      <div>
        <button
        onClick={()=>submitData(data)}
          className="bg-black w-full py-3 rounded-md font-macys-medium text-md text-white"
        >
          Add To Bag
        </button>
      </div>
    </section>
  );
};
