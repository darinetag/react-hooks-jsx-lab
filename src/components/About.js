import React from "react";
import { image } from "../data/data";

function About() {
  return(
    <div id="about">
<h2>About Me</h2>
<p> Queen of the world with a hint of confetti to spread across the globe</p>
<img src={image} alt="I made this"></img>
    </div>
      

  ) 
}

export default About;
