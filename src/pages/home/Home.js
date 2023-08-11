import React from 'react';
import './Home.scss';
import SpecialGift from '../../component/specialGift/SpecialGift';

const Home = () => {
  return (
    <>
      <div class="hero_image">
        <img src={process.env.PUBLIC_URL + 'images/main_slider/1.jpg'} alt="slider_1"/>
      </div>
      <div className="mx_width themeContainer">
        <SpecialGift/>
      </div>
    </>
  )
}

export default Home