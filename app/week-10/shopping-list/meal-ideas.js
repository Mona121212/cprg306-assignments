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

async function fetchMealDetails(id) {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.meals ? data.meals[0] : null;
  } catch (err) {
    console.error("fetchMealDetails error:", err);
    return null;
  }
}
// fetch full meal details by id

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [details, setDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  async function loadMealIdeas(ing) {
    if (!ing) {
      setMeals([]);
      setSelectedMeal(null);
      setDetails(null);
      return;
    }

    setLoading(true);
    const result = await fetchMealIdeas(ing);
    setMeals(result || []);
    setSelectedMeal(null);
    setDetails(null);
    setLoading(false);
  }

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  async function handleSelectMeal(meal) {
    setSelectedMeal(meal);
    setLoadingDetails(true);
    const data = await fetchMealDetails(meal.idMeal);
    setDetails(data);
    setLoadingDetails(false);
  }
  function getIngredients(meal) {
    if (!meal) return;
    const list = [];
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ing && ing.trim()) {
        list.push(`${ing}${measure ? ` — ${measure}` : ""}`);
      }
    }
    return list;
  }
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

      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          {!loading && meals.length > 0 && (
            <ul className="min-h-[200px] md:w-[200px] gap-6">
              {meals.map((m) => (
                <li
                  key={m.idMeal}
                  onClick={() => handleSelectMeal(m)}
                  className={`flex items-center gap-3 p-2 rounded shadow-sm cursor-pointer ${
                    selectedMeal?.idMeal === m.idMeal
                      ? "bg-slate-100 ring-2 ring-slate-300"
                      : "hover:bg-slate-50"
                  }`}
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

        <aside className="rounder p-4 min-h-[150px] md:w-[500px]">
          {selectedMeal && (
            <div className="mt-6 pt-4 gap-6">
              {loadingDetails && <p>Loading meal details...</p>}
              {details && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {details.strMeal} ({details.strCategory})
                  </h3>
                  <img
                    src={details.strMealThumb}
                    alt={details.strMeal}
                    className="rounded mb-3"
                    width={200}
                  />
                  <h4 className="font-medium">Ingredients:</h4>
                  <ul className="list-disc pl-5 mb-3">
                    {getIngredients(details).map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                  <h4 className="font-medium">Instructions:</h4>
                  <p className="text-sm whitespace-pre-line">
                    {details.strInstructions}
                  </p>
                </div>
              )}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
