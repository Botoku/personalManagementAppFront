"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type MealsProps = {
  data: {
    meals: Meal[];
  };
};

const MealList = () => {
  useEffect(() => {
    const getAllMeals = async () => {
      const data = await axios.get("http://localhost:4000/api/v1/meals");
      setMeals(data);
    };
    getAllMeals();
  }, []);
  const [meals, setMeals] = useState({} as MealsProps);
  console.log(meals);
  return (
    <div >
       {meals?.data?.meals.map((meal: Meal) => (
        <div key={meal._id} className="my-5">
          <p>{meal.mealName}</p>
          <div className="flex">
            <p>Ingredients:</p>
            {meal.ingredients && meal.ingredients.length > 1 && meal.ingredients?.map((ingredient) => (
              <p
                className="bg-blue-400 w-max px-3 py-2 rounded-lg"
                key={ingredient}
              >
                {ingredient}
              </p>
            ))}
          </div>

          <div className="flex">
            <p>Recipes:</p>
            {meal.recipeLinks && meal.recipeLinks.length > 1 && meal.recipeLinks?.map((recipe) => (
              <p
                className="bg-blue-400 w-max px-3 py-2 rounded-lg"
                key={recipe}
              >
                {recipe}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealList;
