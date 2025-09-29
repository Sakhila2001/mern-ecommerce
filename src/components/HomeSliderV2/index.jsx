import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Button from "@mui/material/Button";

const HomeBannerV2 = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="homeSlider2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src="https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg" />
            <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
              <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">
                Buy New Trend Women Black Cotton Blend Top | top for women |
                women top...
              </h2>
              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-4 relative -right-[100%] opacity-0">
                Starting At Only
                <span className="text-primary text-[30px] font-[700]">
                  रू 1,500.00
                </span>
              </h3>
              <div className="w-full relative -right-[100%] opacity-0 btn_">
                <Button className="btn-org">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" />
            <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
              <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">
                Apple iPhone 13 128 GB, Pink
              </h2>
              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-4 relative -right-[100%] opacity-0">
                Starting At Only
                <span className="text-primary text-[30px] font-[700]">
                  रू 35,500.00
                </span>
              </h3>
              <div className="w-full relative -right-[100%] opacity-0 btn_">
                <Button className="btn-org">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeBannerV2;
