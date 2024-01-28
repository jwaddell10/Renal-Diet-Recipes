import React, { useState } from "react";
import PropTypes from "prop-types";
import useFetchAPI from "./FetchAPI.jsx";

const InputField = ({ formData, setFormData }) => {
  const { items, error, loading } = useFetchAPI({ formData });
  const [input, setInput] = useState('');
  console.log(items, "this is items");
  
  const handleChange = (e) => {
    setInput(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormData((prevData) => ({ ...prevData, title: e.target.value }));
    if (formData.title === "star fruit") {
      console.log("error this is starfruit");
      return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChange}
          value={input}
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
