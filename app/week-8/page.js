"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData || []);
  const [selectedItemName, setSelectedItemName] = useState("");
  //const [itemArray, setItemArray] = useState(
  //itemsData.map((item) => ({ ...item }))
  //);

  // add new item handler
  function handleAddItem(newItem) {
    setItems((prev) => [newItem, ...prev]);
  }

  function cleanNameForAPI(name) {
    return name
      .trim()
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, "");
  }

  function handleItemSelect(item) {
    const cleaned = cleanNameForAPI(item.name || "");
    if (!cleaned) return;
    console.log("Selected ingredient:", cleaned);
    setSelectedItemName(cleaned);
  }

  return (
    <main className="p-4 max-w-xl mx-auto">
      <div>
        <h1 className="text-2xl p-4">Shopping List</h1>
        <NewItem newItemFunc={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
