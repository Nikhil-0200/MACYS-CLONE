import { useEffect, useState } from "react"
import SalesCard from "../Components/SalesCard"

const Sale = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);

  async function fetchData(){
    setLoading(true)
    try {
      let res = await fetch(`https://script.google.com/macros/s/AKfycbxvTbZ8zoHAh4yQO8a1Oaf9m-R_jFsQUNnZpSi9vz9LuDSeYU_2XSqC1WttOeSk0bwT/exec`)
      let finalData = await res.json()
      setData(finalData.data)
      setLoading(false)
    } catch (error) {
      console.log("Error")
      setLoading(false)
    }
  }

useEffect(()=>{
fetchData()
}, [])


  return (
    <section>
      {loading && (
  <h1>Loading.....</h1>
)}
      <div id="salesGrid" className="grid lg:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2 ">
        {data.map((ele, index)=>(
          <SalesCard
          {...ele}
        key={index}
        />
        ))}
        
      </div>
    </section>
  )
}

export default Sale