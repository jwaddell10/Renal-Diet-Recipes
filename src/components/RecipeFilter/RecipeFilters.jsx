import PropTypes from "prop-types";
import styled from "styled-components";

const DropdownContainer = styled.div`
  display: flex;
  align-items: stretch; /* Ensures equal height for children */
  margin-bottom: 20px;

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 0.2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
  }
`;

function RecipeFilters({ setMealFilters, setTimeFilters }) {
  const handleMealFilterChange = (e) => {
    setMealFilters(() => ({
      mealFilters: e.target.value,
    }));
  };

  const handleTimeFilterChange = (e) => {
    setTimeFilters(() => ({
      timeFilters: e.target.value,
    }));
  };

  return (
    <DropdownContainer>
      <select onChange={handleMealFilterChange} name="mealtime" id="mealtime">
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
      <select onChange={handleTimeFilterChange} name="cooktime" id="cooktime">
        <option value="1-10">0-10 Minutes</option>
        <option value="11-20">10-20 Minutes</option>
        <option value="21-40">20+ Minutes</option>
      </select>
    </DropdownContainer>
  );
}



RecipeFilters.propTypes = {
  setMealFilters: PropTypes.func,
  setTimeFilters: PropTypes.func,
};

export default RecipeFilters;
