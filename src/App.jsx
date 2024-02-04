import { useState } from "react";
import Title from "./components/Title/Title.jsx";
import InputField from "./components/InputField/InputField.jsx";
import RecipeFilters from "./components/RecipeFilter/RecipeFilters.jsx";
import Body from "./components/Body/Body.jsx";
import styled from "styled-components";

function App() {
  const [formData, setFormData] = useState({
    title: "",
  });

  //changes state of items user types in the input field
  const [itemsFromInputField, setItemsFromInputField] = useState(null);
  //changes state based on the meal type user selects
  const [mealFilters, setMealFilters] = useState({
    mealFilters: "Breakfast",
  });

  //changes state based on the cooktime user selects
  const [timeFilters, setTimeFilters] = useState({
    timeFilters: "1-10",
  });

  return (
    <div>
      <Title />
      <StyledBar>
        <InputField
          formData={formData}
          setFormData={setFormData}
          setItemsFromInputField={setItemsFromInputField}
          mealFilters={mealFilters}
          timeFilters={timeFilters}
        />
        <RecipeFilters
          mealFilters={mealFilters}
          setMealFilters={setMealFilters}
          timeFilters={timeFilters}
          setTimeFilters={setTimeFilters}
        />
      </StyledBar>

      <Body
        formData={formData}
        setFormData={setFormData}
        itemsFromInputField={itemsFromInputField}
      />
    </div>
  );
}

const StyledBar = styled.section`
  display: flex;
  justify-content: center;
`;

export default App;
