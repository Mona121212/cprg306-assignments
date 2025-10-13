"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleItemNameChange = (event) => {
    console.dir(event.target.value);
    setName(event.target.value);
  };

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCategoryChange = (event) => setCategory(event.target.value);

  // form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // create item object
    const item = {
      Iname: name,
      Iquantity: quantity,
      Icategory: category,
    };

    console.log(item);

    // display alert
    alert(`Add item : ${name}, quantity: ${quantity}, category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  let buttonStyle =
    "w-8 p-1 bg-amber-600 text-white font-semibold rounded-full shadow-md hover:bg-amber-500 focus:outline-none";

  return (
    <form
      className="flex justify-center items-center m-100 w-full"
      onSubmit={handleSubmit}
    >
      <div>
        <input
          type="text"
          onChange={handleItemNameChange}
          value={name}
          required
          className="p-4 m-20 bg-gray-700 rounded-lg text-white w-40"
          placeholder="Item Name"
        />
      </div>
      <div className="p-4 m-20 bg-gray-700 rounded-lg text-white w-40">
        <div className="flex justify-between">
          <p className="text-blue-50 m-1"> {quantity}</p>
          <button type="button" className={buttonStyle} onClick={decrement}>
            -
          </button>
          <button type="button" className={buttonStyle} onClick={increment}>
            +
          </button>
        </div>

        {/**category field */}
        <div>
          <select value={category} onChange={handleCategoryChange}>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozenfoods">Frozen Foods</option>
            <option value="cannedgoods">Canned Goods</option>
            <option value="drygoods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <button type="submit">Submit Items</button>
        </div>
      </div>
      <div>
        <p>{name}</p>
        <p>{quantity}</p>
        <p>{category}</p>
      </div>
    </form>
  );
}
