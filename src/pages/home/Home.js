import React from 'react';
import './Home.scss';
import Services from '../../component/services/Services';
import Trending from '../../component/trending/Trending';
import Collections from '../../component/collections/Collections';

const Home = () => {
  return (
    <>
      <div class="hero_image m_70">
        <img src={process.env.PUBLIC_URL + 'images/main_slider/1.jpg'} alt="slider_1"/>
      </div>
      <div className="mx_width themeContainer">
        <Services/>
        <Trending/>
        <Collections/>
      </div>
    </>
  )
}

export default Home