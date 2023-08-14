import React from 'react';
import './Header.scss';
import Menu from '../menu/Menu';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { AiOutlineShoppingCart, AiOutlineMail } from "react-icons/ai";

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
        <div className="email">
          <div className="icon_container">
              <IconContext.Provider value={{className: "icon" }}>
                <AiOutlineMail />
              </IconContext.Provider>              
            </div>
            <span>info@example.com</span>
          </div>
        <Link className="logo" to="/">
          <img src={process.env.PUBLIC_URL + '/images/logo.svg'} />
        </Link>
        <div className="cart_info">
            <div className="icon_container">
              <IconContext.Provider value={{className: "icon" }}>
                <AiOutlineShoppingCart />
              </IconContext.Provider>
              <span>1</span>
            </div>
        </div>
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