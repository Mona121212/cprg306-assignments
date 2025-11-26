"use client";
import React from "react";

export default function Item({ item, onSelect }) {
  if (!item) return null;
  const { name, quantity, category } = item;
  return (
    <li
      role="button"
      tabIndex={0}
      onClick={() => onSelect && onSelect(item)}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && onSelect(item));
      }}
      className="flex items-center p-4 bg-slate-200 max-w-sm m-2"
      aria-label={`Select ${name}`}
    >
      <div className="flex-1">
        <div className="text-lg font-semibold ml-4">{name}</div>
        <div className="text-lg font-semibold ml-4 ">
          Buy {quantity} in {category}
        </div>
      </div>
    </li>
  );
}
