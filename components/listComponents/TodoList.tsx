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
  completedStatus?: Boolean;
  dateDue?: string;
};

const TodoList = () => {
  const [todos, setTodos] = useState({} as Props) ;
  useEffect(() => {
    const getTodos = async () => {
      const data = await axios.get("http://localhost:4000/api/v1/todo");

      setTodos(data);
    };
    getTodos();
  }, []);
  const [activeTodoEdit, setActiveTodoEdit] = useState("");
  const [todoEditName, setTodoEditName] = useState("");
  const [todoEditDate, setTodoEditDate] = useState("");
  const [editTodoId, setEditTodoId] = useState("");
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
  const handleTodoEditSubmit = (id: string) => {
    const editObj: ObjProps = {};

    if (todoEditName.length > 1) editObj.name = todoEditName;
    if (todoEditDate.length > 1) editObj.dateDue = todoEditDate;
    console.log(editObj);
    axios
      .patch(`http://localhost:4000/api/v1/todo/${id}`, editObj)
      .then(function (response) {
        // handle success
        setTodoEditDate("");
        setTodoEditName("");
        window.location.reload();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // setActiveTodoEdit(!activeTodoEdit)
  };
  const handleActiveTodoEdit = (id: string) => {
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
            <button onClick={() => handleTodoEditSubmit(todo._id as string)}>
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

                <label htmlFor="completed">Completed?</label>
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
