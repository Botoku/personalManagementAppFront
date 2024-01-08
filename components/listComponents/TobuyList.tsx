"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
type TobuyProps = {
    data : {
        tobuy:ToBuy[]
    }
}

const TobuyList = () => {
  useEffect(() => {
    const getTobuy = async () => {
      const data = await axios.get("http://localhost:4000/api/v1/tobuy");
      setTobuy(data);
    };
    getTobuy();
  }, []);
  const [toBuy, setTobuy] = useState({} as TobuyProps);
  return <div>
    {toBuy?.data?.tobuy.map((tobuyy: ToBuy) =>(
        <div className="my-3" key={tobuyy._id}>
            <p>{tobuyy.itemToBuy}</p>
            <p>{tobuyy.estimatedPrice}</p>
            <p>Category: {tobuyy.category[0].toUpperCase()}{tobuyy.category.slice(1)}</p>
        </div>
    ))}
  </div>;
};

export default TobuyList;
