import React from "react";
import "./Home.css";
import TopHeader from "../TopHeader/TopHeader";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div className="home">
      <TopHeader />
      <HeroSection />
    </div>
  );
};

export default Home;
