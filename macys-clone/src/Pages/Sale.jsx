import { useEffect, useState } from "react"
import SalesCard from "../Components/SalesCard"
import Loading from "../Components/Loading";

const Sale = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);

  async function fetchData(){
    setLoading(true)
    try {
      let res = await fetch(`https://script.google.com/macros/s/AKfycbw1CfVgiDL_x8Fk7hJCbMYfbV0dKifXuuQkR0caLb7_eHsXplwQLPveHyH78iWZa4Cq/exec`)
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
    <section className="max-container">
      <div className="flex justify-center">
      {loading && <Loading />}
      </div>
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