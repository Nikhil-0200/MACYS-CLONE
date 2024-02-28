import { heroSection } from "../../assets/Images"
import { MobileHeroSection } from "../../assets/Images"

const HeroSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="py-16 px-5 max-lg:hidden">
        <img src={heroSection} alt="HeroSectionImage" />
    </div>

    <div className="lg:hidden py-10 sm:py-16 sm:px-5">
      <img className="scale-x-150" src={MobileHeroSection} alt="MobileHeroSection"/>
    </div>
    </section>
    
  )
}

export default HeroSection