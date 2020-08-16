import React from "react";
import RatingStar from "./rating";
const Rank = ({ data }) => {
  return (
    <div>
      <div
        className="list_countries"
        style={{
          height: 200,
          width: "50%",
          backgroundColor: "red",
        }}
      >
        <fieldset>
          <h3>lets see your rating on {data}</h3>
          <legend>rank countries</legend>

          {data && <RatingStar />}

          {/* https://www.npmjs.com/package/react-star-ratings */}
        </fieldset>
      </div>
    </div>
  );
};

export default Rank;
