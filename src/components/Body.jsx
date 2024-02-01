import PropTypes from "prop-types";
function Body({ itemsFromInputField }) {
  let recipes = null;

  if (itemsFromInputField) {
    recipes = itemsFromInputField.hits;
    console.log(recipes, "this is recipes");
  }

  function urlRedirect(url) {
    window.open(url);
  }

  return (
    itemsFromInputField && (
      <ul>
        {recipes &&
          recipes.map((item) => (
            <li key={item.recipe.uri}>
              {item.recipe.label}
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
