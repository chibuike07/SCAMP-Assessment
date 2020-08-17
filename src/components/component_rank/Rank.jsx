import React from "react";
import RatingStar from "./rating";
import Styles from "./rank.module.css";
const Rank = ({ data }) => {
  const { rank_wrapper, fieldset } = Styles;
  return (
    <div className={rank_wrapper}>
      <fieldset className={fieldset}>
        <h3>lets see your rating on {data}</h3>
        <legend>rank countries</legend>

        {data && <RatingStar />}

        {/* https://www.npmjs.com/package/react-star-ratings */}
      </fieldset>
    </div>
  );
};

export default Rank;
