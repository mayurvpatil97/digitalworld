import React from "react";
import { NavLink } from "react-router-dom";
import Common from "../Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        visit="/contact"
        btname="Contact Now"
        src="https://picsum.photos/800/800 "
      />
    </>
  );
};

export default About;
