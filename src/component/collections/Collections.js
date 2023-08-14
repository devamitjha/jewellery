import React from 'react';
import './Collections.scss';

const Collections = () => {
  return (
    <div className="collection_container m_70">
        <div className="collection_item">
          <div className="coeection_item_img">
            <img src={process.env.PUBLIC_URL + 'images/collections/banner-1.png'} alt="collections"/>
          </div>
          <div className="coeection_item_img">
            <img src={process.env.PUBLIC_URL + 'images/collections/banner-3.png'} alt="collections"/>
          </div>
        </div>
        <div className="collection_item">
          <div className="coeection_item_img">
            <img src={process.env.PUBLIC_URL + 'images/collections/banner-2.png'} alt="collections"/>
          </div>
          <div className="coeection_item_img">
            <img src={process.env.PUBLIC_URL + 'images/collections/banner-4.png'} alt="collections"/>
          </div>
        </div>
    </div>
  )
}

export default Collections