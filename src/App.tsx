import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const App = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            <Typography variant="h6">Sisi's Portfolio</Typography>
            <Box component="span" sx={{ mx: 1, color: "white" }}>
              |
            </Box>

            <IconButton
              size="small"
              color="inherit"
              component="a"
              href="https://github.com/SusieYonng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <Box component="span" sx={{ color: "white" }}>
              |
            </Box>
            <IconButton
              size="small"
              color="inherit"
              component="a"
              href="https://www.linkedin.com/in/sisi-tian-a9904b338/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <Box component="span" sx={{ color: "white" }}>
              |
            </Box>
          </Stack>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <List>
                  {sections.map((section) => (
                    <ListItem key={section.id} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          scrollToSection(section.id);
                          setDrawerOpen(false);
                        }}
                      >
                        <ListItemText primary={section.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Stack direction="row" spacing={1}>
              {sections.map((section) => (
                <Button
                  key={section.id}
                  color="inherit"
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </Button>
              ))}
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      <Container maxWidth={false} disableGutters>
        <Box id="about">
          <About />
        </Box>
        <Box id="skills">
          <Skills />
        </Box>
        <Box id="education">
          <Education />
        </Box>
        <Box id="experience">
          <Experience />
        </Box>
        <Box id="projects">
          <Projects />
        </Box>
        <Box id="contact">
          <Contact />
        </Box>
      </Container>
    </>
  );
};

export default App;
