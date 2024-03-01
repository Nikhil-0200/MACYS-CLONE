import WomenSideBar from "./WomenSideBar"
import WomenMain from "./WomenMain"
import WomenFooter from "./WomenFooter"

const WomenHero = () => {
  return (
    <section className="px-6">
      <div className="font-macys-bold text-2xl max-lg:pt-6">
        <h1>Women</h1>
      </div>

      <section className="flex justify-between">
        <WomenSideBar/>
        <WomenMain/>
      </section>
      <WomenFooter/>
    </section>
  )
}

export default WomenHero