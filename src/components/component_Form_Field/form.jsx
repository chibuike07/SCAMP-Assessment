import React from "react";
import CustomInput from "../component_input/Input";
import CustomButton from "../component_button/Button";
const FormField = ({
  data,
  handleCountries,
  countries,
  reset,
  handleGlobalSummary,
}) => {
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
      <CustomButton text={"Global Daily summary"} click={handleGlobalSummary} />
    </div>
  );
};

export default FormField;
