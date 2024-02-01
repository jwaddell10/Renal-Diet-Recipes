import PropTypes from "prop-types";

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
    <div>
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
    </div>
  );
}

RecipeFilters.propTypes = {
  setMealFilters: PropTypes.func,
  setTimeFilters: PropTypes.func,
};

export default RecipeFilters;
