import { useState } from "react";
import useFetchAPI from "./FetchAPI";
import PropTypes from 'prop-types';
import RecipeFilters from "./RecipeFilters";

//need to somehow take the value from this search, and hand it to the fetchapi

//maybe pass this state up? 

//remove state, pass it to parent

const InputField = ({ formData, setFormData }) => {
  const { items } = useFetchAPI();
  console.log(items, 'this is items')

  //maybe can use report validity to filter certain items?
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.title, 'this is formdata')
    if (formData.title === 'star fruit') {
      console.log('error this is starfruit')
      return
    }
    // Search(e.target.value)
  };
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => setFormData((prevData) => ({ ...prevData, title: e.target.value }))}
          value={formData.title}
          type="text"
          name="title"
          id="title"
        />
      </form>
      <RecipeFilters />
    </div>
  );
};

InputField.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
}

export default InputField;
