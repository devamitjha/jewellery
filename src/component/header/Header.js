import React from 'react';
import './Header.scss';
import Menu from '../menu/Menu';
import Search from '../search/Search';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMapPin , FiHeadphones, FiUser, FiHeart} from "react-icons/fi";

const HeaderTop = ()=>{
  return(
    <div className='headerTop'>
        <div className='mx_width'>
          <div className="offer_seciton">
            <span>We offer safe and secure shipping.</span>
          </div>
        </div>
    </div>
  );
};
const HeaderMiddle=()=>{
  return(
    <div className='headerMiddle'>
      <div className='mx_width'>   
        <div className="itel_left">
          <Link className="logo" to="/">
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} />
          </Link>
          <Search/>
        </div>     
        <div className="item_right">
          <div className="offers_contact">
              <div className="icon_container">
                <span className="icon">
                  <img src={process.env.PUBLIC_URL + '/images/icons/discount.svg'} />                 
                </span>
                <span className="title">Offers</span>
              </div>
              <div className="icon_container">
                  <span className="icon_wrapper"> 
                    <FiMapPin />
                  </span>  
                <span className="title">Find a Store</span>            
              </div>
              <div className="icon_container">
                <span className="icon_wrapper"> 
                  <FiHeadphones />
                </span>
                <span className="title">Contact Us</span>
              </div>
          </div>
          <div className="profile_cart">
            <div className="icon_container">
                <span className="icon_wrapper"> 
                  <FiUser />
                </span>
                <span className="title">Profile</span>
              </div>
              <div className="icon_container relative_icon">
                <span className="icon_wrapper"> 
                  <FiHeart />
                </span>
                <span className="title">Wishlist</span>
                <span className="total_item">1</span>
              </div>
              <div className="icon_container relative_icon">
                <span className="icon_wrapper"> 
                  <AiOutlineShoppingCart />
                </span>
                <span className="total_item">1</span>
                <span className="title">Cart</span>
              </div> 
          </div>
          <div className="express">
              <div className="icon_container">
                <div className="icon_container">
                  <span className="icon">
                    <img src={process.env.PUBLIC_URL + '/images/icons/express.svg'} />            
                  </span>
                  <span className="title">Express</span>
                </div>
              </div>
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