import React from "react";
import { getData } from "@/components/helpers/getData";
import TodoUploadForm from "./TodoUploadForm";
import axios from "axios";
import TodoList from "./TodoList";

type Props = {};


const Todo = async (props: Props) => {
  const data = await getData("http://localhost:4000/api/v1/todo");
  if (data.isLoading) return <div>Loading</div>;

  console.log(data);
  return (
    <div>
      <TodoUploadForm />
      <TodoList renderData={data}/>

    </div>
  );
};

export default Todo;
