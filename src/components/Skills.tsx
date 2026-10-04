import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import {
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import {
  FiCloud,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiServer,
} from "react-icons/fi";
import {
  SiAmazon,
  SiApachekafka,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGithubactions,
  SiGithubcopilot,
  SiGit,
  SiHtml5,
  SiJenkins,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNodedotjs,
  SiPandas,
  SiPostman,
  SiSnowflake,
  SiSpring,
  SiTableau,
  SiTypescript,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
  prominence?: "core";
};

const stages: {
  name: string;
  subtitle: string;
  icon: IconType;
  color: string;
  skills: Skill[];
}[] = [
  {
    name: "Frontend",
    subtitle: "Interfaces & experiences",
    icon: FiLayers,
    color: "#7555d9",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB", prominence: "core" },
      { name: "Vue.js", icon: FaVuejs, color: "#4FC08D" },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        prominence: "core",
      },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    name: "Backend",
    subtitle: "Services & API development",
    icon: FiServer,
    color: "#3288c8",
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB", prominence: "core" },
      {
        name: "FastAPI",
        icon: SiFastapi,
        color: "#009688",
        prominence: "core",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
        prominence: "core",
      },
      { name: "Express", icon: SiExpress, color: "#444444" },
      { name: "Java", icon: DiJava, color: "#007396" },
      { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
    ],
  },
  {
    name: "Data & Cloud",
    subtitle: "Databases · Streaming · BI",
    icon: FiCloud,
    color: "#168c91",
    skills: [
      {
        name: "SQL",
        icon: FiDatabase,
        color: "#168c91",
        prominence: "core",
      },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      {
        name: "Snowflake",
        icon: SiSnowflake,
        color: "#29B5E8",
        prominence: "core",
      },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "Tableau", icon: SiTableau, color: "#1F4E79" },
      { name: "Apache Kafka", icon: SiApachekafka, color: "#231F20" },
      { name: "AWS S3 / EC2", icon: SiAmazon, color: "#FF9900" },
    ],
  },
  {
    name: "Developer Tools & DevOps",
    subtitle: "Version control, CI/CD & AI-assisted coding",
    icon: FiGitBranch,
    color: "#ce6b37",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032", prominence: "core" },
      { name: "Docker", icon: SiDocker, color: "#2496ED", prominence: "core" },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        color: "#2088FF",
        prominence: "core",
      },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "Linux / Bash", icon: SiLinux, color: "#FCC624" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#222222" },
    ],
  },
];

function SkillNode({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  const iconSize = skill.prominence === "core" ? 34 : 29;

  return (
    <Box
      title={skill.name}
      sx={{
        minWidth: 76,
        minHeight: 96,
        px: 0.75,
        py: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: 2,
        transition: "transform 180ms ease, background-color 180ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          backgroundColor: "rgba(255,255,255,0.8)",
        },
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
          "&:hover": { transform: "none" },
        },
      }}
    >
      <Box
        sx={{
          height: 40,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={iconSize} color={skill.color} aria-hidden="true" />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 32,
          mt: 0.75,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          align="center"
          sx={{ lineHeight: 1.15, fontWeight: 600 }}
        >
          {skill.name}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Skills() {
  return (
    <Box sx={{ p: { xs: 2, md: 3 }, my: 2, overflow: "hidden" }}>
      <Typography variant="h4" gutterBottom align="left">
        Technical Skills
      </Typography>
      <Box
        sx={{
          position: "relative",
          mt: 2,
          p: { xs: 2, md: 3 },
          borderRadius: 3,
          background:
            "radial-gradient(ellipse at 50% 0%, #eef3ff 0%, #f8f9ff 58%, #f1f5ff 100%)",
          boxShadow: "0px 2px 12px rgba(34, 55, 110, 0.09)",
          "&::before": {
            content: '""',
            position: "absolute",
            zIndex: 0,
            top: 47,
            left: "10%",
            right: "10%",
            borderTop: "2px solid rgba(117, 85, 217, 0.2)",
            "@media (max-width: 899.95px)": {
              top: 35,
              bottom: 35,
              left: 35,
              right: "auto",
              borderTop: 0,
              borderLeft: "2px solid rgba(117, 85, 217, 0.2)",
            },
          },
        }}
      >
        <Grid container spacing={{ xs: 2, md: 1 }} sx={{ position: "relative" }}>
          {stages.map((stage, index) => {
            const StageIcon = stage.icon;
            return (
              <Grid item xs={12} md={3} key={stage.name}>
                <Box
                  sx={{
                    height: "100%",
                    position: "relative",
                    zIndex: 1,
                    p: 1.5,
                    borderRadius: 2.5,
                    backgroundColor: "rgba(255,255,255,0.78)",
                    border: "1px solid rgba(85, 103, 150, 0.1)",
                    boxShadow: "0 3px 10px rgba(30, 50, 100, 0.045)",
                    "&::after": {
                      content: index < stages.length - 1 ? '"›"' : '""',
                      position: "absolute",
                      top: 20,
                      right: -10,
                      zIndex: 2,
                      color: stage.color,
                      fontSize: 28,
                      lineHeight: 1,
                      fontWeight: 500,
                      "@media (max-width: 899.95px)": {
                        content: index < stages.length - 1 ? '"⌄"' : '""',
                        top: "auto",
                        right: "50%",
                        bottom: -22,
                        transform: "translateX(50%)",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      minHeight: 46,
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                        borderRadius: "50%",
                        color: stage.color,
                        backgroundColor: `${stage.color}18`,
                      }}
                    >
                      <StageIcon size={19} aria-hidden="true" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                        {stage.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {stage.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {stage.skills.map((skill) => (
                      <SkillNode key={skill.name} skill={skill} />
                    ))}
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>

      </Box>
    </Box>
  );
}
