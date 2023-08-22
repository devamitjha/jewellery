import React from 'react';
import './Header.scss';
import Menu from '../menu/Menu';
import Search from '../search/Search';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMapPin , FiHeadphones, FiUser, FiHeart, FiShoppingBag,FiChevronRight} from "react-icons/fi";

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
              <Link className="icon_container" to="/">
                <span className="icon">
                  <img src={process.env.PUBLIC_URL + '/images/icons/discount.svg'} />                 
                </span>
                <span className="title">Offers</span>
              </Link>
              <Link className="icon_container" to="/">
                  <span className="icon_wrapper"> 
                    <FiMapPin />
                  </span>  
                <span className="title">Find a Store</span>            
              </Link>
              <Link className="icon_container" to="/">
                <span className="icon_wrapper"> 
                  <FiHeadphones />
                </span>
                <span className="title">Contact Us</span>
              </Link>
          </div>
          <div className="profile_cart">
              <div className="icon_container profile">
                <span className="icon_wrapper"> 
                  <FiUser />
                </span>
                <span className="title">Profile</span>
                <div className="profile_container">                  
                  <div className="login_container">
                    <div className="title_container">
                        <h4>Welcome</h4>
                        <p>To access account and manage orders</p>
                    </div>
                    <Link className="btn login_btn" to="/">
                      <span>Login to your account</span>
                    </Link>
                  </div>
                  <Link className="profile_item_container" to="/">
                    <div className="icon_container">
                      <span className="icon_wrapper"> 
                        <FiUser />
                      </span>
                      <span className="small_text">Personal Information</span>
                    </div>
                    <div class="angle_right">
                      <FiChevronRight />
                    </div>
                  </Link>
                  <Link className="profile_item_container" to="/">
                    <div className="icon_container">
                      <span className="icon_wrapper"> 
                        <FiShoppingBag />
                      </span>
                      <span className="small_text">My Order</span>
                    </div>
                    <div class="angle_right">
                      <FiChevronRight />
                    </div>
                  </Link>
                  <Link className="profile_item_container" to="/">
                    <div className="icon_container">
                      <span className="icon_wrapper"> 
                        <FiHeart />
                      </span>
                      <span className="small_text">My Wishlist</span>
                    </div>
                    <div class="angle_right">
                      <FiChevronRight />
                    </div>
                  </Link>
                </div>
              </div>
              <Link className="icon_container relative_icon" to="/">
                <span className="icon_wrapper"> 
                  <FiHeart />
                </span>
                <span className="title">Wishlist</span>
                <span className="total_item">1</span>
              </Link>
              <Link className="icon_container relative_icon" to="/">
                <span className="icon_wrapper"> 
                  <AiOutlineShoppingCart />
                </span>
                <span className="total_item">1</span>
                <span className="title">Cart</span>
              </Link> 
          </div>
          <div className="express">
                <Link className="icon_container" to="/">
                  <span className="icon">
                    <img src={process.env.PUBLIC_URL + '/images/icons/express.svg'} />            
                  </span>
                  <span className="title">Express</span>
                </Link>
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