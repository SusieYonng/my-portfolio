import React from "react";
import { Typography, Box } from "@mui/material";

const About = () => (
  <Box sx={{ p: 3, my: 2 }}>
    <Typography variant="h4" gutterBottom>
      About Me
    </Typography>
    <Typography paragraph>
      Hi, I'm Sisi Tian. I’m a <strong>Software Engineer with 4+ years of professional
      experience</strong>, currently completing my Master’s degree at Northeastern
      University (Seattle) and <strong>set to graduate in December 2026</strong>
      .
    </Typography>
    <Typography paragraph>
      Building upon a strong foundation in{" "}
      <strong>front-end engineering</strong> and web applications, I have
      expanded my technical horizon toward <strong>backend </strong> and{" "}
      <strong>data-intensive engineering</strong>. Through my recent co-op
      experience, I deepened my hands-on backend expertise by building
      event-driven microservices, asynchronous data streaming pipelines, and
      scalable cloud solutions—leveraging{" "}
      <strong>AI-assisted coding workflows</strong> to boost engineering speed
      and code quality.
    </Typography>
    <Typography paragraph>
      Today, my primary career focus is as a{" "}
      <strong>
        Full-Stack Engineer with a strong inclination toward backend engineering
      </strong>
      . I enjoy connecting seamless frontend interfaces with performant,
      data-driven backend systems to deliver impactful end-to-end applications.
    </Typography>
  </Box>
);

export default About;
