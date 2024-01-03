import React from "react";
import { getData } from "@/components/helpers/getData";
import TodoUploadForm from "./TodoUploadForm";

type Props = {};

const Todo = async (props: Props) => {
  const data = await getData("http://localhost:4000/api/v1/todo");
  if(data.isLoading) return <div>Loading</div>
  console.log(data)
  return (
    <div>
     <TodoUploadForm />
      {data &&
        data.todos.map((todo: Todo) => (
          <div key={todo._id} className="my-3">
            <p>{todo.name}</p>
            {todo.completedStatus ? <p className="text-green-300">Completed</p> : <p className="text-red-300">Pending</p>}
          </div>
        ))}
    </div>
  );
};

export default Todo;
