

export const LeftSection = ({id, image1, image2}) => {
return(
    <section className="flex  gap-14">
        <div className="flex flex-col gap-3">
            <div className="border-2 border-black"><img src={image1} alt="smallImage1" width={50} height={60}/></div>
            <div className="border-2 border-black"><img src={image2} alt="smallImage2" width={50} height={60} /></div>
        </div>
        <div>
            <img src={image1} alt="BigImage" width={400}/>
        </div>
    </section>
)
}

