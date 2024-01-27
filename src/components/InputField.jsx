import { useState } from "react";
import useFetchAPI from "./FetchAPI";
import RecipeFilters from "./RecipeFilters";

//need to somehow take the value from this search, and hand it to the fetchapi

//maybe pass this state up? 

const InputField = () => {
  const [formData, setFormData] = useState({
    title: "",
  });
  console.log(formData, 'this is formdata')

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
