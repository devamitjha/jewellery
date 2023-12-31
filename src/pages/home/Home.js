import React from 'react';
import './Home.scss';
import Services from '../../component/services/Services';
import Trending from '../../component/trending/Trending';
import Collections from '../../component/collections/Collections';
import { Banner } from '../../component/banner/Banner';
import Blog from '../../component/blog/Blog';
import Hero from '../../component/hero/Hero';

const Home = () => {
  return (
    <>
      <div className="hero_image m_70">
        <Hero/>
      </div>
      <div className="mx_width themeContainer">
        <Services/>
        <Trending/>
        <Collections/>        
      </div>
      <div className="fluid">
        <Banner/>
      </div>
      <div className="mx_width themeContainer m_70">
        <Blog/>
      </div>
    </>
  )
}

export default Home