"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
type TobuyProps = {
  data: {
    tobuy: ToBuy[];
  };
};
type ObjProps = {
  category?: string;
  estimatedPrice?: string;
  itemToBuy?: string;
  boughtStatus?: boolean;
};

const TobuyList = () => {
  const [toBuy, setTobuy] = useState({} as TobuyProps);
  const [activeToBuyEdit, setActiveToBuyEdit] = useState("");
  const [tobuyEditName, setTobuyEditName] = useState("");
  const [tobuyEditPrice, setTobuyEditPrice] = useState("");
  const [tobuyEditCategory, setTobuyEditCategory] = useState("");

  const [tobuyEditChecked, setTobuyEditChecked] = useState<unknown | boolean>();

  useEffect(() => {
    const getTobuy = async () => {
      const data = await axios.get("http://localhost:4000/api/v1/tobuy");
      setTobuy(data);
    };
    getTobuy();
  }, []);
  const handleToBuyEditSubmit = (id: string) => {
    const editObj: ObjProps = {};

    if (tobuyEditName.length > 1) editObj.itemToBuy = tobuyEditName;
    if (tobuyEditPrice.length > 0) editObj.estimatedPrice = tobuyEditPrice;
    if (tobuyEditCategory.length > 1) editObj.category = tobuyEditCategory;
    // if (todoEditChecked) editObj.completedStatus = !completedStatus;

    console.log(editObj);
    axios
      .patch(`http://localhost:4000/api/v1/tobuy/${id}`, editObj)
      .then(function (response) {
        // handle success
        setTobuyEditCategory('')
        setTobuyEditName('')
        setTobuyEditPrice('')
        window.location.reload();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const handleTobuyDelete = (id: string) => {
    axios
      .delete(`http://localhost:4000/api/v1/tobuy/${id}`)
      .then((response) => {
        console.log(`Deleted tobuy with ID ${id}`);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      {toBuy?.data?.tobuy.map((tobuyy: ToBuy) => (
        <div className="my-3" key={tobuyy._id}>
          <p>{tobuyy.itemToBuy}</p>
          <p>{tobuyy.estimatedPrice}</p>
          <p>
            Category: {tobuyy.category[0].toUpperCase()}
            {tobuyy.category.slice(1)}
          </p>
          <div>
            {tobuyy.boughtStatus ? (
              <p className="text-green-300">Already Bought</p>
            ) : (
              <p className="text-red-300">Yet To Buy</p>
            )}
          </div>

          <div>
            {activeToBuyEdit && activeToBuyEdit === tobuyy._id ? (
              <button
                onClick={() => handleToBuyEditSubmit(tobuyy._id as string)}
              >
                Submit To Buy Edit
              </button>
            ) : (
              <button onClick={() => setActiveToBuyEdit(tobuyy._id as string)}>
                Edit To Buy
              </button>
            )}
            {activeToBuyEdit && activeToBuyEdit === tobuyy._id && (
              <form
                onSubmit={() => handleToBuyEditSubmit(tobuyy._id as string)}
              >
                <input
                  type="text"
                  value={tobuyEditName}
                  onChange={(e) => setTobuyEditName(e.target.value)}
                />
                <input
                  className="text-black"
                  type="number"
                  name=""
                  id=""
                  value={tobuyEditPrice}
                  onChange={(e) => setTobuyEditPrice(e.target.value)}
                />
                <div>
                  <label htmlFor="">Category</label>
                  <select
                    className="text-black"
                    name="categories"
                    id="categories"
                    onChange={(e) => setTobuyEditCategory(e.target.value)}
                  >
                    <option value="home">Home</option>
                    <option value="food">Food</option>
                    <option value="baby">Baby</option>
                    <option value="pets">Pets</option>
                    <option value="general">General</option>
                    <option value="paola">Paola</option>
                    <option value="jide">Jide</option>
                  </select>
                </div>

                <label htmlFor="completed">
                  {tobuyy.boughtStatus ? (
                    <p>Mark Incomplete</p>
                  ) : (
                    <p>Mark Completed</p>
                  )}
                </label>
                <div
                  onClick={() => setTobuyEditChecked(!tobuyEditChecked)}
                  className={`w-4 h-4 rounded-full  ${
                    tobuyEditChecked
                      ? "bg-red-400 border-white"
                      : "bg-white border-black"
                  }`}
                ></div>
              </form>
            )}
          </div>

          <button
            onClick={() => handleTobuyDelete(tobuyy._id as string)}
            className="bg-red-300"
          >
            Delete Tobuy
          </button>
        </div>
      ))}
    </div>
  );
};

export default TobuyList;
