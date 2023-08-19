import React from 'react';
import './Blog.scss';
import { AiOutlineShareAlt } from "react-icons/ai";
import { IconContext } from "react-icons";

const Blog = () => {
  return (
    <div className="blog_container">
      <div className="blog_post_title">
        <h3>Latest Blog</h3>
      </div>
      <div className="blog_list">
        <div className="blog_card">
          <div className="card_image">
            <img src={process.env.PUBLIC_URL + 'images/blog/1.jpg'} alt="blog"/>
          </div>
          <div className="card_caontainer">
            <div className="card_title">Here Are 8 Ways To Success Faster</div>
            <div className="card_content">
              The European languages are members of the same family. Their separate existence is a myth. For science, music, sport,
            </div>
          </div>
          <div className="share">
            <div className="icon_container">
              <IconContext.Provider value={{className: "icon" }}>
                <AiOutlineShareAlt />
              </IconContext.Provider>
            </div>
          </div>
          <div className="label">Trending</div>
        </div>
        <div className="blog_card">
          <div className="card_image">
            <img src={process.env.PUBLIC_URL + 'images/blog/2.jpg'} alt="blog"/>
          </div>
          <div className="card_caontainer">
            <div className="card_title">Here Are 8 Ways To Success Faster</div>
            <div className="card_content">
              The European languages are members of the same family. Their separate existence is a myth. For science, music, sport,
            </div>
          </div>
          <div className="share">
            <div className="icon_container">
              <IconContext.Provider value={{className: "icon" }}>
                <AiOutlineShareAlt />
              </IconContext.Provider>
            </div>
          </div>
          <div className="label">Fashion</div>
        </div>
        <div className="blog_card">
          <div className="card_image">
            <img src={process.env.PUBLIC_URL + 'images/blog/3.jpg'} alt="blog"/>
          </div>
          <div className="card_caontainer">
            <div className="card_title">Here Are 8 Ways To Success Faster</div>
            <div className="card_content">
              The European languages are members of the same family. Their separate existence is a myth. For science, music, sport,
            </div>
          </div>
          <div className="share">
            <div className="icon_container">
              <IconContext.Provider value={{className: "icon" }}>
                <AiOutlineShareAlt />
              </IconContext.Provider>
            </div>
          </div>
          <div className="label">Lifestyle</div>
        </div>
      </div>
    </div>
  )
}

export default Blog