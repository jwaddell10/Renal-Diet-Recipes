import PropTypes from "prop-types";
import useFetchAPI from "./FetchAPI.jsx";

const InputField = ({ formData, setFormData, setItemsFromInputField, filters, setFilters }) => {
  const { getData, items } = useFetchAPI({ formData, filters });
  const handleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, title: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.toLowerCase() === "star fruit") {
      console.log("error this is starfruit");
      return;
    }
    getData();
    setItemsFromInputField(items)
    // setFormData((prevData) => ({ ...prevData, title: e.target.value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChange}
          value={formData.title}
          type="text"
          name="title"
          id="title"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

InputField.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  setItemsFromInputField: PropTypes.func,
  filters: PropTypes.func,
};

export default InputField;
