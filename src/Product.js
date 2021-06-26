import React, { useEffect, useState } from 'react'
import StarRating from './StarRating'
import db from './firebase.config';

const Product = (props) => {
  const [ productData, setProductData ] = useState({
    id: null,
    image: null,
    title: null,
    rating: 0,
    price: null
  });

  // We only want to set the product data when mounted,
  // and we pass in the props in the array to only update when
  // our product data has changed, else an infinite loop will occur
  useEffect(() => {
    setProductData({
      id: props.id,
      image: props.image,
      title: props.title,
      rating: props.rating,
      price: props.price
    });
  }, [props]);

  // Handles when the StarRating rating value is changed, updates product
  // data both in DB and for our component
  const updatedRatingHandler = (newRating) => {
    let newProductData = {...productData, rating: newRating}

    // update DB
    db.collection("Products").doc(productData.id).set(newProductData)
    .then(() => {
      console.log("Value successfully written!");
    })
    .catch(error => {
      console.error("Error writing Value: ", error);
    });
    // Update the rating in the product data aswell
    setProductData(newProductData);
  }

  return (
    <div className="product_container">
      <div className="product_img_container">
        <img className="product_img" src={productData.image} />
      </div>
      <StarRating rating={productData.rating} onRatingChange={updatedRatingHandler}/>
      <h3>{productData.title}</h3>
      <p>{productData.price}</p>
    </div>
  );
};

export default Product;