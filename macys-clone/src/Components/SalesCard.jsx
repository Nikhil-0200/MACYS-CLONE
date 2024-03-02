import { Link } from "react-router-dom"

const SalesCard = ({productName, price, topHeading, image1, id}) => {
    return(
        <section className="px-3 py-10">
            <div>
                <img src={image1} alt="ProductFirstImage" />
            </div>

            <div className="font-macys-medium text-sm flex flex-1 flex-col justify-between py-3">
                <h1 >{topHeading}</h1>
                <Link to={`/singlePageSection/${productName}`}><h1 className="pt-1">{productName}</h1></Link>
                <h1 className="font-extrabold pt-4">{price}</h1>
            </div>
        </section>
    )   
}

export default SalesCard