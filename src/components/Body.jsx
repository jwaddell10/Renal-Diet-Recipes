import PropTypes from "prop-types";
function Body({ itemsFromInputField }) {
  let recipes = null;
  let recipeIngredients = null;
  console.log(recipeIngredients, "this is recipe ingredients");

  if (itemsFromInputField) {
    recipes = itemsFromInputField.hits;
  }

  //loop over each recipe

  function urlRedirect(url) {
    window.open(url);
  }

  return (
    itemsFromInputField && (
      <ul>
        {recipes &&
          recipes.map((item) => (
            <li key={item.recipe.uri}>
              <ul>
                {item.recipe.label}
                {item.recipe.calories}
              </ul>
              {item.recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
              <img src={item.recipe.image} />
              <button onClick={() => urlRedirect(item.recipe.url)}>
                Recipe
              </button>
            </li>
          ))}
      </ul>
    )
  );
}

Body.propTypes = {
  itemsFromInputField: PropTypes.object,
};

export default Body;
