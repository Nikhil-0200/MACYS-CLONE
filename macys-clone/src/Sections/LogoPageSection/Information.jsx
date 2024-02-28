import {Link} from "react-router-dom"

const Information = ({icon, label, link, subLabel, text}) => {
  return (
    <section>
        <div className=" max-lg:gap-8 lg:h-[250px] lg:border-r-[1.5px] px-5 flex flex-col justify-evenly">
            <img className="lg:pb-2 w-[40px] sm:w-[50px]" src={icon} alt="MailIcon"  width={25} height={25}/>
            <div className="lg:pb-2 lg:h-[125px]">
            <p className="font-macys-medium text-2xl sm:text-4xl lg:text-xl">{label}</p>
            <p className="font-macys-bold text-2xl sm:text-4xl lg:text-xl font-black pb-2">{subLabel}</p>
            <p className="font-macys-medium text-xl sm:text-3xl lg:text-sm">{text}</p>
            </div>
            
            <Link to="/" className=" max-lg:text-3xl font-macys-medium text-sm underline">{link}</Link>
        </div>
    </section>
  )
}

export default Information