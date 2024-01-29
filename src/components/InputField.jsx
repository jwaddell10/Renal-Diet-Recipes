import React, { useState } from "react";
import PropTypes from "prop-types";
import useFetchAPI from "./FetchAPI.jsx";

const InputField = ({ formData, setFormData }) => {
  const { getData, items } = useFetchAPI({ formData });
  const handleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, title: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.toLowerCase() === "star fruit") {
      console.log("error this is starfruit");
      return;
    }
    getData();
    console.log(items, "this is items");
    // setFormData((prevData) => ({ ...prevData, title: e.target.value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChange}
          value={formData.title}
          type="text"
          name="title"
          id="title"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

InputField.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
};

export default InputField;
