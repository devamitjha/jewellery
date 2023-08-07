import React from 'react';
import './Menu.scss';
import Search from '../search/Search';
import {NavLink} from 'react-router-dom';

const Menu = () => {
  return (
    <div className='navigation'>
      <nav>
        <ul>
          <li><NavLink to="/bestSellers">Best Sellers</NavLink></li>
          <li><NavLink to="/new-arrivals">New Arrivals</NavLink></li>
          <li><NavLink to="/rings">Rings</NavLink></li>
          <li><NavLink to="/earrings">Earrings</NavLink></li>
          <li><NavLink to="/bangles-bracelets">Bangles & Bracelets</NavLink></li>
          <li><NavLink to="/solitaires">Solitaires</NavLink></li>
          <li><NavLink to="/other-jewellery">Other Jewellery</NavLink></li>
          <li><NavLink to="/gifting">Gifting</NavLink></li>
        </ul>
      </nav>
      <Search/>
    </div>
  )
}

export default Menu
