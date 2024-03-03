import { useState } from "react";
import { useToast } from "@chakra-ui/react";

export const RightSection = ({ data }) => {
  let CART;
  if (localStorage.getItem("CART")) {
    CART = JSON.parse(localStorage.getItem("CART"));
  } else {
    CART = [];
    localStorage.setItem("CART", JSON.stringify(CART));
  }

  const [size, setSize] = useState("Please select");
  const [error, setError] = useState(null);

  const toast = useToast();

  function dataPushing() {

    const isItemInCart = CART.some(
      (item) => item.id === data.id
    );

    if (isItemInCart) {

      toast({
        title: "Info",
        description: "This item is already in the cart.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (size === "Please select") {
      setError("Please select a size");
      toast({
        title: "Error",
        description: "Please select a Size.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newData = {
      id: data.id,
      topHeading: data.topHeading,
      productName: data.productName,
      rating: data.rating,
      price: data.price,
      size: size,
      image: data.image1,
    };


    CART.push(newData);
    localStorage.setItem("CART", JSON.stringify(CART));

    setError(null);

    toast({
      title: "Success",
      description: "Item added to the cart successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <section className="w-[78%] px-10">
      <div>
        <h1 className="uppercase font-macys-medium text-sm">
          {data.topHeading}
        </h1>
        <h1 className="w-[100%] font-macys-bold text-[26px] leading-tight py-3">
          {data.productName}
        </h1>
        <h1 className="font-macys-medium text-sm py-3">{data.rating}</h1>
        <h1 className="font-macys-bold text-lg py-3">{data.price}</h1>
      </div>

      <div className="py-10">
        <h1 className="font-macys-medium text-sm">SIZE: {size}</h1>

        <div className="font-macys-light text-sm grid grid-cols-5 gap-4 py-5">
          {["XXS", "XS", "S", "M", "L", "XL", "XXL"].map((sizeData, index) => (
            <button
              key={index}
              onClick={() => {
                setSize(sizeData);
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
          onClick={() => dataPushing(data)}
          className="bg-black w-full py-3 rounded-md font-macys-medium text-md text-white"
        >
          Add To Bag
        </button>
      </div>
    </section>
  );
};
