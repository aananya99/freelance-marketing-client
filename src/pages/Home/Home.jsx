import React from "react";
import Banner from "../../components/Banner";
import TopCategories from "../../components/TopCategories";
import Featured from "../../components/Featured";
import { useLoaderData } from "react-router";
import JobCard from "../../components/JobCard";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const data = useLoaderData();
 
  return (
    <div>
      <Banner></Banner>
      <TopCategories></TopCategories>
      <div className="w-11/12 mx-auto my-10 space-y-5">
        <h2 className="text-3xl font-bold text-center"><span className="text-[#AD49E1]">Latest</span> Jobs</h2>
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
