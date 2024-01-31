import { useState } from "react";
import PropTypes from "prop-types";

function RecipeFilters({ setMealFilters, setTimeFilters }) {

  const handleMealFilterChange = (e) => {
    setMealFilters((prevData) => ({ ...prevData, mealFilters: e.target.value }))
  }

  const handleTimeFilterChange = (e) => {
    setTimeFilters((prevData) => ({ ...prevData, timeFilters: e.target.value}))
  }
  return (
    <div>
      <select
        onChange={handleMealFilterChange}
        name="mealtime"
        id="mealtime"
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
      <select
        onChange={handleTimeFilterChange}
        name="cooktime"
        id="cooktime"
      >
        <option value="short">0-10 Minutes</option>
        <option value="medium">10-20 Minutes</option>
        <option value="long">20+ Minutes</option>
      </select>
    </div>
  );
}

RecipeFilters.propTypes = {
  setMealFilters: PropTypes.func,
  setTimeFilters: PropTypes.func,
}

export default RecipeFilters;
