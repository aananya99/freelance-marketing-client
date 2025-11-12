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

          <span className="inline-block bg-[#EBD3F8] text-[#AD49E1] font-semibold px-3 py-1 rounded-full text-sm ">
            {category}
          </span>

          <p className="text-white text-sm">
            Posted By: <span className="font-lg font-semibold">{postedBy}</span> | Date:{" "}
            <span className="font-semibold">
              {new Date(postedDate).toLocaleDateString()}
            </span>
          </p>

          <p className="text-white text-base leading-relaxed">{summary}</p>
       <Link to="/my-accepted-tasks">
            <button className="btn  mt-3 bg-[#7A1CAC] hover:bg-[#AD49E1] text-white">Accept</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
