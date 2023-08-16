import React, { useState } from 'react'; 
import './Trending.scss';
import ProductCard from '../productCard/ProductCard';
import Loading from '../loading/Loading';
import DummyData from '../data/dummyData';

const Trending = () => {
  const [product, setProduct] = useState(DummyData);
  const [allProducts] = useState(DummyData);

  const allProductsFilter = () => {    
    const allProductsData = allProducts.filter(function(product) {
      return product.candere_product_type === 'Ring';
    });
    setProduct(allProductsData);
  };

  const newArrivalsFilter = () => {
    const newArrivalsData = allProducts.filter(function(product) {
      return (
        product.product_segment === 'NEW ARRIVALS' &&
        product.candere_product_type === 'Ring'
      );
    });
    setProduct(newArrivalsData);
  };

  const bestSellers = () => {
    const bs = allProducts.filter(function(product) {
      return (
        product.product_segment === 'BESTSELLERS' &&
        product.candere_product_type === 'Ring'
      );
    });
    setProduct(bs);
  };

  const ourPicks = () => {
    const ourPicksFilter = allProducts.filter(function(product) {
      return (
        product.product_segment === 'HOT' &&
        product.candere_product_type === 'Ring'
      );
    });
    setProduct(ourPicksFilter);
  };

  return (
    <div className="item_container m_70">
      {product.length <= 0 ? (
        <Loading />
      ) : (
        <ProductCard
          products={product}
          allProduct={allProductsFilter}
          newArrivals={newArrivalsFilter}
          bestSellers={bestSellers}
          ourPicks={ourPicks}
        />
      )}
    </div>
  );
};

export default Trending;
