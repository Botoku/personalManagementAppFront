"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

type ExpensesProps = {
  data: {
    expenses: Expense[];
  };
};

const ExpensesList = () => {
  const { user } = useUser();

  useEffect(() => {
    const getExpenes = async () => {
      if (user) {
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL}/expenses/${user.id}`
        );
        setExpenses(data);
      }
    };
    getExpenes();
  }, [user]);
  const [expenses, setExpenses] = useState({} as ExpensesProps);
  return (
    <div>
      {expenses?.data?.expenses.map((exp: Expense) => (
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
