import React from "react";
import { Link } from "react-router";

export default function JobCard({ job }) {
  const {
    _id,
    title = "No title",
    postedBy = "Unknown",
    category = "General",
    summary = "",
    coverImage = "",
  } = job || {};

  return (
    <article className="max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden transition-shadow hover:shadow-lg">
      <div className="h-44 w-full overflow-hidden bg-gray-100">
        <img
          src={coverImage}
          alt={`${title} cover`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#EBD3F8] text-[#AD49E1]">
            {category}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Posted by{" "}
          <span className="font-medium text-gray-700">{postedBy}</span>
        </p>

        <p className="text-sm text-gray-600 mt-3 line-clamp-1">
          {summary}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <Link to={`/allJobs/${_id}`}>
            <button className="px-3 py-2 text-sm font-medium rounded-lg  bg-[#7A1CAC] hover:bg-[#AD49E1] text-white transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}

