import { useState } from "react"


export const LeftSection = ({id, image1, image2}) => {
    const [image, setImage] = useState(image1)
return(
    <section className="flex gap-14 pb-10">
        <div className="flex flex-col gap-3 max-sm:hidden">
            <div onClick={()=> setImage(image1)} className={`border-[1px] border-black ${image === image1 ? "border-[2px] border-black":""}`}><img src={image1} alt="smallImage1" width={50} height={60}/></div>
            <div onClick={()=> setImage(image2)} className={`border-[1px] border-black ${image === image2 ? "border-[2px] border-black": ""}`}><img src={image2} alt="smallImage2" width={50} height={60} /></div>
        </div>
        <div className="flex max-sm:m-auto">
            <img src={image} alt="BigImage" width={400}/>
        </div>
    </section>
)
}

