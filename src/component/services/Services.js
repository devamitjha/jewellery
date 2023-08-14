import React from 'react';
import './Services.scss'

const Services = () => {
  return (
    <div className="specialGift m_70">
      <div className="gift_item">
        <div className="service_img">
          <span className="gift_image" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/images/services/services-1.png)`}}></span>
        </div>
        <div className="service_header">
          <div className="item_title">Free Delivery</div>
          <div className="item_subtitle">orders above $100</div>
        </div>
      </div>
      <div className="gift_item">
        <div className="service_img">
          <span className="gift_image" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/images/services/services-2.png)`}}></span>
        </div>
        <div className="service_header">
          <div className="item_title">Gift Voucher</div>
          <div className="item_subtitle">enter now</div>
        </div>
      </div>
      <div className="gift_item">
        <div className="service_img">
          <span className="gift_image" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/images/services/services-3.png)`}}></span>
        </div>
        <div className="service_header">
          <div className="item_title">Money Back</div>
          <div className="item_subtitle">with a 30 day</div>
        </div>
      </div>
      <div className="gift_item">
        <div className="service_img">
          <span className="gift_image" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/images/services/services-4.png)`}}></span>
        </div>
        <div className="service_header">
          <div className="item_title">Onlint Support</div>
          <div className="item_subtitle">hours: 8am-11pm</div>
        </div>
      </div>
    </div>
  )
}

export default Services