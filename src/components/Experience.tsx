import React, { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { experiences } from "../data/experienceData";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

  const handleChange = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? false : index));
  };

  return (
    <Box sx={{ p: 3, my: 2 }}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      {experiences.map((exp, index) => (
        <Accordion
          key={index}
          expanded={expandedIndex === index}
          onChange={() => handleChange(index)}
          sx={{
            boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
            "&:hover": {
              background: "linear-gradient(180deg, #fafaff 0%, #f0f4ff 100%)",
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box>
              <Typography variant="h6">{exp.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {exp.company} ・ {exp.duration}
              </Typography>
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            <List dense disablePadding>
              {exp.responsibilities.map((item, i) => (
                <ListItem key={i} sx={{ pl: 2 }}>
                  <ListItemText
                    primary={
                      <>
                        <Typography
                          component="span"
                          sx={{ fontWeight: 600, display: "inline" }}
                        >
                          {item.title}{" "}
                        </Typography>
                        <Typography component="span" sx={{ display: "inline" }}>
                          {item.detail}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Experience;
