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
    "bg-pink-200 text-white hover:bg-fuchsia-600 active:bg-amber-600 p-4 m-4 cursor-pointer";

  return (
    <main>
      <p> {quantity}</p>
      <button className={buttonStyle} onClick={decrement}>
        {" "}
        -{" "}
      </button>
      <button className={buttonStyle} onClick={increment}>
        {" "}
        +{" "}
      </button>
    </main>
  );
}
