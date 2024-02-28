import {
  Cart,
  Handbags,
  Home,
  Jewelry,
  Kids,
  LogoPage,
  Men,
  Sale,
  Women,
  Shoes,
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
            <Route path="/home" element={<Home/>}/>
            <Route path="/shoes" element={<Shoes/>}/>
            <Route path="/handbags" element={<Handbags/>}/>
            <Route path="/jewelry" element={<Jewelry/>}/>
            <Route path="/sale" element={<Sale/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes

