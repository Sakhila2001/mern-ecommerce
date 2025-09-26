import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
// import { Button } from "@mui/material/Button";
import Button from "@mui/material/Button";

import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";

const ProductItem = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
      <div className="group imgWrapper w-[100%]  overflow-hidden  rounded-md rounded-bl-none rounded-br-none relative">
        <Link to="/">
          <div class="img h-[200px] overflow-hidden">
            <img
              src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg"
              class="w-full"
            />

            <img
              src="https://serviceapi.spicezgold.com/download/1753722939207_5107b7b1-ba6d-473c-9195-8576a6a0a9611749366193848-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-3.jpg"
              class="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            />

            <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
              10%
            </span>

            <div className="actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
              <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252] hover:text-white group">
                <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
              </Button>

              <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252] hover:text-white group">
                <IoGitCompareOutline className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
              </Button>
              <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252] hover:text-white group">
                <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
              </Button>
            </div>
          </div>
        </Link>
      </div>
      <div class="info p-3 py-5 relative pb-[50px] h-[190px]">
        <h6 class="text-[13px] !font-[400]">
          <Link to="/" className="link transition-all">
            Flying Machine
          </Link>
        </h6>
        <h3 class="text-[12px] lg:text-[13px] title mt-1 font-[500] mb-1 text-[#000]">
          {/* <a
            class="link transition-all"
            href="/product/6887b024228db479bba3d256"
            data-discover="true"
          > */}
          <Link to="/" className="link transition-all">
            Women Wide Leg High-Rise ...
          </Link>
          {/* </a> */}
        </h3>

        <Rating name="size-small" defaultValue={5} size="small" readOnly />
        <div className="flex items-center gap-4 justify-between">
          <span className="oldPrice line-through text-gray-500 text-[12px] lg:text-[14px] font-[500] ">
            $58.00
          </span>
          <span className="price text-primary text-[12px] lg:text-[14px]  font-[600]">
            $58.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
