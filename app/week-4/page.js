"use client";

import { useState } from "react";
export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

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

  let buttonStyle =
    "w-8 p-1 bg-amber-600 text-white font-semibold rounded-full shadow-md hover:bg-amber-500 focus:outline-none";

  return (
    <main className="flex justify-center items-center m-100 w-full">
      <div className="p-4 m-20 bg-gray-700 rounded-lg text-white w-40">
        <div className="flex justify-between">
           <p className="text-blue-50 m-1"> {quantity}</p>
          <button className={buttonStyle} onClick={decrement}>
          -
        </button>
        <button className={buttonStyle} onClick={increment}>
          +
        </button>
       </div>
      
      </div>
    </main>
  );
}
