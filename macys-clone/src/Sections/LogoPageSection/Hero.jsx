import { heroBig } from "../../assets/Images"
import { MobileHero } from "../../assets/Images"
const Hero = () => {
  return (
    <section className="overflow-hidden">
    <div className=" px-5 max-lg:pt-4 ">
        <img className="max-lg:hidden" src={heroBig} alt="HeroBigImage" />
    </div>

    <div className="lg:hidden">
      <img className=" scale-x-150 px-5 sm:px-10 object-cover" src={MobileHero} alt="MobileHero"/>
    </div>
    </section>
    

  )
}

export default Hero