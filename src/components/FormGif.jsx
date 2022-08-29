import { useState } from "react";

const FormGif = ({ onAddCategory, categories, handleError }) => {
  const [category, setCategory] = useState("");

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleError("");

    if (category.trim().length === 0) {
      handleError("Please enter a category");
      return;
    }
    if (categories.includes(category.trim())) {
      handleError("You have this category already");
      return;
    }

    onAddCategory(category.trim());
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Busca Gifs"
        value={category}
        onChange={onChangeCategory}
      />
    </form>
  );
};

export default FormGif;
