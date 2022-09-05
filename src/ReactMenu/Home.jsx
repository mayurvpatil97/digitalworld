import React from "react";
import { NavLink } from "react-router-dom";
import Common from "../Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your Business"
        visit="/service"
        btname="Get Started"
        src="https://picsum.photos/800/800 "
      />
    </>
  );
};

export default Home;
