import React from "react";
import "./NumberInput.css"; // Optional: if you want to add custom styles

const NumberInput = ({ value, setValue }) => {
  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      setValue(newValue);
    }
  };

  return (
    <div className="number-input">
      <button onClick={decrement}>-</button>
      <input type="number" value={value} onChange={handleChange} />
      <button onClick={increment}>+</button>
    </div>
  );
};

export default NumberInput;
