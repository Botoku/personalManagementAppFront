"use client";
import React, { useState } from "react";
import axios from "axios";
type Props = {};

const IdeaUploadForm = (props: Props) => {
  const [ideaName, setIdeaName] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ideaName);
    axios
      .post(`http://localhost:4000/api/v1/ideas`, {
        ideaName,
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
