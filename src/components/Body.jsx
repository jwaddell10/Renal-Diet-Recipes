import PropTypes from "prop-types";
import styled from "styled-components";
import styles from "./Body.module.css";


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
       <ul><StyledSection>
      {recipes &&
        recipes.map((item) => (
          <StyledCard key={item.recipe.uri}>
            <li className={styles.li}>
              <div>
                <div>
                  <ul>{item.recipe.label}</ul>
                  <ul>Calories: {Math.floor(item.recipe.calories)}</ul>
                  {item.recipe.ingredientLines.map((ingredient, index) => (
                    <li className={styles.li} key={index}>{ingredient}</li>
                  ))}
                </div>
                <img src={item.recipe.image} />
                <button onClick={() => urlRedirect(item.recipe.url)}>
                  Recipe
                </button>
              </div>
            </li>
          </StyledCard>
        ))}</StyledSection>
    </ul>
     
    )
  );
}

const StyledSection = styled.section`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  background-color: #fff;
  color: #444;
`;

const StyledCard = styled.section`
display: flex;
border: 1px solid black;
`

Body.propTypes = {
  itemsFromInputField: PropTypes.object,
};

export default Body;
