import React from "react";
import CustomInput from "../component_input/Input";

const FormField = ({ data, handleCountries, countries, reset }) => {
  return (
    <div>
      <h3>hello</h3>
      <form className="form">
        <CustomInput
          type={"text"}
          name={"country"}
          list="country"
          value={data}
          onFocus={reset}
          onChange={handleCountries}
        />
        <datalist className="datalist" id="country">
          {countries &&
            countries.map((countries, index) => (
              <option key={index}>{countries.Slug}</option>
            ))}
        </datalist>
      </form>
    </div>
  );
};

export default FormField;
