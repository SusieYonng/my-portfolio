import React, { useState } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { projects } from "../data/projectData";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<any>(null);

  const handleOpen = (project: any) => {
    setActiveProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveProject(null);
  };

  return (
    <Box sx={{ p: 3, my: 2 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, idx) => (
          <Grid
            item
            xs={12}
            md={6}
            key={idx}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
              }}
            >
              <CardMedia
                component="img"
                height="240"
                image={project.cover}
                alt={project.title}
                onClick={() => handleOpen(project)}
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                {project.link ? (
                  <Typography
                    variant="h6"
                    component="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: "none", color: "primary.main" }}
                  >
                    {project.title}
                  </Typography>
                ) : (
                  <Typography variant="h6">{project.title}</Typography>
                )}
                <Typography variant="body2" color="text.secondary">
                  {project.type} | {project.techStack}
                </Typography>{" "}
                {Array.isArray(project.description) ? (
                  project.description.map((line: string, i: number) => (
                    <Typography variant="body2" paragraph key={i}>
                      {line}
                    </Typography>
                  ))
                ) : (
                  <Typography variant="body2">{project.description}</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth={
          activeProject?.assets?.length && activeProject.assets.length <= 2
            ? "sm"
            : "md"
        }
      >
        <DialogTitle sx={{ textAlign: "center", position: "relative" }}>
          <Typography variant="h6" component="div">
            {activeProject?.title}
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent
          sx={{
            maxHeight: "80vh",
            overflowY: "auto",
            px: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent={
              activeProject?.assets?.length && activeProject.assets.length <= 2
                ? "center"
                : "flex-start"
            }
            sx={{ width: "100%" }}
          >
            {activeProject?.assets?.map((asset: any, i: number) => (
              <Grid
                item
                xs={12}
                sm={asset.orientation === "landscape" ? 12 : 6}
                md={asset.orientation === "landscape" ? 12 : 4}
                key={i}
              >
                {asset.type === "image" ? (
                  <Box
                    component="img"
                    src={asset.src}
                    alt={`Project Image ${i}`}
                    sx={{
                      width: "100%",
                      height: "auto",
                      maxHeight: 400,
                      objectFit: "contain",
                      display: "block",
                      borderRadius: 2,
                    }}
                  />
                ) : asset.type === "video" ? (
                  <Box
                    component="video"
                    src={asset.src}
                    controls
                    sx={{
                      width:
                        asset.orientation === "landscape" ? "100%" : "auto",
                      // height: 'auto',
                      minHeight: 120,
                      maxHeight: 400,
                      objectFit: "contain",
                      display: "block",
                      mx: "auto",
                      borderRadius: 2,
                    }}
                  />
                ) : null}
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Projects;
