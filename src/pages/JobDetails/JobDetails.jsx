import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const data = useLoaderData();
  const { title, summary, coverImage, postedBy, postedDate, category } = data;

  return (
    <div className="hero bg-base-200 min-h-screen py-10">
      <div className="hero-content flex-col lg:flex-row gap-10 p-5">
        {/* Cover Image */}
        <img
          src={coverImage}
          alt={title}
          className="w-full lg:w-1/2 h-64 md:h-96 object-cover rounded-lg shadow-md"
        />

        {/* Job Info */}
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>

          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>

          <p className="text-gray-500 text-sm">
            Posted By: <span className="font-semibold">{postedBy}</span> | Date:{" "}
            <span className="font-semibold">
              {new Date(postedDate).toLocaleDateString()}
            </span>
          </p>

          <p className="text-gray-700 text-base leading-relaxed">{summary}</p>
       <Link to="/my-accepted-tasks">
            <button className="btn btn-primary mt-3">Accept</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
