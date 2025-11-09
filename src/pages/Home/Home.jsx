import React from "react";
import Banner from "../../components/Banner";
import TopCategories from "../../components/TopCategories";
import Featured from "../../components/Featured";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopCategories></TopCategories>
      <Featured></Featured>
    </div>
  );
};

export default Home;
