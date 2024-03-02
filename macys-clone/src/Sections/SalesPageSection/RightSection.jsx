import { border } from "@chakra-ui/react";
import { useState } from "react";

export const RightSection = ({id, productName, rating, topHeading, price}) =>{
    const [data, setData] = useState("Please select")
    return(
        <section className=" w-[78%] px-10">
            <div>
                    <h1 className="uppercase font-macys-medium text-sm">{topHeading}</h1>
                    <h1 className=" w-[100%] font-macys-bold text-[26px] leading-tight py-3">{productName}</h1>
                    <h1 className="font-macys-medium text-sm py-3">{rating}</h1>
                    <h1 className="font-macys-bold text-lg py-3">{price}</h1>
            </div>

            <div className="py-10">
                <h1 className="font-macys-medium text-sm">SIZE: {data}</h1>

                <div className="font-macys-light text-sm grid grid-cols-5 gap-4 py-5">
                    {["XXS", "XS", "S", "M", "L", "XL", "XXL"].map((size, index)=>{
                        return(
                            <button 
                            key={index}
                            onClick={()=> setData(size)} className={`border-[1.5px] border-black py-3 rounded-md ${data===size ? "border-[2.5px] border-black" : ""}`}>{size}</button>
                        )
                        })}
                </div>
            </div>

            <div>
                <button className="bg-black w-full py-3 rounded-md font-macys-medium text-md text-white">
                    Add To Bag
                </button>
            </div>
        </section>
    )
}

 RightSection;