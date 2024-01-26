import useFetchAPI from "./FetchAPI";

function InputField() {
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for ${query}`);
  }
  return (
    <form onSubmit={search}>
      <input name="recipe" type="text" label="text" defaultValue="Search..." />
      <button type="submit">Search</button>
    </form>
  );
}

export default InputField;
