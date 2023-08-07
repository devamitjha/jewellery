import React from 'react';
import './Header.scss';
import Menu from '../menu/Menu';

const HeaderTop = ()=>{
  return(
    <div className='headerTop'>Top</div>
  );
};
const HeaderMiddle=()=>{
  return(
    <div className='headerMiddle'>Middle</div>
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