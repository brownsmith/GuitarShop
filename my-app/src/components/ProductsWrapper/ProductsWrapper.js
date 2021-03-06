import React, { useEffect, createContext } from 'react';
import './ProductsWrapper.css';
import Product from '../../containers/Product/Product.js';
import { useSwitches } from '../App/App';

const MyContext = createContext('defaultValue');
console.log('MyContext', MyContext);

const renderProducts = data => {
  if (data) {
    return data.map((product, key) => (
      <Product productDetails={product} key={key} className={product} />
    ));
  }
};

const ProductsWrapper = ({
  fetchProducts,
  data,
  hasError,
  loading,
  orderProducts,
}) => {
  useEffect(
    () => {
      fetchProducts().catch(err => {
        console.log('api error: ', err);
      });
    },
    [fetchProducts]
  );

  const activeOffer = useSwitches();
  console.log('Active Offer:', activeOffer);

  return (
    <div
      className="productsWrapperComponent"
      data-test="productsWrapperComponent"
    >
      {hasError ? (
        <div className="productsWrapper">
          <h2>WHOOPSIE THE API DONE A ERROR</h2>
        </div>
      ) : (
        <>
          <div className="productSorting">
            <button onClick={() => orderProducts(data)} className="button">
              High to Low {activeOffer}
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
        </>
      )}
    </div>
  );
};

export default ProductsWrapper;
