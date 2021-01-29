import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import Slide1 from './img/bogotacasas.jpg';
import Slide2 from './img/bogotaluces.jpg';
import Slide3 from './img/bogotayAndes.jpg';


const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <section className="slider">
            <Slider {...settings}>
                <div >
                    <img src={Slide1} alt="Slide 1" className="slider_img" />
                </div>
                <div>
                    <img src={Slide2} alt="Slide 1" className="slider_img" />
                </div>
                <div>
                    <img src={Slide3} alt="Slide 1" className="slider_img" />
                </div>
                <div>
                    <img src={Slide3} alt="Slide 1" className="slider_img" />
                </div>
                <div>
                    <img src={Slide3} alt="Slide 1" className="slider_img" />
                </div>
                <div>
                    <img src={Slide3} alt="Slide 1" className="slider_img" />
                </div>
                <div>
                    <img src={Slide3} alt="Slide 1" className="slider_img" />
                </div>
                <div>
                    <img src={Slide3} alt="Slide 1" className="slider_img" />
                </div>
                <div>
                    <img src={Slide3} alt="Slide 1" className="slider_img" />
                </div>
                <div>
                    <img src={Slide3} alt="Slide 1" className="slider_img" />
                </div>
            </Slider>
        </section>
    )
}

export default HomeSlider;