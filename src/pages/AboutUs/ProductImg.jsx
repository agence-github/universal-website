import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import abtImg1 from "/assets/abt_img1.webp";
import abtImg2 from "/assets/abt_img2.webp";
import abtImg3 from "/assets/abt_img3.webp";
import abtImg4 from "/assets/abt_img4.webp";
import abtImg5 from "/assets/abt_img5.webp";

const ProductImg = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
  };

  return (
    <section className="lg:py-12 py-8">
      <Fade>
        <div className="text-[#C49E5F] lg:text-6xl md:text-4xl text-4xl cinzel-font lg:mb-10 lg:mt-8 uppercase text-center">
          lorem ipsum dolo
          <p className="pt-2">amet consecture</p>
        </div>
      </Fade>

      <div className="my-16 hidden lg:flex gap-6">
        <Slide>
          <div>
            <img
              src={abtImg5}
              alt="img"
              className="h-[200px] relative z-30 top-52"
            />
          </div>
        </Slide>

        <Slide direction="right">
          <div>
            <img
              src={abtImg4}
              alt="img"
              className="h-[320px] relative right-16"
            />
          </div>
        </Slide>
        <Zoom>
          <div>
            <img src={abtImg1} alt="img" className="mx-auto" />
          </div>
        </Zoom>
        <Slide>
          <div>
            <img
              src={abtImg3}
              alt="img"
              className="h-[200px] relative left-20"
            />
          </div>
        </Slide>
        <Slide direction="right">
          <div>
            <img
              src={abtImg2}
              alt="img"
              className="h-[320px] relative z-30 top-40"
            />
          </div>
        </Slide>
      </div>

      <div className="my-16 lg:hidden">
        <Slider {...sliderSettings}>
          <div className="px-4">
            <img src={abtImg5} alt="img" className="mx-auto h-[300px] object-cover" />
          </div>
          <div className="px-4">
            <img src={abtImg4} alt="img" className="mx-auto h-[300px] object-cover" />
          </div>
          <div className="px-4">
            <img src={abtImg1} alt="img" className="mx-auto h-[300px] object-cover" />
          </div>
          <div className="px-4">
            <img src={abtImg3} alt="img" className="mx-auto h-[300px] object-cover" />
          </div>
          <div className="px-4">
            <img src={abtImg2} alt="img" className="mx-auto h-[300px] object-cover" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ProductImg;