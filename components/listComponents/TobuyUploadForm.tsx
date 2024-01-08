"use client";
import React, { useState } from "react";
import axios from "axios";
type Props = {};

const TobuyUploadForm = (props: Props) => {
  const [itemToBuyValue, setItemToBuyValue] = useState("");
  const [itemCostValue, setItemCostValue] = useState(0);
  const [category, setCategory] = useState('home')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(itemCostValue, itemToBuyValue, category)
    axios
      .post(`http://localhost:4000/api/v1/tobuy`, {
        itemToBuy: itemToBuyValue,
        estimatedPrice: `${itemCostValue} pesos`,
        category
      })
      .then(res=>{
        setItemCostValue(0)
        setItemToBuyValue('')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="">Item To Buy</label>
        <input className="text-black" type="text" name="" id="" value={itemToBuyValue} onChange={(e) => setItemToBuyValue(e.target.value)} />
    </div>
    <div>
        <label htmlFor="">Price</label>
        <input className="text-black" type="number" name="" id="" value={itemCostValue}  onChange={(e) => setItemCostValue(+e.target.value)} />
    </div>
    <div>
        <label htmlFor="">Category</label>
        <select className="text-black" name="categories" id="categories" onChange={e => setCategory(e.target.value)}>
            <option value="home">Home</option>
            <option value="food">Food</option>
            <option value="baby">Baby</option>
            <option value="pets">Pets</option>
            <option value="general">General</option>
            <option value="paola">Paola</option>
            <option value="jide">Jide</option>
        </select>
    </div>
    <button type="submit">Create To Buy</button>
  </form>;
};

export default TobuyUploadForm;
