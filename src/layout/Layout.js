import React from 'react';
import './Layout.scss';
import { Outlet } from 'react-router-dom';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

const Layout = () => {
  return (
    <div className='main'>       
        <div className='mainnav'>
          <Header/>
        </div>
        <div className='pageContainer'>
          <Outlet />
          <Footer/>
        </div>
    </div>
    
  )
}

export default Layout