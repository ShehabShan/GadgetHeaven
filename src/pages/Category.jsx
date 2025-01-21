import { NavLink } from "react-router-dom";

const Category = ({ category, handleCategoryChange, selectedCategory }) => {
  return (
    <div>
      <button
        onClick={() => handleCategoryChange(category)}
        className={`btn  w-[140px] flex mt-5 ${
          selectedCategory === category ? "bg-[#8f37d7] text-white" : ""
        }`}
      >
        {category}
      </button>
    </div>
  );
};

export default Category;
