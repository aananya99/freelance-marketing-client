import React from "react";
import { Link } from "react-router";

// JobCard.jsx
// Tailwind-based card component that receives a `job` object as a prop
// Usage:
// import JobCard from './JobCard';
// <JobCard job={job} />

export default function JobCard({ job }) {
  const {
    _id,
    title = "No title",
    postedBy = "Unknown",
    category = "General",
    summary = "",
    coverImage = "",
    // userEmail = ''
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
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
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
            <button className="px-3 py-2 text-sm font-medium rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}

// Example usage (place in a parent component):
// const job = {
//   _id: '690f8bcc5956c2c220543f3a',
//   title: 'Front-End React Developer',
//   postedBy: 'Arif Hossain',
//   category: 'Web Development',
//   summary: 'Build responsive UI components using React, Tailwind, and Firebase.',
//   coverImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
//   userEmail: 'arif.dev@example.com'
// };
// <JobCard job={job} />
