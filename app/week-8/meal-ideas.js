"use client";

import React, { useState, useEffect } from "react";

export async function fetchMealIdeas(ingredient) {
  if (!ingredient) return;
  const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  try {
    const res = await fetch(endpoint);
    if (!res.ok) {
      console.error("MealDB fetch failed:", res.status);
      return [];
    }

    const data = await res.json();
    return data.meals || [];
  } catch (err) {
    console.error("fetchMealIdeas error:", err);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadMealIdeas(ing) {
    if (!ing) {
      setMeals([]);
      return;
    }

    setLoading(true);
    const result = await fetchMealIdeas(ing);
    setMeals(result);
    setLoading(false);
  }

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">
        Meal ideas {ingredient ? `for "${ingredient}"` : ""}
      </h2>

      {loading && <p>Loading meal ideas...</p>}

      {!loading && !ingredient && <p>Select an item to see meal ideas.</p>}

      {!loading && ingredient && meals.length === 0 && (
        <p>No meals found for that ingredient.</p>
      )}

      {!loading && meals.length > 0 && (
        <ul className="grid grid-cols-1 gap-3">
          {meals.map((m) => (
            <li
              key={m.idMeal}
              className="flex items-center gap-3 p-2 rounded shadow-sm"
            >
              <img
                src={m.strMealThumb}
                alt={m.strMeal}
                width={64}
                height={64}
                style={{ objectFit: "cover", borderRadius: 6 }}
              />
              <div>
                <div className="font-medium">{m.strMeal}</div>
                <div className="text-sm text-slate-500">
                  Meal ID: {m.idMeal}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
