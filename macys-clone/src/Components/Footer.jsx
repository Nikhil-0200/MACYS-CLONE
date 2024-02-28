import { footerData } from "../Constants";
import { footerLast } from "../Constants";
import { creditCard } from "../assets/Images";
import {Link} from "react-router-dom"
import { facebook, insta, pinterest, twitter, yt } from "../assets/icons";
import { footerEnd } from "../Constants";

const Footer = () => {

  return (
    <section>
       <section className="bg-[#1F1F1F] w-full flex justify-between px-7 text-white font-macys-light">
      <div className="flex py-10 w-3/5 justify-start gap-32">
        {footerData.map((ele, index)=>(
          <div key={index} className="flex flex-col ">
            <h1 className="font-bold text-sm pb-5">{ele.title}</h1>

            {ele.link.map((footerName, index)=>(
              <p className="text-[12px] pb-4" key={index}>{footerName.name}</p>
            ))}
          </div>
        ))}
      </div>

      <div id="SideBar" className="w-[30%] flex flex-col gap-5">
        <div className="py-8 flex flex-col gap-4">
          <h1 className="font-bold text-sm">Be the first to know with our emails</h1>
          <p className="text-[12px]">If texts are more your style, we can send those too.</p>
          <button className="bg-black py-4 w-full rounded-lg">Sign Me Up</button>
        </div>

        <div className="border-t-[1px] border-b-[1px] py-8 flex flex-col gap-2">
          <h1 className="font-bold text-sm">Open A Macy's Card & Get 20% Off</h1>
          <div className="flex gap-3">
            <div>
              <img src={creditCard} alt="creditCardImage" width={200} height={100}/>
            </div>
            <div>
              <p className="text-[12px]">Today & tomorrow, * up to a total savings of $100 on your Macy's purchases over the 2 days.
*Subject to credit approval. Details</p>
            </div>
          </div>
          <Link className="text-[12px] underline" to="/">Apply now</Link>
        </div>

        <div className="py-3">
          <h1 className="font-bold text-sm pb-4">Connect With Us</h1>
          <div className="flex">
            <span>
              <img className="" src={facebook} alt="FacebookIcon"/>
            </span>
            <span>
              <img src={insta} alt="InstagramIcon"/>
            </span>
            <span>
              <img src={twitter} alt="TwitterIcon" />
            </span>
            <span>
              <img src={pinterest} alt="pinterestIcon" />
            </span>
            <span>
              <img src={yt} alt="yticon" />
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full bg-black flex flex-col gap-4 text-white">
      <div className="pt-10">
        {footerLast.map((ele, index)=>(
          <div className="flex flex-wrap items-center text-center w-[80%] m-auto justify-center gap-4" key={index}>{ele.links.map((data, index)=>(
          <p className="text-[12px] border-r-[1px] px-3 border-r-[#959499]" key={index}>{data.name}</p>
          ))}</div>
        ))}
      </div>

      <div className="text-center pb-10">
        <p className="text-[12px]  ">
        {footerEnd}
        </p>
      </div>
    </section>
    </section>
   
  )
}

export default Footer