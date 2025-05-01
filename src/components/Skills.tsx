import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { FaReact, FaPython, FaVuejs, FaChartLine } from "react-icons/fa";
import {
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGit,
  SiPostgresql,
  SiExpress,
  SiDocker,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiSpring,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const skills = [
  { icon: <FaReact size={40} color="#61DAFB" />, name: "React" },
  { icon: <SiRedux size={40} color="#764ABC" />, name: "Redux" },
  { icon: <FaVuejs size={40} color="#4FC08D" />, name: "Vue.js" },

  { icon: <SiJavascript size={40} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiHtml5 size={40} color="#E34F26" />, name: "HTML5" },
  { icon: <SiCss3 size={40} color="#1572B6" />, name: "CSS3" },

  { icon: <SiNodedotjs size={40} color="#339933" />, name: "Node.js" },
  { icon: <SiExpress size={40} color="#000" />, name: "Express" },
  // { icon: <SiPostgresql size={40} color="#336791" />, name: "PostgreSQL" },

  { icon: <DiJava size={40} color="#007396" />, name: "Java" },
  { icon: <SiSpring size={40} color="#6DB33F" />, name: "Spring Boot" },

  { icon: <SiDocker size={40} color="#2496ED" />, name: "Docker" },
  { icon: <SiGit size={40} color="#F05032" />, name: "Git" },

  { icon: <FaPython size={40} color="#3776AB" />, name: "Python" },
  { icon: <SiPandas size={40} color="#150458" />, name: "Pandas" },
  { icon: <SiNumpy size={40} color="#013243" />, name: "NumPy" },
  { icon: <SiScikitlearn size={40} color="#F7931E" />, name: "Scikit-learn" },
  { icon: <FaChartLine size={40} color="#11557C" />, name: "Matplotlib" },
];

export default function Skills() {
  return (
    <Box sx={{ p: 3, my: 2, overflow: "hidden" }}>
      <Typography variant="h4" gutterBottom align="left">
        Technical Skills
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          width: "100%",
          mx: 0,
          my: 2,
          pb: 2,
        }}
      >
        {skills.map((skill, index) => (
          <Grid item xs={4} sm={3} md={2} key={index} textAlign="center">
        <Box
          sx={{
            padding: 2,
            "&:hover": {
          transform: "scale(1.1)",
          transition: "all 0.3s ease",
            },
          }}
        >
          {skill.icon}
          <Typography
            variant="body1"
            sx={{ marginTop: 1, fontWeight: "medium" }}
          >
            {skill.name}
          </Typography>
        </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
