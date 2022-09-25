import React from "react";

function CategoryFilter({categories, selectedCategory, selectingCategory}) {
  const clickBtn = categories.map((category) =>{
    const className = category === selectedCategory ? "selected" : null
      return (
      <button 
      key={category}
      className={className}
      onClick={() => selectingCategory(category)}>
        {category} 
      </button>
      )
    })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {clickBtn}
    </div>
  );
}

export default CategoryFilter;
