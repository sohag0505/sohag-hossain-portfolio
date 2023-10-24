import React from "react";
import MyProject from "../../MyProject/MyProject";
import Navbar from "../../Navbar/Navbar";
import Skills from "../../Skills/Skills";
import TopSection from "../../TopSection/TopSection";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <TopSection></TopSection>
      <Skills></Skills>
      <MyProject></MyProject>
    </div>
  );
};

export default Home;
