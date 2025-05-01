import React from "react";
import { Typography, Box } from "@mui/material";

const About = () => (
  <Box sx={{ p: 3, my: 2 }}>
    <Typography variant="h4" gutterBottom>
      About Me
    </Typography>
    <Typography paragraph>
      <strong>Hi, I'm Sisi Tian.</strong> I’m a passionate software development
      enthusiast with 4 years of work experience and currently pursuing my
      second master’s degree at Northeastern University (Seattle). My journey in
      tech has been driven by curiosity and a love for building user-centric
      applications that merge innovation with functionality.
    </Typography>
    <Typography paragraph>
      Over the years, I’ve honed my expertise in front-end development, crafting
      dynamic web applications that deliver seamless user experiences. Now, I’m
      advancing my software development skills—deepening my knowledge of backend
      technologies, refining my front-end proficiency, and exploring data
      science to broaden my perspective as I work toward becoming a well-rounded
      full-stack engineer.
    </Typography>
    <Typography paragraph>
      In the future, I envision contributing to projects that leverage
      cutting-edge technology to make a tangible impact, whether through
      building scalable systems, optimizing performance, or uncovering insights
      through data. For me, software development is more than just code—it's a
      way to connect ideas, people, and possibilities.
    </Typography> 
  </Box>
);

export default About;
