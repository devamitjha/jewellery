import React from 'react';
import './Footer.scss';
import { LiaFacebookF, LiaTwitter, LiaInstagram } from "react-icons/lia";
import { AiFillYoutube } from "react-icons/ai";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="mx_width footer_wapper">
        <div className="copyright">© 2023 Jewellery. Theme by DA.</div>
        <div className="footer_social">
          <div className="icon_container">
            <IconContext.Provider value={{className: "icon" }}>
              <LiaFacebookF />
            </IconContext.Provider>
          </div>
          <div className="icon_container">
            <IconContext.Provider value={{className: "icon" }}>
              <LiaTwitter />
            </IconContext.Provider>
          </div>
          <div className="icon_container">
            <IconContext.Provider value={{className: "icon" }}>
              <LiaInstagram />
            </IconContext.Provider>
          </div>
          <div className="icon_container">
            <IconContext.Provider value={{className: "icon" }}>
              <AiFillYoutube />
            </IconContext.Provider>
          </div>
        </div>
        <div className="backToTop">Back to Top</div>
      </div>
    </div>
  )
}

export default Footer