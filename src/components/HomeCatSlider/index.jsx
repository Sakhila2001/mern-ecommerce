import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider  pt-0 lg:pt-4 py-4 lg:py-8">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png"
                  className="w-[40px] lg:w-[60px] transition-all"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Fashion
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
                  className="w-[40px] lg:w-[60px] transition-all"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Electronics
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png"
                  className="w-[40px] lg:w-[60px] transition-all"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Bags
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
                  className="w-[40px] lg:w-[60px] transition-all"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Footwear
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661077633_gro.png"
                  className="w-[40px] lg:w-[60px] transition-all"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Grocerys
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png"
                  className="w-[40px] lg:w-[60px] transition-all"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Beauty
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661105893_well.png"
                  className="w-[40px] lg:w-[60px] transition-all"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Wellness
                </h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1749273446706_jw.png"
                  className="w-[40px] lg:w-[60px] transition-all"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Jwellery
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
