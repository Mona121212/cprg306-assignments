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
    "w-10 h-10 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition disabled:opacity-50 disabled:cursor-not-allowed";

  let inputStyle =
    "w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition";

  return (
    <form
      className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-8 space-y-6"
      onSubmit={handleSubmit}
    >
      <div>
        <input
          type="text"
          onChange={handleItemNameChange}
          value={name}
          required
          className={inputStyle}
          placeholder="Item Name"
        />
      </div>
      <div className="block text-m font-medium text-emerald-400 mb-3 text-center">
        <div>
          <div>
            <p className=" block text-m font-medium text-gray-300 mb-2">
              {quantity}
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4 bg-gray-700 rounded-lg p-4">
            <button type="button" className={buttonStyle} onClick={decrement}>
              -
            </button>
            <button type="button" className={buttonStyle} onClick={increment}>
              +
            </button>
          </div>
        </div>

        {/**category field */}
        <div className="block text-sm font-medium text-gray-300 mb-2">
          <select
            value={category}
            onChange={handleCategoryChange}
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition cursor-pointer"
          >
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
          <button
            type="submit"
            className="w-full py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition shadow-lg"
          >
            +
          </button>
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
