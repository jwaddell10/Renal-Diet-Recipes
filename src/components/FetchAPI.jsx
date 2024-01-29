import { useState } from "react";

const APP_ID = "07219864";
const APP_key = "f83320eb349bdebfd72d4be76b29e58f";

const useFetchAPI = ({ formData }) => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const searchQuery = formData.title;
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}`,
        {
          mode: "cors",
        }
      );

      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }

      let data = await response.json();
      setItems(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setItems(null);
    } finally {
      setLoading(false);
    }
  };

  return { items, error, loading, getData };
};

export default useFetchAPI;
