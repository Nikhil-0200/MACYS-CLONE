
const MediumSection = ({data, index}) => {
  return (
    <section>
        {data.data.map((ele, index)=>(
            <div key={index} >
                <img  src={ele.img} alt="MediumImage" />
            </div>
        ))}
    </section>
  )
}

export default MediumSection