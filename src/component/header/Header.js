import React from 'react';
import './Header.scss';
import Menu from '../menu/Menu';
import { Link } from 'react-router-dom';

const HeaderTop = ()=>{
  return(
    <div className='headerTop'>
        <div className='mx_width'>
          <div className="leftSection">
            <span>Order Tracking</span>
          </div>
          <div className="rightSection">
            <span>Contact Us</span>
            <span>Contact Us</span>
            <span>Account</span>
          </div>
        </div>
    </div>
  );
};
const HeaderMiddle=()=>{
  return(
    <div className='headerMiddle'>
      <div className='mx_width'>
        <div className="email">info@example.com</div>
        <Link className="logo" to="/">
          <img src={process.env.PUBLIC_URL + '/images/logo.svg'} />
        </Link>
        <div className="cart_info">Shopping Cart</div>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <>        
      <HeaderTop/>
      <HeaderMiddle/>
      <Menu/>
    </>
  )
}

export default Header