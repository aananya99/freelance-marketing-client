import React from "react";
import Banner from "../../components/Banner";
import TopCategories from "../../components/TopCategories";
import Featured from "../../components/Featured";
import { useLoaderData } from "react-router";
import JobCard from "../../components/JobCard";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <TopCategories></TopCategories>
      <div className="w-11/12 mx-auto space-y-5">
        <h2 className="text-3xl font-bold text-center">Latest Jobs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {data.slice(0, 6).map((job) => (
            <JobCard key={job._id} job={job}></JobCard>
          ))}
        </div>
        <Featured></Featured>
      </div>
    </div>
  );
};

export default Home;
