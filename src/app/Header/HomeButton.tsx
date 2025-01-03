import { Button, Stack } from "@mui/material";
import MyHomeSvg from "components/icons/MyHomeSvg";

import React from "react";

export const HomeButton = () => (
  <Stack direction="row" justifyContent="center" alignItems="center">
    <Button
      sx={{
        color: "black",
        bgcolor: "#626264",
        "&:hover": {
          backgroundColor: "gray",
        },
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <MyHomeSvg />
        <span>Home</span>
      </Stack>
    </Button>
  </Stack>
);
