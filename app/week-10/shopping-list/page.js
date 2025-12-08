"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import {
  getItems,
  addItem,
  ensureUserDoc,
} from "../_services/shopping-list-service";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  useEffect(() => {
    if (!user) return;
    const loadItems = async () => {
      try {
        await ensureUserDoc(user.uid);
        const data = await getItems(user.uid);
        setItems(data);
      } catch (err) {
        console.error("Failed to load items:", err);
      }
    };
    loadItems();
  }, [user]);

  if (!user) {
    return <main>Please sign in to view your shopping list.</main>;
  }

  //const [itemArray, setItemArray] = useState(
  //itemsData.map((item) => ({ ...item }))
  //);

  // add new item handler
  async function handleAddItem(newItem) {
    try {
      const id = await addItem(user.uid, newItem);
      const itemWithId = { id, ...newItem };
      setItems((prev) => [itemWithId, ...prev]);
    } catch (err) {
      console.error("Failed to add item:", err);
      alert("Failed to add item. Please check Firestore rules & data format.");
    }
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
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="md: w-1/2">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}
