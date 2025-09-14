import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <HomeSlider />
      <HomeCatSlider />

      {/* Popular Products Section */}
      <section className="bg-white py-3 lg:py-8">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="leftSec w-full">
              <h2 className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-[600]">
                Popular Products
              </h2>
              <p className="text-[12px] sm:text-[14px] md:text-[13px] lg:text-[14px] font-[400] mt-0 mb-0">
                Do not miss the current offers until the end of March.
              </p>
            </div>
            <div className="rightSec w-[60%] ">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jwellery" />
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Free Shipping + Ads Banner */}
      <section className="py-0 lg:py-4 pt-0 lg:pt-8 pb-0 bg-white">
        <div className="container">
          <div className="freeShipping w-full md:w-[80%] m-auto py-4 p-4 border-2 border-[#ff5252] flex items-center justify-center lg:justify-between flex-col lg:flex-row rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[30px] lg:text-[50px]" />
              <span className="text-[16px] lg:text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>
            <div className="col2">
              <p className="mb-0 mt-0 font-[500] text-center">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>
            <p className="font-bold text-[20px] lg:text-[25px]">-Only $200*</p>
          </div>

          {/* Ads Banner Slider */}
          <AdsBannerSlider items={4} />
        </div>
      </section>
    </div>
  );
};

export default Home;
