"use client";
import Item from "./item";
import { useState } from "react";
import itemsData from "./item.json";

export default function ItemList({ items = [] }) {
  const [sortBy, setSortBy] = useState("name");

  //let itemsArray = itemsData.map((it) => ({ ...it }));
  let itemsArray = [...items];
  if (sortBy === "name") {
    itemsArray.sort((a, b) => {
      const nameA = String(a.name ?? "").toUpperCase();
      const nameB = String(b.name ?? "").toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  } else if (sortBy === "category") {
    itemsArray.sort((a, b) => {
      const catA = String(a.category ?? "").toUpperCase();
      const catB = String(b.category ?? "").toUpperCase();

      if (catA < catB) return -1;
      if (catA > catB) return 1;
      return 0;
    });
  }

  const activeStyle = {
    backgroundColor: "#111827",
    color: "#fff",
    padding: "6px 10px",
    borderRaius: "6px",
  };
  const inactiveStyle = {
    backgroundColor: "#e5e7eb",
    color: "#111827",
    padding: "6px 10px",
    borderRaius: "6px",
  };

  return (
    <section>
      <div>
        <span>Sort by: </span>
        <button
          type="button"
          onClick={() => setSortBy("name")}
          aria-pressed={sortBy === "name"}
          style={sortBy === "name" ? activeStyle : inactiveStyle}
        >
          Name
        </button>

        <button
          type="button"
          onClick={() => setSortBy("category")}
          aria-pressed={sortBy === "category"}
          style={sortBy === "category" ? activeStyle : inactiveStyle}
        >
          Category
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {itemsArray.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
