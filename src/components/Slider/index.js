import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderAPI } from "../../Ultis/Apis"
import axios from "axios";

const SimpleSlider = () => {
  const [silderDetails, setSilderDetails] = useState(null)

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(sliderAPI);
        const data = response.data
        console.log(data);
        setSilderDetails(data)
      } catch (error) {
        console.error(error);
      }
    }
    getUser()
  }, [])


  const settings = {
    dots: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (<div>
    <Slider {...settings} className="Sliders">
      {silderDetails?.map(({ img, alt,id}) => <div key={id}>
        <img src={img} alt={alt} />
      </div>)}
    </Slider>
  </div>);
}

export default SimpleSlider;
