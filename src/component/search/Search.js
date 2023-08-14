import React from 'react';
import './Search.scss';
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";


const Search = () => {
  return (
    <div className="search_container">
      <div className="inputContainer">
        <input type='text' placeholder='search'></input>
      </div>
      <div className="icon_container">
        <IconContext.Provider value={{className: "icon" }}>
          <AiOutlineSearch />
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Search