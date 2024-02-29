import Hero from "../Sections/LogoPageSection/Hero";
import HeroSection from "../Sections/LogoPageSection/HeroSection";
import HeroSectionBorder from "../Sections/LogoPageSection/HeroSectionBorder";
import Information from "../Sections/LogoPageSection/Information";
import { InformationData } from "../Constants";

const LogoPage = () => {
  return (
    <section className="max-container">
      <Hero/>
      <HeroSection />
      <HeroSectionBorder />
      <section className="grid max-lg:gap-20 lg:grid-cols-4 sm:px-10 py-10 sm:py-28">
        {InformationData.map((ele, index) => (
          <Information {...ele} key={index} />
        ))}
      </section>
    </section>
  );
};

export default LogoPage;
