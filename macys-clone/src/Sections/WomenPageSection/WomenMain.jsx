import { WomenHeroFirstBanner } from "../../assets/Images";
import ShoppingToday from "./ShoppingToday";
import { ShoppingTodayData } from "../../Constants";
import { BigImages } from "../../Constants";
import BigRowSection from "./BigRowSection";
import MediumSection from "./MediumSection";
import { MediumImages } from "../../Constants";
import { RedBanner } from "../../assets/Images";
import { BransdsLove } from "../../Constants";
import BrandsLoveSection from "./BrandsLoveSection";
import { Even } from "../../Constants";
import EvenSection from "./EvenSection";
import TrendingSection from "./TrendingSection";
import { Trending } from "../../Constants";


const WomenMain = () => {
  return (
    <section className="w-[75%] max-lg:w-[100%]">
      <div>
        <img src={WomenHeroFirstBanner} alt="WomenHeroFirstBanner" />
      </div>

      <div>
        {ShoppingTodayData.map((ele, index)=>(
          <ShoppingToday
          data={ele}
          key={index}
          />
        ))}
        
      </div>

      <div className="sm:flex sm:gap-6">
        {BigImages.map((ele,index)=>(
          <BigRowSection
          key={index}
          data={ele}
        />
        ))}
        
      </div>

      <div className="sm:flex sm:gap-6 grid grid-cols-2 gap-4">
        {MediumImages.map((ele, index)=>(
          <MediumSection
          data={ele}
          key={index}
          />
        ))}
        
      </div>

      <div className="sm:py-14 py-8">
        <img src={RedBanner} alt="RedBannerImage"/>
      </div>

      <div id="BransLove">
        {BransdsLove.map((ele, index)=>(
          <BrandsLoveSection
          data={ele}
          key={index}
          />
        ))}
      </div>

      <div id="Even">
        {Even.map((ele, index)=>(
          <EvenSection
          key={index}
          data={ele}
          />
        ))}
      </div>

      <div id="Trending">
        {Trending.map((ele, index)=>(
          <TrendingSection
          data={ele}
          key={index}
          />
        ))}
      </div>

    </section>
  )
}

export default WomenMain