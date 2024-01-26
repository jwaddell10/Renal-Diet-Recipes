function RecipeFilters() {
  return (
    <div>
      <select name="mealtime" id="mealtime">
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
      <select name="cooktime" id="cooktime">
        <option value="short">0-10 Minutes</option>
        <option value="medium">10-20 Minutes</option>
        <option value="long">20+ Minutes</option>
      </select>
    </div>
  );
}

export default RecipeFilters;
