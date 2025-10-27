"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData || []);
  //const [itemArray, setItemArray] = useState(
  //itemsData.map((item) => ({ ...item }))
  //);

  // add new item handler
  const handleAddItem = (item) => {
    setItems((prevItems) => {
      const nextItems = [...prevItems, item];

      nextItems.sort((a, b) => (a.name ?? "").localeCompare(b.name ?? ""));
      return nextItems;
    });
  };

  return (
    <main className="p-4 max-w-xl mx-auto">
      <div>
        <h1 className="text-2xl p-4">Shopping List</h1>
        <NewItem newItemFunc={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
