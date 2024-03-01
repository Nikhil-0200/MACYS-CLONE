
const ShoppingToday = ({data}) => {
  return (
    <section>
        <div className="font-macys-bold text-3xl font-bold text-center py-20">
            <h1>{data.title}</h1>
        </div>
<div className="lg:flex lg:gap-6 grid grid-cols-2 sm:grid-cols-4 gap-5 max-sm:pb-16">
    {data.images.map((ele, index)=>(
         <div key={index} className="flex flex-1 flex-col items-center gap-3">
            <div>
                <img className="max-sm:w-[500px]" src={ele.img} alt="WomenClothesImages" />
            </div>
            <h1 className="font-macys-medium text-sm">{ele.name}</h1>
        </div>   
        ))}
</div>
        
    </section>
  )
}

export default ShoppingToday