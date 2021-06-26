import React, { useEffect, useState } from 'react';
import Product from './Product';
import db from './firebase.config';

const ProductsGrid = () => {
  const [ products, setProducts ] = useState([]);
  const [ searchVal, setSearchVal ] = useState("");
  const [ showErrMsg, setShowErrMsg ] = useState(false);

  // Fetches our products from the firestore DB
  // and passes down the data into our child Product
  // components
  const fetchProducts = async() => {
    const response = db.collection('Products');
    try {
      const data = await response.get();
      data.docs.forEach(item => {
        setProducts(products => [...products, item.data()]);
      });
    } catch (ex) {
      console.log("Unable to Fetch Products...")
      setShowErrMsg(true);
    }

  }

  useEffect(() => {
      fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    if (product && product.title)
      return product.title.toLowerCase().includes(searchVal.toLowerCase());
  });

  return (
    <div>
      <input className="search_input"
      type="text"
      placeholder="Search"
      onChange={ e => setSearchVal(e.target.value) } />
      {showErrMsg ? <p className="siteSubTitle">Unable to Fetch Products</p> : ""}
      <div className="product_grid_container">
        {(filteredProducts || []).map((ele, i) => {
          return (
              <Product id={ele.id}
              key={ele.id}
              image={ele.image}
              title={ele.title}
              rating={ele.rating}
              price={ele.price}/>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsGrid;