import React, {useState} from "react";

  
  function SearchBar({setCategorySelected, setCheckValue }) {
    const [isChecked, setIsChecked] = useState(false) 

  function handleSelectCategory(e){
    setCategorySelected(e.target.value)
  }

  function handleChecked(){
    setIsChecked(!isChecked)
  }
  
  function handleRadioButton(e){
    setCheckValue(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={isChecked ? handleChecked : null}
          onChange={handleRadioButton}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={isChecked ? handleChecked : null}
          onChange={handleRadioButton}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleSelectCategory}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
