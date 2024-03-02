
const EvenSection = ({data}) => {
  return (
    <section className="border-b-[1px]">
        <div>
            <h1 className="text-[40px] sm:text-[50px] font-macys-bold pb-8 sm:pb-14">{data.title}</h1>
        </div>

        <div className="sm:flex sm:gap-6 grid grid-cols-2 gap-4">
            {data.Data.map((ele, index)=>(
                <div key={index}>
                    <img src={ele.img} alt="" />
                </div>
            ))}
        </div>
    </section>
  )
}

export default EvenSection