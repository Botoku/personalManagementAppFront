"use client";
import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
type Props = {};

const TodoUploadForm = (props: Props) => {
  const { user } = useUser();
  const [theDate, setTheDate] = useState(new Date());
  const [todo, setTodo] = useState("");
  const handleSubmit = () => {
    if (user?.id)
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL}/todo`,
          {
            name: todo,
            dateDue: theDate,
            authorID: user?.id,
          }
        )
        .then(function (response) {
          // handle success
          setTheDate(new Date());
          setTodo("");
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <p className="mr-3">New Todo</p>

      <div className="">
        <div className="relative h-11 w-full min-w-[200px]">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Todo"
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          />
          <label className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Todo
          </label>
        </div>

        <div className="my-6">
          <label className="mr-3">Date Due</label>

          <Flatpickr
            className="text-red-300"
            value={theDate}
            onChange={([date]: Date[]) => {
              setTheDate(date);
            }}
          />
        </div>

        <button className="bg-purple-300 px-3 py-2 rounded-2xl text-black">
          Create Todo
        </button>
      </div>
    </form>
  );
};

export default TodoUploadForm;
