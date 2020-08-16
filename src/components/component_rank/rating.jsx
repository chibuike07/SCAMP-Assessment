import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../component_input/Input";

const Rating = ({ data, handleRatingClick, newRating, starNum }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {[...Array(5)].map((n, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <CustomInput
              type={"radio"}
              name="rating"
              value={ratingValue}
              click={() => setRating(ratingValue)}
            />
            <FontAwesomeIcon
              icon={faStar}
              color={ratingValue <= (hover || rating) ? "blue" : "grey"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
