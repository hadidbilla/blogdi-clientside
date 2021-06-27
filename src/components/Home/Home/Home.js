import React, { useEffect, useState } from "react";
import "./Home.css";
import TopHeader from "../TopHeader/TopHeader";
import HeroSection from "../HeroSection/HeroSection";
import PopularPost from "../PopularPost/PopularPost";

const Home = () => {
  return (
    <div className="home">
      <TopHeader />
      <HeroSection />
      <PopularPost />
    </div>
  );
};

export default Home;
