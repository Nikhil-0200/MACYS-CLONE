

const BrandsLoveSection = ({data, key}) => {
  return (
    <section>
        <div>
            <h1 className="text-[40px] sm:text-[50px] font-extrabold font-macys-bold sm:pb-14 pb-8">{data.title}</h1>
        </div>

        <div className="sm:flex sm:gap-6 grid grid-cols-2 gap-4">
            {data.Love.map((ele, index)=>(
                <div key={index} >
                    <img src={ele.img} alt="LoveImages"/>
                </div>
            ))}
        </div>
    </section>
  )
}

export default BrandsLoveSection