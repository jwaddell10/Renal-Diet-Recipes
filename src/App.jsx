import { useState } from 'react'
import Title from "./components/Title.jsx";
import InputField from "./components/InputField.jsx";
import RecipeFilters from './components/RecipeFilters.jsx';
import Body from './components/Body.jsx'
//homepage, title page
//input field, filters
//body with cards

function App() {
  const [formData, setFormData] = useState({
    title: "",
  });

  const [itemsFromInputField, setItemsFromInputField] = useState(null)

  return (
    <div>
      <Title />
      <InputField formData={formData} setFormData={setFormData} setItemsFromInputField={setItemsFromInputField}/>
      <RecipeFilters />
      <Body formData={formData} setFormData={setFormData} itemsFromInputField={itemsFromInputField}/>
    </div>
  );
}

export default App;
