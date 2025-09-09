import React from 'react';
import '../../index.css'; 
import { Link } from 'react-router-dom';
import Search from '../Search';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  const helpPath = '/help-center';
  const orderTracking = '/order-tracking';
  const login = '/login';
  const register = '/register';

  return (
    <header className='bg-white'>
      <div className="top-strip mb-1 border-t-[1px] border-gray-300 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="w-[50%]">
              <p className="text-[13px] font-[500]">
                Get up to 15% off new season styles, limited time only
              </p>
            </div>
            <div className="flex items-center justify-end">
              <ul className='flex items-center gap-3'>
                <li className="list-none">
                  <Link to={helpPath} className="text-[12px] link font-[500] transition">
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link to={orderTracking} className="text-[12px] link font-[500] transition">
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header mt-2 pb-1 border-b-[1px] border-gray-300"> 
        <div className="container flex items-center justify-between">
          <div className='col1 w-[25%]'>
            <Link to="/" className="logo"><img src='/logo.jpg' alt="Logo"/></Link>
          </div>
          <div className='col2 w-[45%]'>
            <Search />
          </div>
          <div className='col3 w-[30%] flex items-center p-l'>
            <ul className='flex items-center justify-end gap-3'>
              <li className='list-none'>
                <Link to={login} className='text-[15px] font-[500] link transition'>Login</Link> | &nbsp;
                <Link to={register} className='text-[15px] font-[500] link transition'>Register</Link>
              </li>
              <li className='list-none'>
              <Tooltip title="Compare">

              <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                  <IoGitCompareOutline />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
</li>
<li className='list-none'>
<Tooltip title="Wishlist">

                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                  <FaRegHeart />
                  </StyledBadge>
                </IconButton>
</Tooltip>
              </li>
              <li className='list-none'>
              <Tooltip title="Cart">

                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <MdOutlineShoppingCart />
                  </StyledBadge>
                </IconButton>
</Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation/>
    </header>
  );
};

export default Header;
