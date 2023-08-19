import React from 'react';
import './Hero.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FiChevronRight, FiChevronLeft} from "react-icons/fi";
import { IconContext } from "react-icons";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="nextArrow" onClick={onClick}>
      <IconContext.Provider value={{className: "icon" }}>
        <FiChevronRight />
      </IconContext.Provider>      
    </div>
  );
}
function PrevArrow(props) {
  const {onClick } = props;
  return (
    <div className="prevArrow" onClick={onClick}>
      <IconContext.Provider value={{className: "icon" }}>
        <FiChevronLeft />
      </IconContext.Provider>
    </div>
  );
}

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className="slider_container">
     
      <Slider {...settings}>
        <div className="slider_item">
          <img src={process.env.PUBLIC_URL + 'images/main_slider/1.jpg'} alt="slider_1"/>
        </div>
        <div className="slider_item">
          <img src={process.env.PUBLIC_URL + 'images/main_slider/2.jpg'} alt="slider_2"/>
        </div>
        <div className="slider_item">
          <img src={process.env.PUBLIC_URL + 'images/main_slider/3.jpg'} alt="slider_3"/>
        </div>
      </Slider>
    </div>
  )
}

export default Hero