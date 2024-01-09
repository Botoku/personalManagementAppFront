"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
type IdeaProps = {
  data: {
    idea: Idea[];
  };
};

const IdeaList = () => {
  useEffect(() => {
    const getIdeas = async () => {
      const data = await axios.get("http://localhost:4000/api/v1/ideas");
      setIdeas(data);
    };
    getIdeas();
  }, []);
  const [ideas, setIdeas] = useState({} as IdeaProps);
  return (
    <div>
      {ideas?.data?.idea.map((ideaa: Idea) => (
        <div className="my-3" key={ideaa._id}>
          <p>{ideaa.ideaName}</p>
          <div className="flex">
            <p>Status: {"   " }</p>
            {ideaa.completedStatus ? <p className="text-green-300"> Completed</p> : <p className="text-red-300"> Incomplete</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IdeaList;
