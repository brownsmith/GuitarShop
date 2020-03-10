import React, { useEffect } from 'react';
import './ProductsWrapper.css';
import Product from '../../containers/Product/Product.js';

function ProductsWrapper({ fetchProducts, data, loading, orderProducts }) {
  useEffect(() => fetchProducts(), []);

  const renderProducts = data => {
    if (data) {
      return data.map((product, key) => (
        <Product productDetails={product} key={key} className={product} />
      ));
    }
  };

  return (
    <div className="productsWrapperComponent">
      <div className="productSorting">
        <button onClick={() => orderProducts(data)} className="button">
          High to Low
        </button>
        <button onClick={() => orderProducts(data)} className="button">
          Low to High
        </button>
      </div>
      <div className="productsWrapper">
        {loading && (
          <div className="loaderWrapper">
            <div className="loader" />
          </div>
        )}
        {!loading && renderProducts(data)}
      </div>
    </div>
  );
}

export default ProductsWrapper;
