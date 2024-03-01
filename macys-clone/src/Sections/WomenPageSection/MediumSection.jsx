
const MediumSection = ({data, key}) => {
  return (
    <section>
        {data.data.map((ele)=>(
            <div key={key} >
                <img src={ele.img} alt="MediumImage" />
            </div>
        ))}
    </section>
  )
}

export default MediumSection