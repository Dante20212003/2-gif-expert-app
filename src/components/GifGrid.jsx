import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";
import Spiner from "./Spiner";

const GifGrid = ({ category, deleteCategory }) => {
  const { images, isLoading, handleSelectChange } = useFetchGifs(category);

  return (
    <div className="data">
      <div className="category-header">
        <h3>{category}</h3>
        <div className="buttons-container">
          <select defaultValue={"20"} onChange={handleSelectChange}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>

          <span className="btn-delete" onClick={() => deleteCategory(category)}>
            x
          </span>
        </div>
      </div>

      <div className={`card-grid ${isLoading && "test"}`}>
        {isLoading ? (
          <Spiner />
        ) : (
          images.map((image) => <GifItem key={image.id} {...image} />)
        )}
      </div>
    </div>
  );
};

export default GifGrid;
