import { useState } from "react";
import useFetchAPI from "./FetchAPI";
import RecipeFilters from "./RecipeFilters";

const InputField = () => {
  const [formData, setFormData] = useState({
    title: "",
  });

  //maybe can use report validity to filter certain items?
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, " this is formdata");
    // Search(e.target.value)
  };
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          value={formData.title}
          type="text"
          name="title"
          id="title"
        />
      </form>
      <RecipeFilters />
    </div>
  );
};

export default InputField;
