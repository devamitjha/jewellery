import React from 'react';
import './Search.scss';
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMic } from "react-icons/fi";


const Search = () => {
  return (
    <div className="search_container">
      <div className="inputContainer">
        <input type='text' placeholder='search'></input>
        <div className="icon_container">
          <IconContext.Provider value={{className: "icon" }}>
            <AiOutlineSearch />
          </IconContext.Provider>
        </div>
      </div>      
      <div className="icon_container">
        <IconContext.Provider value={{className: "icon" }}>
          <FiMic />
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Search