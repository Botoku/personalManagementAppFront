"use client";
import React, { useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

type Props = {};

const IdeaUploadForm = (props: Props) => {
  const { user } = useUser();

  const [ideaName, setIdeaName] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL_REMOTE}/ideas`, {
        ideaName,
        authorID: user?.id,

      })
      .then((res) => {
        setIdeaName('')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Idea Name</label>
        <input
          className="text-black"
          type="text"
          name=""
          id=""
          value={ideaName}
          onChange={(e) => setIdeaName(e.target.value)}
        />
      </div>


      <button type="submit">New Idea</button>
    </form>
  );
};

export default IdeaUploadForm;
