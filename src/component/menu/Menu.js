import React from 'react';
import './Menu.scss';
import {NavLink} from 'react-router-dom';

const Menu = () => {
  return (
    <div className='navigation'>
        <div className="mx_width">
          <ul>
            <li><NavLink to="/bestSellers">Best Sellers</NavLink></li>
            <li><NavLink to="/new-arrivals">New Arrivals</NavLink></li>
            <li><NavLink to="/rings">Rings</NavLink></li>
            <li><NavLink to="/earrings">Earrings</NavLink></li>
            <li><NavLink to="/pendants">Pendants</NavLink></li>
            <li><NavLink to="/chains">Chains</NavLink></li>
            <li><NavLink to="/bangles-bracelets">Bangles & Bracelets</NavLink></li>
            <li><NavLink to="/solitaires">Solitaires</NavLink></li>
            <li><NavLink to="/mens-jewellery">Men's Jewellery</NavLink></li>
            <li><NavLink to="/gifting">Gifting</NavLink></li>
          </ul>  
        </div>
    </div>
  )
}

export default Menu
