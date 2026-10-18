"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { sortByDate } from "../helpers/sortHelpers";
type Props = {
  _id: React.Key | string;
  name: String;
  dateCreated?: String;
  completedStatus: Boolean;
  dateDue: Date;
}[];

type ObjProps = {
  name?: string;
  dateCreated?: String;
  completedStatus?: boolean | unknown;
  dateDue?: string;
};

const TodoList = () => {
  const { user } = useUser();

  useEffect(() => {
    const getTodos = async () => {
      if (user) {
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL || process.env.NEXT_PUBLIC_BACKEND_URL_REMOTE}/todo/${user.id}`,
        );

        const sortedArr = sortByDate(data.data.todos);

        setTodos(sortedArr);
      }
    };
    getTodos();
  }, [user]);
  const [todos, setTodos] = useState([] as Props);
  const [activeTodoEdit, setActiveTodoEdit] = useState("");
  const [todoEditName, setTodoEditName] = useState("");
  const [todoEditDate, setTodoEditDate] = useState("");
  const [todoEditCheckedValue, setTodoEditCheckedValue] = useState<
    unknown | Boolean
  >();
  const [todoEditChecked, setTodoEditChecked] = useState(false);
  const handleTodoDelete = (id: string) => {
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL || process.env.NEXT_PUBLIC_BACKEND_URL_REMOTE}/todo/${id}`,
      )
      .then((response) => {
        console.log(`Deleted post with ID ${id}`);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleTodoEditSubmit = (id: string, completedStatus: Boolean) => {
    const editObj: ObjProps = {};

    if (todoEditName.length > 1) editObj.name = todoEditName;
    if (todoEditDate.length > 1) editObj.dateDue = todoEditDate;
    if (todoEditChecked) editObj.completedStatus = !completedStatus;

    console.log(editObj);
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL || process.env.NEXT_PUBLIC_BACKEND_URL_REMOTE}/todo/${id}`,
        editObj,
      )
      .then(function (response) {
        // handle success
        setTodoEditDate("");
        setTodoEditName("");
        setTodoEditCheckedValue(null!);
        window.location.reload();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const handleActiveTodoEdit = (id: string) => {
    setTodoEditChecked(false);
    setActiveTodoEdit(id);
  };

  return (
    todos &&
    todos.map((todo: Todo) => (
      <div key={todo._id} className="mb-6 px-1 border-b pb-1 ">
        <p>{todo.name}</p>
        {todo.completedStatus ? (
          <p className="text-green-300">Completed</p>
        ) : (
          <p className="text-red-300">Pending</p>
        )}

        <div>
          {activeTodoEdit && activeTodoEdit === todo._id ? (
            <button
              className="border rounded text-green-300 px-2"
              onClick={() =>
                handleTodoEditSubmit(todo._id as string, todo.completedStatus)
              }
            >
              Submit Todo Edit
            </button>
          ) : (
            <button
              className="border px-2 rounded"
              onClick={() => handleActiveTodoEdit(todo._id as string)}
            >
              Edit Todo
            </button>
          )}
          {activeTodoEdit && activeTodoEdit === todo._id && (
            <form>
              <div>
                <div className="mb-2">
                  <label htmlFor="newDate">New Due Date</label>
                  <input
                    value={todoEditDate}
                    onChange={(e) => setTodoEditDate(e.target.value)}
                    type="date"
                    name=""
                    id="newDate"
                    className="text-black"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="newTaskName">New Task Name</label>

                  <input
                    value={todoEditName}
                    onChange={(e) => setTodoEditName(e.target.value)}
                    type="text"
                    name=""
                    id="newTaskName"
                    className="text-black"
                  />
                </div>

                <div className="flex items-center gap-3 my-2">
                  <label htmlFor="completed">
                    {todo.completedStatus ? (
                      <p>Mark Incomplete</p>
                    ) : (
                      <p>Mark Completed</p>
                    )}
                  </label>
                  <div
                    onClick={() => setTodoEditChecked(!todoEditChecked)}
                    className={`w-4 h-4 rounded-full  ${
                      todoEditChecked
                        ? "bg-red-400 border-white"
                        : "bg-white border-black"
                    }`}
                  ></div>
                </div>
              </div>
              <button
                className="border px-2 rounded"
                onClick={() => setActiveTodoEdit("")}
              >
                Cancel Edit
              </button>
            </form>
          )}
        </div>
        <p>Date Due: {new Date(todo.dateDue).toLocaleDateString()}</p>

        <button
          onClick={() => handleTodoDelete(todo._id as string)}
          className="bg-red-300 rounded px-2"
        >
          Delete Todo
        </button>
      </div>
    ))
  );
};

export default TodoList;
