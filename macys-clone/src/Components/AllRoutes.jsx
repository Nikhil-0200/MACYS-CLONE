import Payment from "../Pages/Payment";
import {
  Cart,
  Handbags,
  Jewelry,
  Kids,
  LogoPage,
  Men,
  Sale,
  Women,
  SinglePageSection,
} from "../Pages/index";
import {Route, Routes} from "react-router-dom"



const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LogoPage/>}/>
            <Route path="/women" element={<Women/>}/>
            <Route path="/men" element={<Men/>}/>
            <Route path="/kids" element={<Kids/>}/>
            <Route path="/handbags" element={<Handbags/>}/>
            <Route path="/jewelry" element={<Jewelry/>}/>
            <Route path="/sale" element={<Sale/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/singlePageSection/:productName" element={<SinglePageSection/>}/>
            <Route path="/payment" element={<Payment/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes

