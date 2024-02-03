import PropTypes from "prop-types";
import useFetchAPI from "../FetchAPI/FetchAPI.jsx";
import { useEffect } from "react";
import styled from "styled-components";

const InputField = ({
  formData,
  setFormData,
  setItemsFromInputField,
  mealFilters,
  timeFilters,
}) => {
  const { getData, items } = useFetchAPI({
    formData,
    mealFilters,
    timeFilters,
  });
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
    // setFormData((prevData) => ({ ...prevData, title: e.target.value }));
  };

  useEffect(() => {
    if (items !== null) {
      setItemsFromInputField(items);
    }
  }, [items, setItemsFromInputField]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"></label>
        <input
          onChange={handleChange}
          value={formData.title}
          type="text"
          name="title"
          id="title"
          placeholder="Search"
        />
      </form>
    </div>
  );
};

InputField.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  setItemsFromInputField: PropTypes.func,
  mealFilters: PropTypes.object,
  timeFilters: PropTypes.object,
};

export default InputField;
