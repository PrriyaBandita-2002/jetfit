import React from "react";
import { Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";
import HorizontalScrollBar from "./HorizontalScrollbar";
const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <InfinitySpin />
    </Stack>
  );
};

export default Loader;
