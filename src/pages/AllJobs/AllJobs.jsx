import React from "react";
import { useLoaderData } from "react-router";
import JobCard from "../../components/JobCard";

const AllJobs = () => {
  const data = useLoaderData();
  console.log(data);

  return <div>
    <div>
        All jobs Section
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
 {
    data.map (job => <JobCard key={job._id} job={job}></JobCard>)
 }
    </div>

  </div>;
};

export default AllJobs;
