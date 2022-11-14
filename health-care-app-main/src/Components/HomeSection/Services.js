import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    className: "service-carousel",
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <section>
      <h1>Services</h1>
      <div className="service-container">
        <Slider {...settings}>
          <div className="service-card">
            <img
              className="service-carousel-img"
              src="https://c4.wallpaperflare.com/wallpaper/637/485/146/bakelite-dial-old-phone-wallpaper-preview.jpg"
              alt="im"
            />
            <p> Consultations </p>
          </div>

          <div className="service-card">
            <img
              className="service-carousel-img"
              src="https://media.istockphoto.com/photos/flying-pill-tablet-capsule-levitation-medicine-medical-treatment-for-picture-id1311641109?b=1&k=20&m=1311641109&s=170667a&w=0&h=xvma5EH0cpLCXce26Ti3Q4iCBhYDIxF0hge2oALKn2M="
              alt="im"
            />

            <p>Medicines</p>
          </div>
          <div className="service-card">
            <img
              className="service-carousel-img"
              src="https://img.freepik.com/free-photo/hand-with-protective-gloves-holding-blood-samples-covid-test_23-2148958363.jpg?w=2000"
              alt="im"
            />
            <p> Laboratories</p>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Services;
