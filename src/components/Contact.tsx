import React from "react";
import { Typography, Link, Box, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => (
  <Box sx={{ p: 3, my: 2 }}>
    <Typography variant="h4" gutterBottom>
      Contact
    </Typography>
    <Stack spacing={2} mt={2}>
      <Stack direction="row" spacing={1} alignItems="center">
        <EmailIcon color="action" />
        <Link href="mailto:tian.s@northeastern.edu" underline="hover" color="primary">
          tian.s@northeastern.edu
        </Link>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center">
        <LocationOnIcon color="action" />
        <Typography variant="body1">
          Seattle, WA ・ Northeastern University
        </Typography>
      </Stack>

      <iframe
        title="Northeastern University Seattle Campus"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.306656089963!2d-122.33935582374728!3d47.62079087119239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154c21a3bc17%3A0x37a63f3fd3b65be2!2s225%20Terry%20Ave%20N%2C%20Seattle%2C%20WA%2098109%2C%20USA!5e0!3m2!1sen!2sus!4v1714478021957!5m2!1sen!2sus"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: 8 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Stack>
  </Box>
);

export default Contact;
