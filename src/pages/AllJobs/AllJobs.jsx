import React from "react";
import { useLoaderData } from "react-router";
import JobCard from "../../components/JobCard";
import { AuthContext } from "../../context/AuthContext";

const AllJobs = () => {
  const data = useLoaderData();


  return (
    <div className="w-11/12 mx-auto my-10">
      <div>
        <h2 className="text-3xl font-semibold text-center my-10">
          All <span className="text-[#AD49E1]"> Jobs </span>
        </h2>
      </div>
     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
        {data.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
