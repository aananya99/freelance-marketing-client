import React, { use } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const JobDetails = () => {
  const data = useLoaderData();
  const {
    title,
    summary,
    coverImage,
    userEmail,
    postedBy,
    postedDate,
    category,
  } = data;
  const { user } = use(AuthContext);
  // console.log(data);

  const handleAcceptedTask = () => {
    fetch("http://localhost:3000/my-accepted-tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, accepted_by: user.email }),
    })
      .then((data) => {
        console.log(data);
        toast.success("Successfully accepted!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
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

          <div className="flex flex-col gap-2">
            <p className=" text-sm">
              Posted By:{" "}
              <span className="font-lg font-semibold">{postedBy}</span> | Date:{" "}
              <span className="font-semibold">
                {new Date(postedDate).toLocaleDateString()}
              </span>
            </p>
            <p className="text-sm">
              Email: <span className="font-semibold"> {userEmail}</span>
            </p>
          </div>

          <p className=" text-base leading-relaxed">{summary}</p>
          <Link>
            {user?.email !== userEmail && (
              <button
                onClick={handleAcceptedTask}
                className="px-3 py-2 text-sm font-medium rounded-lg  bg-[#7A1CAC] hover:bg-[#AD49E1] text-white transition"
              >
                Accept Job
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
