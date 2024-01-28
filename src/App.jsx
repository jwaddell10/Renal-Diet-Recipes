import { useState } from 'react'
import Title from "./components/Title.jsx";
import InputField from "./components/InputField.jsx";
import RecipeFilters from './components/RecipeFilters.jsx';
//homepage, title page
//input field, filters
//body with cards

function App() {
  const [formData, setFormData] = useState({
    title: "",
  });
  return (
    <div>
      <Title />
      <InputField formData={formData} setFormData={setFormData}/>
      <RecipeFilters />
    </div>
  );
}

export default App;
