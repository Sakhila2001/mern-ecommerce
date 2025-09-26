import React from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { BsWallet2 } from "react-icons/bs";
import { GrGift } from "react-icons/gr";
import { ImHeadphones } from "react-icons/im";


import "./style.css";

const Footer = () => {
	return (
		<footer className='py-6 bg-[#fafafa]'>
        <div className="container">
        <div className="flex items-center justify-center gap-2 py-3 pb-0 px-0  scrollableBox footerBoxWrap">
        <div className="col flex items-center justify-center flex-col w-[15%]">
        <LiaShippingFastSolid className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1'/>
        <h3 className="tet-[16px] font-[600] mt-3">Free Shipping</h3>
        <p className="text-[12px] font-[500]">For all Orders Over $100</p> 

        </div>

        <div className="col flex items-center justify-center flex-col w-[15%]">
        <LiaShippingFastSolid className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1'/>
        <h3 className="tet-[16px] font-[600] mt-3">Free Shipping</h3>
        <p className="text-[12px] font-[500]">For all Orders Over $100</p> 

        </div>

        <div className="col flex items-center justify-center flex-col w-[15%]">
        <BsWallet2 className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1'/>
        <h3 className="tet-[16px] font-[600] mt-3">Free Shipping</h3>
        <p className="text-[12px] font-[500]">For all Orders Over $100</p> 

        </div>

        <div className="col flex items-center justify-center flex-col w-[15%]">
        <GrGift className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1'/>
        <h3 className="tet-[16px] font-[600] mt-3">Free Shipping</h3>
        <p className="text-[12px] font-[500]">For all Orders Over $100</p> 

        </div>
        <div className="col flex items-center justify-center flex-col w-[15%]">
        <ImHeadphones className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1'/>
        <h3 className="tet-[16px] font-[600] mt-3">Free Shipping</h3>
        <p className="text-[12px] font-[500]">For all Orders Over $100</p> 

        </div>

        </div>
			
            </div>
		</footer>
	);
};

export default Footer;