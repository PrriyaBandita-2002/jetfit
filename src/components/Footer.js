import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Fit from "../assets/images/Fit.json";
import { First } from "react-bootstrap/esm/PageItem";
import Lottie from "lottie-react";
const Footer = () => (
  <Box mt="70px" bgcolor="#FFF3F4">
    <Stack
      gap="30px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="30px"
      pt="24px"
    >
      <Lottie
        animationData={Fit}
        alt="logo"
        style={{ width: "100px", height: "100px" }}
      />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "80", xs: "20px" } }}
      mt="31px"
      textAlign="center"
      pb="40px"
    >
      JETFIT
      <br />
      Made by Prriya
    </Typography>
  </Box>
);

export default Footer;
