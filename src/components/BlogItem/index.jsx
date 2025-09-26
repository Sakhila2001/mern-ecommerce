import React from "react";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg"
          alt="blog image"
          className="w-full transition-all group-hover:scale-105  group-hover:rotate-1"
        />
        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
          <IoMdTime className="text-[16px]" /> 2025-03-12
        </span>
      </div>
      <div className="info py-4">
        <h2 className="text-[15px] font-[600] text-black mb-1  lg:mb-3">
        <Link className="link" to="/">
            sustainable living through cutting-edge prefabricated homes
         </Link>
        </h2>
        <div class="mb-3 text-[14px] lg:text-[16px]">
          {/* <div>
            <ul>
              <li> */}
                Give2 lady of they such they sure it. Me contained
                explained my education. Vulgar...
              {/* </li>
            </ul>
          </div> */}
        </div>
        <Link className="link font-[500] text-[14px] flex items-center gap-1" to="/">
          Read More <IoIosArrowForward className="text-[16px]" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
