"use client";
import React, { useContext } from "react";
import Todo from "../listComponents/Todo";
import Tobuy from "../listComponents/Tobuy";
import { ContentDisplayContext } from "../helpers/ContextProvider";
import Ideas from "../listComponents/Ideas";
import Meals from "../listComponents/Meals";
import Expenses from "../listComponents/Expenses";
type Props = {};

const Content = (props: Props) => {
  const { activeSection } = useContext(ContentDisplayContext);
  return (
    <div>
      {activeSection === "todo" && <Todo />}
      {activeSection === "tobuy" && <Tobuy />}
      {activeSection === "ideas" && <Ideas />}
      {activeSection === "meals" && <Meals />}
      {activeSection === "expenses" && <Expenses />}
    </div>
  );
};

export default Content;
