import HistorySection from "./HistorySection";
import { History } from "../../Constants";

const WomenFooter = () => {
  return (
    <section>
        <div>
        {History.map((ele, index)=>(
          <HistorySection
          data={ele}
          key={index}
          />
        ))}
      </div>
    </section>
  )
}

export default WomenFooter