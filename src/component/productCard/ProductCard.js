import React, { useState } from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosEye } from "react-icons/io";

const ProductCard = (props) => {
  const products = props.products.slice(0, 12);
  const allProductsFilter = props.allProduct;
  const newArrivalsFilter = props.newArrivals;
  const bestSellers = props.bestSellers;
  const ourPicks = props.ourPicks;

  const [activeTab, setActiveTab] = useState("All Products");

  const handleTabClick = (tabName, clickFunction) => {
    setActiveTab(tabName);
    clickFunction();
  };

 

  return (
    <>
      <div className="title_container">
        <div className="heading_container">Trending Products</div>
      </div>
      <div className="tab_container">
        <div className="tab_item">
          <div
            className={`tab ${activeTab === "All Products" ? "active" : ""}`}
            onClick={() => handleTabClick("All Products", allProductsFilter)}
          >
            All Products
          </div>
          <div
            className={`tab ${activeTab === "New Arrivals" ? "active" : ""}`}
            onClick={() => handleTabClick("New Arrivals", newArrivalsFilter)}
          >
            New Arrivals
          </div>
          <div
            className={`tab ${activeTab === "Best Sellers" ? "active" : ""}`}
            onClick={() => handleTabClick("Best Sellers", bestSellers)}
          >
            Best Sellers
          </div>
          <div
            className={`tab ${activeTab === "Our Picks" ? "active" : ""}`}
            onClick={() => handleTabClick("Our Picks", ourPicks)}
          >
            Our Picks
          </div>
        </div>
        <div className="tab_content">
          <div className="product_card_container">
            {products &&
              products.map((product) => {               
                return (
                  <div className="card product_card" key={product.id}>
                    <div className="card__image">
                      <img src={product.imageEmail} alt={product.name} />
                    </div>
                    <div className="product_title_container">
                      <div className="title">
                        <Link to="/">{product.name}</Link>
                      </div>
                    </div>
                    <div className="quick_view">
                        <IoIosEye />
                    </div>                      
                    {
                      product.product_segment=="BESTSELLERS" ? <div className="product_label bs">Best Sellers</div>
                      : product.product_segment=="NEW ARRIVALS" ? <div className="product_label na">New Arrivals</div>
                      : product.product_segment=="HOT" ? <div className="product_label hot">Our Picks</div>
                      : null
                    
                    }
                    <div className="card__product_details">   
                      <div className="icon_container">
                        <AiOutlineHeart />
                      </div>                   
                      <div className="card__product_price">
                        {product.coupon_offer_price !== 0 ? (
                          <>
                            <div className="price old_price">
                              &#x20B9;{Math.trunc(product.new_price)}
                            </div>
                            <div className="price new_price">
                              &#x20B9;{Math.trunc(product.coupon_offer_price)}
                            </div>                            
                          </>
                        ) : (
                          <div className="price new_price">
                            &#x20B9;{Math.trunc(product.new_price)}
                          </div>
                        )}
                      </div>
                      <div className="icon_container">
                        <MdShoppingCart />
                      </div>
                    </div>
                      {product.product_rating && (
                        <div className="stars_container">
                          <ReactStars
                            count={
                              product.product_rating === "5"
                                ? 5
                                : product.product_rating === "4 and up"
                                ? 4
                                : product.product_rating === "3 and up"
                                ? 3
                                : product.product_rating === "2 and up"
                                ? 2
                                : null
                            }
                            value={
                              product.product_rating === "5"
                                ? 5
                                : product.product_rating === "4 and up"
                                ? 4
                                : product.product_rating === "3 and up"
                                ? 3
                                : product.product_rating === "2 and up"
                                ? 2
                                : null
                            }
                            size={20}
                            edit={false}
                            activeColor="#FF8C40"
                          />
                        </div>
                      )}                  
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
