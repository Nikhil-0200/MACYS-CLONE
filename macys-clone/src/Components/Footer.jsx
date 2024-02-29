import { footerData } from "../Constants";
import { footerLast } from "../Constants";
import { creditCard } from "../assets/Images";
import {Link} from "react-router-dom"
import { facebook, insta, pinterest, twitter, yt } from "../assets/icons";
import { footerEnd } from "../Constants";
import { appStore, googleStore } from "../assets/icons";
import FooterAccordion from "../Sections/LogoPageSection/FooterAccordion";

const Footer = () => {

  return (
    <section>
       <section className="bg-[#1F1F1F] w-full lg:flex lg:justify-between px-7 text-white font-macys-light">
      <div className="flex max-lg:hidden py-10 lg:w-3/5 lg:justify-start lg:gap-32">
        {footerData.map((ele, index)=>(
          <div key={index} className="flex flex-col ">
            <h1 className="font-bold text-sm pb-5">{ele.title}</h1>

            {ele.link.map((footerName, index)=>(
              <p className="text-[12px] pb-4" key={index}>{footerName.name}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="lg:hidden pt-10">
        
        {footerData.map((ele, index)=>(
          <FooterAccordion
          data={ele}
          key={index}
          />
        ))}
      </div>



      <div id="SideBar" className=" lg:w-[30%] flex flex-col gap-1 lg:gap-5">
        <div className="py-8 flex flex-col gap-4">
          <h1 className="font-bold text-sm">Be the first to know with our emails</h1>
          <p className="text-[12px]">If texts are more your style, we can send those too.</p>
          <button className="bg-black py-4 w-full rounded-lg">Sign Me Up</button>
        </div>

        <div className="border-t-[1px] border-b-[1px] py-8 flex flex-col gap-2">
          <h1 className="font-bold text-sm">Open A Macy's Card & Get 20% Off</h1>
          <div className="flex gap-3 items-center">
            <div>
              <img className=" w-22 lg:w-48" src={creditCard} alt="creditCardImage" width={100} height={100}/>
            </div>
            <div>
              <p className="text-[12px] max-lg:w-3/4">Today & tomorrow, * up to a total savings of $100 on your Macy's purchases over the 2 days.
*Subject to credit approval. Details</p>
            </div>
          </div>
          <Link className="text-[12px] underline" to="/">Apply now</Link>
        </div>

        <div className="py-8 max-lg:border-b-[1px]">
          <h1 className="font-bold text-sm pb-4">Connect With Us</h1>
          <div className="flex gap-3">
            <span>
              <img className="filter brightness-0 invert" src={facebook} alt="FacebookIcon"/>
            </span>
            <span>
              <img className="filter brightness-0 invert" src={insta} alt="InstagramIcon"/>
            </span>
            <span>
              <img className="filter brightness-0 invert" src={twitter} alt="TwitterIcon" />
            </span>
            <span>
              <img className="filter brightness-0 invert" src={pinterest} alt="pinterestIcon" />
            </span>
            <span>
              <img className="filter brightness-0 invert" src={yt} alt="yticon" />
            </span>
          </div>
        </div>
      </div>

      <div className=" lg:hidden flex flex-col py-8">
      <h1 className="font-bold text-sm pb-4">Download the Macy's App</h1>

      <div className="grid grid-cols-2 gap-4 w-[100%]">
        <img src={appStore} alt="AppStore" />
        <img src={googleStore} alt="GoogleStore" />
      </div>
      </div>
    </section>

    <section className="w-full bg-black flex flex-col justify-between gap-2 text-white">
      <div className="pt-10">
        {footerLast.map((ele, index)=>(
          <div className="flex flex-wrap items-center text-center lg:w-[80%] m-auto justify-center gap-4" key={index}>{ele.links.map((data, index)=>(
          <p className="text-[12px] border-r-[1px] px-3 border-r-[#959499]" key={index}>{data.name}</p>
          ))}</div>
        ))}
      </div>

      <div className="text-center py-4 max-lg:px-3">
        <p className="text-[12px]  ">
        {footerEnd}
        </p>
      </div>
    </section>
    </section>
   
  )
}

export default Footer