"use client";
import React, { useState } from "react";
import Flatpickr from "react-flatpickr";

import axios from "axios";
type Props = {};

const ExpenseUploadForm = (props: Props) => {
  const [expenseName, setExpenseName] = useState("");
  const [theDate, setTheDate] = useState(new Date());
  const [location, setLocation] = useState('');

  const [amount, setAmount] = useState<number>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL_REMOTE}/expenses`, {
        expenseName,
        amount,
        date: theDate,
        location
      })
      .then((res) => {
        setExpenseName('')
        setAmount(0)
        setLocation('')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Expense</label>
        <input
          className="text-black"
          type="text"
          name=""
          id=""
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Amount Spent</label>
        <input
          className="text-black"
          type="number"
          name=""
          id=""
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
      </div>
      <div className="my-6">
          <label className="mr-3">Date:</label>

          <Flatpickr
            className="text-red-300"
            value={theDate}
            onChange={([date]: Date[]) => {
              console.log(date)
            }}
          />
        </div>
        <div>
        <label htmlFor="">Location</label>
        <input
          className="text-black"
          type="text"
          name=""
          id=""
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>


      <button type="submit">Save Expense</button>
    </form>
  );
};

export default ExpenseUploadForm;
