import { Link } from "react-router-dom";
import { indiaFlag } from "../assets/Images/index";
import { macyLogo } from "../assets/icons";
import { cart } from "../assets/icons";
import { search } from "../assets/icons";
import NavAccordion from "../Sections/NavAccordion";

const NavBar = () => {
  return (
    <nav className="font-macys-light lg:border-b-[1.5px] border-[#c8c8c8] max-container z-10">
      <div className="text-[12px] flex justify-between items-center border-b-[1.5px] border-[#c8c8c8] py-4 px-7 max-lg:justify-center">
        <div>
          <p className="text-center">
            Sign up for emails & get an extra 25% off! Exclusions apply.{" "}
            <Link>Sign Up</Link>
          </p>
        </div>
        <div className="flex justify-center max-lg:hidden">
          <Link className="border-r-[1px] border-black border-solid px-3">
            Order Tracking
          </Link>
          <Link className="border-r-[1px] border-black border-solid px-3">
            Stores
          </Link>
          <Link className="border-r-[1px] border-black border-solid px-3">
            Gift Registry
          </Link>
          <Link className="px-2 flex gap-2 items-center">
            Shipping To{" "}
            <span>
              <img src={indiaFlag} alt="IndianFlag" />
            </span>
          </Link>
        </div>
      </div>
      <section className="flex justify-between  px-7 py-7 relative">
        <div className="flex gap-5 max-lg:pb-8">
          <div className="lg:hidden">
          <NavAccordion/>
          </div>
          <Link to="/">
            <img src={macyLogo} alt="MacysLogo" />
          </Link>
        </div>
        <div className="border-2 w-[50%] rounded-full bg-[#F2F2F2] px-2 py-1 flex gap-2 max-lg:absolute max-lg:bottom-0 lg:right-1/2 lg:left-1/2 max-lg:w-[90%] max-sm:left-3">
          <img src={search} alt="searchIcon" />
          <input
            className="w-full bg-transparent outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div>
          <Link to="/cart">
            <img src={cart} alt="cartImage" />
          </Link>
        </div>
      </section>
      <div>
        <ul className="px-7 py-2 pb-3 flex justify-between font-macys-bold text-sm max-lg:hidden">
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/kids">Kids & Baby</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/handbags">Handbags & Accessories</Link>
          </li>
          <li>
            <Link to="/jewelry">Jewelry</Link>
          </li>
          <li>
            <Link to="/sale">Sale</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
