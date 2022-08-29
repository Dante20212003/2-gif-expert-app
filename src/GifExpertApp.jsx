import { useState } from "react";
import Error from "./components/Error";
import { GifGrid, FormGif } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Drangon Ball"]);
  const [error, setError] = useState("");

  const onAddCategory = (value) => {
    setCategories([...categories, value]);
  };

  const handleError = (err) => {
    setError(err);
  };

  const deleteCategory = (value) => {
    const newData = categories.filter((category) => category !== value);
    setCategories(newData);
  };

  return (
    <div className="container">
      <h1>GifExpertApp</h1>

      <FormGif
        onAddCategory={onAddCategory}
        categories={categories}
        handleError={handleError}
      />

      {error && <Error message={error} />}

      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
          deleteCategory={deleteCategory}
        />
      ))}
    </div>
  );
};

export default GifExpertApp;
