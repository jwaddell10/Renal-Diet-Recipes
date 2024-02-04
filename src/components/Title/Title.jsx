import styled from "styled-components";

function Title() {
  return (
    <StyledText>
      <h1>Renal Diet Recipes App</h1>
    </StyledText>
  );
}

const StyledText = styled.section`
  text-align: center;
  font-family: 'FF Nexus Serif', sans-serif;
`;

export default Title;
