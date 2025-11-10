import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const data = useLoaderData();
  const { title, summary, coverImage ,userEmail} = data;
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={coverImage} 
        className="w-full md:h-[500px]"/>
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p>{summary}</p>
          <p>{userEmail}</p>
          <button className="btn btn-primary">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
