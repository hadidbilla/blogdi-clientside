import React, { useEffect, useState } from "react";
import "./Home.css";
import TopHeader from "../TopHeader/TopHeader";
import HeroSection from "../HeroSection/HeroSection";
import PopularPost from "../PopularPost/PopularPost";

const Home = () => {
  useEffect(() => {
    fetch("https://blogdi.pythonanywhere.com/api/blog/interests/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
    fetch("https://blogdi.pythonanywhere.com/api/blog/posts/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
    fetch("https://blogdi.pythonanywhere.com/api/models/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
    fetch("https://blogdi.pythonanywhere.com/api/blog/meta-info/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="home">
      <TopHeader />
      <HeroSection />
      <PopularPost />
    </div>
  );
};

export default Home;
