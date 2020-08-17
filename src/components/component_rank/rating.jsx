import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../component_input/Input";
import Styles from "./rating.module.css";

const Rating = ({ data, handleRatingClick, newRating, starNum }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const { rating_wrapper, radio_input } = Styles;
  return (
    <div className={rating_wrapper}>
      {[...Array(5)].map((n, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <CustomInput
              type={"radio"}
              name="rating"
              value={ratingValue}
              click={() => setRating(ratingValue)}
              className={radio_input}
            />
            <FontAwesomeIcon
              icon={faStar}
              color={ratingValue <= (hover || rating) ? "blue" : "grey"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              style={{ marginRight: 10 }}
              size={"1.8x"}
              spin
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
