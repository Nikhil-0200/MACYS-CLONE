import WomenSideBar from "./WomenSideBar"
import WomenMain from "./WomenMain"

const WomenHero = () => {
  return (
    <section className="px-6">
      <div className="font-macys-bold text-2xl">
        <h1>Women</h1>
      </div>

      <section className="flex justify-between">
        <WomenSideBar/>
        <WomenMain/>
      </section>
    </section>
  )
}

export default WomenHero