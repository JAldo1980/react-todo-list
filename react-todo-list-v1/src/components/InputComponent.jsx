import React from "react";

const InputComponent = ({ handleAddItem, handleChange, inputValue }) => {
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Please add an item..."
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </>
  );
};

export default InputComponent;
