import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'
function Login () {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
      
        cssEase: "linear"
      };
      return (
        <div className="w-100%">
          <Slider {...settings}>
            <div>
            <img src={banner1} className="w-[calc(100vw-230px]"></img>
            </div>
            <div>
            <img src={banner2} className="w-[calc(100vw-230px]"></img>
            </div>
          
          </Slider>
        </div>
      );
}
export default Login