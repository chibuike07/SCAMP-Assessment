import React from "react";
import CustomInput from "../component_input/Input";
import CustomButton from "../component_button/Button";
import Styles from "./form.module.css";
const FormField = ({
  data,
  handleCountries,
  countries,
  reset,
  handleGlobalSummary,
}) => {
  const { form_wrapper, form, input, button } = Styles;
  return (
    <div className={form_wrapper}>
      <form className={form}>
        <CustomInput
          type={"text"}
          name={"country"}
          list="country"
          value={data}
          onFocus={reset}
          onChange={handleCountries}
          className={input}
          placeholder={"select country"}
        />
        <datalist className="datalist" id="country">
          {countries &&
            countries.map((countries, index) => (
              <option key={index}>{countries.Slug}</option>
            ))}
        </datalist>
      </form>

      <CustomButton
        text={"Global Daily summary"}
        click={handleGlobalSummary}
        className={button}
        backgroundColor={"rgb(107, 24, 16)"}
      />
    </div>
  );
};

export default FormField;
