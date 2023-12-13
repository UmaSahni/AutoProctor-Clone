import React, { useState } from "react";

const Categorize = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [items, setItems] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const handleDeleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const handleAddItem = () => {
    setItems([...items, ""]); // Add an empty string as a placeholder for a new item
    setSelectedCategories([...selectedCategories, ""]); // Add a placeholder for the new item's selected category
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);

    const updatedSelectedCategories = [...selectedCategories];
    updatedSelectedCategories.splice(index, 1);
    setSelectedCategories(updatedSelectedCategories);
  };

  const handleItemChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = value;
    setItems(updatedItems);
  };

  const handleCategoryChange = (index, e) => {
    const updatedSelectedCategories = [...selectedCategories];
    updatedSelectedCategories[index] = e.target.value;
    setSelectedCategories(updatedSelectedCategories);
  };

  return (
    <div>
      <h2 className="text-lg font-bold m-4 mr-0">Categorize Editor</h2>
      <input
        className="w-1/2 p-2 border"
        placeholder="Description (Optional) "
      />
      <div>
        <h3>Categories</h3>
        {categories.map((category, index) => (
          <div key={index} className="flex items-center">
            <span>{category}</span>
            <button
              onClick={() => handleDeleteCategory(index)}
              className="ml-2 p-2 text-red-500"
            >
              x
            </button>
          </div>
        ))}
        <div className="mt-2">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New Category"
            className="w-1/2 p-2 border"
          />
          <button
            onClick={handleAddCategory}
            className="ml-2 p-2 bg-blue-500 text-white"
          >
            Add Category
          </button>
        </div>

        {/* Items section */}
        <div className="mt-4">
          <button
            onClick={handleAddItem}
            className="p-2 bg-green-500 text-white"
          >
            Add Item
          </button>
          {items.map((item, index) => (
            <div key={index} className="mt-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleItemChange(index, e.target.value)}
                placeholder={`Item ${index + 1}`}
                className="w-1/4 p-2 border"
            
              />
              {/* Select for Categories */}
              <select
                className="w-1/4 p-2 border mt-2"
                value={selectedCategories[index]}
                onChange={(e) => handleCategoryChange(index, e)}
              >
                <option value="">Select Category</option>
                {categories.map((category, categoryIndex) => (
                  <option key={categoryIndex} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorize;
