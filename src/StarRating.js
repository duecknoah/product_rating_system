import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    // We don't call ratingChange here as the rating is getting
    // initalized here and not set by the user.
    if (props.rating)
      setRating(props.rating);
  }, [props]);

  const ratingChange = (ratingVal) => {
    setRating(ratingVal);

    // Call parent callback if there is one
    if (props.onRatingChange)
      props.onRatingChange(ratingVal);
  }

  return (
    <div className="starRatingContainer">
      {[...Array(5)].map((starEle, i) => {
        const ratingVal = i + 1; // 1 -> 5

        return (
          <label key={ratingVal}>
            <input type="radio"
            name="rating"
            value={ratingVal}
            onClick={() => {ratingChange(ratingVal)}}/>

            <FaStar
            className="star"
            color={ratingVal <= (hover || rating) ? "#000" : "#e4e5e9"}
            size={props.size || 25}
            onMouseEnter={() => setHover(ratingVal)}
            onMouseLeave={() => setHover(null)}/>
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;