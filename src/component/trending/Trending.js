import React from 'react';
import './Trending.scss';

const Trending = () => {
  return (
    <div className="trending_container m_70">
      <div className="title_container">
        <div className='heading_container'>Trending Products</div>
      </div>
      <div className="tab_container">
        <div className="tab_item">
          <div className="tab active">New Arrivals</div>
          <div className="tab">Best Sellers</div>
        </div>
        <div className="tab_content">
          <div className="product_card_container">
            <div className="product_card"></div>
            <div className="product_card"></div>
            <div className="product_card"></div>
            <div className="product_card"></div>
            <div className="product_card"></div>
            <div className="product_card"></div>
            <div className="product_card"></div>
            <div className="product_card"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending