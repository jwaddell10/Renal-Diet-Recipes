import useFetchAPI from "./FetchAPI";
import RecipeFilters from "./RecipeFilters";

function InputField() {
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for ${query}`);
  }
  return (
    <div>   
        <form onSubmit={search}>
      <input name="recipe" type="text" label="text" defaultValue="Search..." />
      <button type="submit">Search</button>
    </form>
    <RecipeFilters />
    </div>
    
  );
}

export default InputField;
