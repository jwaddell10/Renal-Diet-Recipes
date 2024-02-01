import PropTypes from "prop-types";
import styled from "styled-components";
import styles from "./Body.module.css";

function Body({ itemsFromInputField }) {
  let recipes = null;

  if (itemsFromInputField) {
    recipes = itemsFromInputField.hits;
  }

  function urlRedirect(url) {
    window.open(url);
  }

  return (
    itemsFromInputField && (
      <ul>
        <StyledSection>
          {recipes &&
            recipes.map((item) => (
              <StyledCard key={item.recipe.uri}>
                <li className={styles.li}>
                  <div>
                    <div>
                      <li>{item.recipe.label}</li>
                      <li>
                        <b>Calories:</b> {Math.floor(item.recipe.calories)}
                      </li>
                      <b>Ingredients:</b>
                      {item.recipe.ingredientLines.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </div>
                    <img src={item.recipe.image} />
                    <button onClick={() => urlRedirect(item.recipe.url)}>
                      Recipe
                    </button>
                  </div>
                </li>
              </StyledCard>
            ))}
        </StyledSection>
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
`;

Body.propTypes = {
  itemsFromInputField: PropTypes.object,
};

export default Body;
