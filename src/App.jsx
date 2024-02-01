import { useState } from "react";
import Title from "./components/Title.jsx";
import InputField from "./components/InputField.jsx";
import RecipeFilters from "./components/RecipeFilters.jsx";
import Body from "./components/Body.jsx";
//homepage, title page
//input field, filters
//body with cards

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
      <InputField
        formData={formData}
        setFormData={setFormData}
        setItemsFromInputField={setItemsFromInputField}
        mealFilters={mealFilters}
        // setMealFilters={setMealFilters}
        timeFilters={timeFilters}
        // setTimeFilters={setTimeFilters}
      />
      <RecipeFilters
        mealFilters={mealFilters}
        setMealFilters={setMealFilters}
        timeFilters={timeFilters}
        setTimeFilters={setTimeFilters}
      />
      <Body
        formData={formData}
        setFormData={setFormData}
        itemsFromInputField={itemsFromInputField}
      />
    </div>
  );
}

export default App;
