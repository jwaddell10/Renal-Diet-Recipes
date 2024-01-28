import { useState } from 'react'
import Title from "./components/Title.jsx";
import InputField from "./components/InputField.jsx";
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
    </div>
  );
}

export default App;
