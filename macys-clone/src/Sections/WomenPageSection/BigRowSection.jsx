
const BigRowSection = ({data}) => {
  return (
    <section>
        <div className="flex justify-center flex-1 sm:pt-20">
            {data.data.map((ele, index)=>(
               <div key={index} >
                <img src={ele.img} alt="BigImage" />
            </div> 
            ))}
        </div>
    </section>
  )
}

export default BigRowSection