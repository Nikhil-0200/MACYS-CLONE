import { Link } from "react-router-dom"
import { womenSideBarData } from "../../Constants"
import SideBarAccordion from "./SideBarAccordion"

const WomenSideBar = () => {
  return (
    <section className="w-[23%] font-macys-light text-sm max-lg:hidden">
        <div className="py-5">
        <div className="flex flex-col gap-4 font-macys-light text-sm text-red-700 py-2">
        <Link>40% off Tops</Link>
        <Link>Sale & Clearance</Link>
        </div>

        <div>
            {womenSideBarData.map((ele, index)=>(
                <SideBarAccordion
                key={index}
                data={ele}
                />
            ))}
        </div> 
        </div>
        
    </section>
  )
}

export default WomenSideBar