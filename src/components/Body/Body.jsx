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
              <StyledDiv key={item.recipe.uri}>
                <div className={styles.li}>
                  <StyledCard>
                    <div>
                      <div>
                        <StyledText>
                          <h1>{item.recipe.label}</h1>
                        </StyledText>

                        <li>
                          <b>Calories:</b> {Math.floor(item.recipe.calories)}
                        </li>
                        <b>Ingredients:</b>
                        {item.recipe.ingredientLines.map(
                          (ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          )
                        )}
                      </div>
                      <img className={styles.img} src={item.recipe.image} />
                      <button
                        className={styles.button}
                        onClick={() => urlRedirect(item.recipe.url)}
                      >
                        View Recipe
                      </button>
                    </div>
                  </StyledCard>
                </div>
              </StyledDiv>
            ))}
        </StyledSection>
      </ul>
    )
  );
}

const StyledSection = styled.section`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  background-color: #fff;
  color: #444;
`;

const StyledDiv = styled.section`
  display: flex;
  border: 1px solid black;
`;

const StyledCard = styled.section`
  max-width: 100%;
`;

const StyledText = styled.section`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`;

Body.propTypes = {
  itemsFromInputField: PropTypes.object,
};

export default Body;
