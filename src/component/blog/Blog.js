import React from 'react';
import './Blog.scss';

const Blog = () => {
  return (
    <div className="blog_container">
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
          share
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
          share
        </div>
        <div className="label">Trending</div>
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
          share
        </div>
        <div className="label">Trending</div>
      </div>
    </div>
  )
}

export default Blog