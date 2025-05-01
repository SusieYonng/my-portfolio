import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { education } from "../data/educationData";

const Education = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

  const handleChange = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? false : index));
  };

  return (
    <Box sx={{ p: 3, my: 2 }}>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      {education.map((edu, index) => (
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
              <Typography variant="h6">{edu.school}</Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.degree} ・ {edu.duration}
              </Typography>
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            {edu.gpa && (
              <Typography variant="body2" fontWeight="bold" gutterBottom>
                GPA: {edu.gpa}
              </Typography>
            )}

            {edu.coursework && (
              <>
                <Typography variant="body2" fontWeight="bold">
                  Relevant Coursework:
                </Typography>
                <List dense disablePadding sx={{ pl: 2 }}>
                  {edu.coursework.map((course, i) => (
                    <ListItem key={i} sx={{ py: 0.5 }}>
                      <ListItemText primary={`• ${course}`} />
                    </ListItem>
                  ))}
                </List>
              </>
            )}

            {edu.publications && (
              <>
                <Typography variant="body2" fontWeight="bold" sx={{ mt: 1 }}>
                  Patents:
                </Typography>
                <List dense disablePadding sx={{ pl: 2 }}>
                  {edu.publications.map((pub, i) => (
                    <ListItem key={i} sx={{ py: 0.5 }}>
                      <ListItemText primary={`• ${pub}`} />
                    </ListItem>
                  ))}
                </List>
              </>
            )}

            {edu.honors && (
              <>
                <Typography variant="body2" fontWeight="bold" sx={{ mt: 1 }}>
                  Honors & Scholarships:
                </Typography>
                <List dense disablePadding sx={{ pl: 2 }}>
                  {edu.honors.map((honor, i) => (
                    <ListItem key={i} sx={{ py: 0.5 }}>
                      <ListItemText primary={`• ${honor}`} />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Education;
