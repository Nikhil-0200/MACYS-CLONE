import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {LeftSection} from "../Sections/SalesPageSection/LeftSection";
import {RightSection} from "../Sections/SalesPageSection/RightSection.jsx"

const SinglePageSection = () => {
  const { productName } = useParams();
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      let res = await axios({
        method: "get",
        baseURL: `https://script.google.com/macros/s/AKfycbxvTbZ8zoHAh4yQO8a1Oaf9m-R_jFsQUNnZpSi9vz9LuDSeYU_2XSqC1WttOeSk0bwT/exec?productName=${productName}`,
      });
      setData(res.data.data);
    } catch (error) {
      console.error("Error");
    }
  }

  useEffect(() => {
    fetchData();
  }, [productName]);

  return (
    <section className="flex px-5 py-10 justify-between max-sm:flex-col max-container">
      <div className="w-[40%] max-sm:w-full">
        {data.map((ele)=>(
            <LeftSection 
            {...ele}
            key={ele.id}
            />
        ))}
      </div>

      <div className="lg:w-[55%]">
      {data.map((ele)=>(
             <RightSection
            data={ele}
            key={ele.id}
            />
        ))}
      </div>
    </section>
  );
};

export default SinglePageSection;
