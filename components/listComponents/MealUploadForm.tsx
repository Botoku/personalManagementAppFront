"use client";
import React, { useState } from "react";
import axios from "axios";
type Props = {};

const MealUploadForm = (props: Props) => {
  const [mealName, setMealName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [recipeLinks, setRecipeLinks] = useState("");
  const [category, setCategory] = useState("breakfast");
  const createArray = (val: string) => {
    return val.split(", ");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const finalRecipeLinks = createArray(recipeLinks);
    const finalIngredients = createArray(ingredients);

    console.log(finalIngredients, finalRecipeLinks, mealName, category);
    axios
      .post(`http://localhost:4000/api/v1/meals`, {
        mealName,
        ingredients: finalIngredients.length > 1 && finalIngredients,
        recipeLinks: finalRecipeLinks.length > 1 && finalRecipeLinks,
        category,
      })
      .then((res) => {
        setMealName("");
        setRecipeLinks("");
        setCategory("");
        setIngredients("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Meal</label>
        <input
          className="text-black"
          type="text"
          name=""
          id=""
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Ingredients:</label>
        <input
          className="text-black"
          type="string"
          name=""
          id=""
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Recipes:</label>
        <input
          className="text-black"
          type="string"
          name=""
          id=""
          value={recipeLinks}
          onChange={(e) => setRecipeLinks(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Category</label>
        <select
          className="text-black"
          name="categories"
          id="categories"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="bake">Bake</option>
        </select>
      </div>

      <button type="submit">Create Meal</button>
    </form>
  );
};

export default MealUploadForm;
