"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { sortByDate } from "../helpers/sortHelpers";

type ExpensesProps = [];

const ExpensesList = () => {
  const { user } = useUser();

  useEffect(() => {
    const getExpenes = async () => {
      if (user) {
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL || process.env.NEXT_PUBLIC_BACKEND_URL_REMOTE}/expenses/${user.id}`,
        );
        console.log(data)
        const sorted = sortByDate(data.data.expenses, "date", "dsc");
        setExpenses(sorted);
      }
    };
    getExpenes();
  }, [user]);
  const [expenses, setExpenses] = useState([] as ExpensesProps);
  return (
    <div>
      {expenses?.map((exp: Expense) => (
        <div className="my-3" key={exp._id}>
          <p>{exp.expenseName}</p>
          <p>{exp.amount.toString()} pesos</p>
          <p>Location: {exp.location}</p>
          <p>Date: {new Date(exp.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpensesList;
