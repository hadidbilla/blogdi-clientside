import React from "react";
import "./Home.css";
import { Layout } from "antd";
import TopHeader from "../TopHeader/TopHeader";
import HeroSection from "../HeroSection/HeroSection";
const { Content } = Layout;

const Home = () => {
  return (
    <div className="home">
      <TopHeader />
      <HeroSection />
    </div>
  );
};

export default Home;
