import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsWallet2 } from "react-icons/bs";
import { GrGift } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { PiKeyReturn } from "react-icons/pi";
import { IoChatboxOutline } from "react-icons/io5";

import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { FaFacebookF } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";
import { FaPinterestP } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-[#fafafa]">
        <div className="container">
          <div className="flex items-center justify-center gap-2 py-3 lg:py-8 pb-0 lg:pb-8 px-0 lg:px-5 scrollableBox footerBoxWrap">
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="tet-[16px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[12px] font-[500]">For all Orders Over $100</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <PiKeyReturn className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="tet-[16px] font-[600] mt-3">30 Days Returns</h3>
              <p className="text-[12px] font-[500]">For an Exchange Product</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="tet-[16px] font-[600] mt-3">Secured Payment</h3>
              <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <GrGift className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="tet-[16px] font-[600] mt-3">Special Gifts</h3>
              <p className="text-[12px] font-[500]">Our First Product Order</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="tet-[16px] font-[600] mt-3">Support 24/7</h3>
              <p className="text-[12px] font-[500]">Contact us Anytime</p>
            </div>
          </div>
          <br />
          <hr className="border-[rgba(0,0,0,0.1)]" />
          <div
            className="footer flex px-3 lg:px-0 flex-col lg:flex-row py-8
        "
          >
            <div className="part1 w-full lg:w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[18px] font-[600] mb-4">Contact us</h2>
              <p className="text-[13px] font-[400] pb-4">
                Classyshop - Mega Super Store
                <br />
                507-Union Trade Centre France
              </p>
              <Link
                className="link text-[13px]"
                to="mailto: sales@classyshop.com"
              >
                sales@classyshop.com
              </Link>
              <span className="text-[20px] font-[600] block w-full mt-3 mb-5 text-primary">
                +123 456 789
              </span>
              <div className="flex items-center gap-2">
                <IoChatboxOutline className="text-[40px] text-primary" />
                <span className="TEXT-[16px] font-[600]">
                  Online Chat
                  <br />
                  Get Expert Help
                </span>
              </div>
            </div>
            <div className="part2  w-full lg:w-[40%] flex pl-0 lg:pl-8 mt-5 lg:mt-0">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Prices drop
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      New products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Best sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Contact us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Our company</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Terms and conditions of use
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      About us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Secure payment
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part2  w-full lg:w-[35%] flex pl-0 lg:pl-8 flex-col pr-8 mt-5 lg:mt-0">
              <h2 className="text-[18px] font-[600] mb-2 lg:mb-4">
                Subscribe to newsletter
              </h2>
              <p className="text-[13px]">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>
              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]"
                  placeholder="Your Email Address"
                />
                <Button className="btn-org">SUBSCRIBE</Button>
                <br />
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] pt-3 pb-[100px] lg:pb-3 bg-white">
        <div className="container flex items-center justify-between flex-col lg:flex-row gap-4 lg:gap-0">
          <ul className="flex items-center gap-3">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaFacebookF className="text-[17px] group-hover:text-white" />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <TbBrandYoutube className="text-[17px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaPinterestP className="text-[17px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <LuInstagram className="text-[17px] group-hover:text-white" />
              </Link>
            </li>
          </ul>
          <p class="text-[13px] text-center mb-0">
            © 2024 - Ecommerce Template
          </p>
          <div class="flex items-center gap-1">
            <img
              src="https://ecommerce-frontend-view.netlify.app/carte_bleue.png"
              alt="image"
            />

            <img
              src="https://ecommerce-frontend-view.netlify.app/visa.png"
              alt="image"
            />
            <img
              src="https://ecommerce-frontend-view.netlify.app/master_card.png"
              alt="image"
            />

            <img
              src="https://ecommerce-frontend-view.netlify.app/american_express.png"
              alt="image"
            />
            <img
              src="https://ecommerce-frontend-view.netlify.app/paypal.png"
              alt="image"
            />
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Footer;
