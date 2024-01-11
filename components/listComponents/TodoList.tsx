"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

type Props = {
  data: {
    todos: [
      {
        _id: React.Key | string;
        name: String;
        dateCreated?: String;
        completedStatus: Boolean;
        dateDue: Date;
      }
    ];
  };
};
type ObjProps = {
  name?: string;
  dateCreated?: String;
  completedStatus?: boolean | unknown;
  dateDue?: string;
};

const TodoList = () => {
  useEffect(() => {
    const getTodos = async () => {
      const data = await axios.get("http://localhost:4000/api/v1/todo");

      setTodos(data);
    };
    getTodos();
  }, []);
  const [todos, setTodos] = useState({} as Props);
  const [activeTodoEdit, setActiveTodoEdit] = useState("");
  const [todoEditName, setTodoEditName] = useState("");
  const [todoEditDate, setTodoEditDate] = useState("");
  const [todoEditCheckedValue, setTodoEditCheckedValue] = useState<
    unknown | Boolean
  >();
  const [todoEditChecked, setTodoEditChecked] = useState(false);
  const handleTodoDelete = (id: string) => {
    axios
      .delete(`http://localhost:4000/api/v1/todo/${id}`)
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
      .patch(`http://localhost:4000/api/v1/todo/${id}`, editObj)
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
    todos?.data?.todos &&
    todos.data.todos.map((todo: Todo) => (
      <div key={todo._id} className="my-3">
        <p>{todo.name}</p>
        {todo.completedStatus ? (
          <p className="text-green-300">Completed</p>
        ) : (
          <p className="text-red-300">Pending</p>
        )}

        <div>
          {activeTodoEdit && activeTodoEdit === todo._id ? (
            <button
              onClick={() =>
                handleTodoEditSubmit(todo._id as string, todo.completedStatus)
              }
            >
              Submit Todo Edit
            </button>
          ) : (
            <button onClick={() => handleActiveTodoEdit(todo._id as string)}>
              Edit Todo
            </button>
          )}
          {activeTodoEdit && activeTodoEdit === todo._id && (
            <form>
              <div>
                <input
                  value={todoEditDate}
                  onChange={(e) => setTodoEditDate(e.target.value)}
                  type="date"
                  name=""
                  id=""
                  className="text-black"
                />
                <input
                  value={todoEditName}
                  onChange={(e) => setTodoEditName(e.target.value)}
                  type="text"
                  name=""
                  id=""
                  className="text-black"
                />

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
              <button onClick={() => setActiveTodoEdit("")}>Cancel Edit</button>
            </form>
          )}
        </div>
        <p>Date Due: {new Date(todo.dateDue).toLocaleDateString()}</p>

        <button
          onClick={() => handleTodoDelete(todo._id as string)}
          className="bg-red-300"
        >
          Delete Todo
        </button>
      </div>
    ))
  );
};

export default TodoList;
