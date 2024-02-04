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
      <ul className={styles.ul}>
        <StyledSection>
          {recipes &&
            recipes.map((item) => (
              <StyledDiv key={item.recipe.uri}>
                <img className={styles.img} src={item.recipe.image} />

                <div className={styles.li}>
                  <StyledCard>
                    <div>
                      <div>
                        <StyledText>
                          <h1 onClick={() => urlRedirect(item.recipe.url)}>{item.recipe.label}</h1>
                        </StyledText>
                      </div>
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
  grid-template-columns: repeat(auto-fill, minmax(225px, 2fr));
  background-color: #fff;
  color: #444;
`;

const StyledDiv = styled.section`
  margin-top: 10px;
  box-shadow: 1px 1px 5px gray;
`;

const StyledCard = styled.section`

`;

const StyledText = styled.section`
&:hover {
  text-decoration: underline;
  cursor: pointer;

}
font-family: 'FF Nexus Serif', sans-serif;
font-size: 1.5rem;
`;

Body.propTypes = {
  itemsFromInputField: PropTypes.object,
};

export default Body;
