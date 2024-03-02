import CartItemsCard from "../Sections/CartPageSection/CartItemsCard"
import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [data, setData] = useState([])

  async function fetchData(){
    try {
        let res = await axios({
            method: "get",
            baseURL:`http://localhost:3000/Cart`
        })
        setData(res.data)
        console.log(res.data);
    } catch (error) {
        console.log("Error");
    }
   }

   useEffect(()=>{
    fetchData()
   }, [])

  return (
    <section className="px-6">
      <div>
        <h1>Your Bag</h1>
      </div>
      {data.map((ele, index)=>(
        <CartItemsCard
        {...ele}
        key={index}
        />
      ))}
      
    </section>
  )
}

export default Cart