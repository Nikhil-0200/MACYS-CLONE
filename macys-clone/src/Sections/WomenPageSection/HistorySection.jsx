import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const HistorySection = ({data}) => {
    const isMobile = useMediaQuery({query: `(max-width: 640px)`})
    const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1023 });
      const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: isMobile ? 2 : isTablet ? 3 : 5,
          slidesToScroll: 1,
        };
  return (
    <section>
        <div >
            <h1 className="font-macys-medium text-xl font-extrabold">
                {data.title}
            </h1>
        </div>

        <div>
        <Slider {...settings}>
            {data.Data.map((ele, index)=>(
                <div key={index}>
                    <div>
                        <img src={ele.img} alt="Images" />
                    </div>

                    <div className="font-macys-medium text-sm flex flex-1 flex-col justify-between">
                        <h1>{ele.name1}</h1>
                        <h1 className="h-[70px] overflow-auto overflow-ellipsis">{ele.name2}</h1>
                        <h1 className="font-extrabold">USD {ele.price}</h1>
                    </div>
                </div>
                
            ))}
            </Slider>
        </div>
    </section>
  )
}

export default HistorySection