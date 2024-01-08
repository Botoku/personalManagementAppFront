import React from "react";
import { getData } from "@/components/helpers/getData";
import TodoUploadForm from "./TodoUploadForm";
import axios from "axios";
import TodoList from "./TodoList";

type Props = {};

const Todo = (props: Props) => {



  return (
    <div>
      <TodoUploadForm />
      <TodoList />
    </div>
  );
};

export default Todo;
