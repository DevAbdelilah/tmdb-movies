import React from "react";
import { Button, Stack } from "@mui/material";
import MyTvSvg from "components/icons/MyTvSvg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const TvShowsButton = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Button
        sx={{
          "&:hover": {
            backgroundColor: "gray",

            ".expand-more-icon": {
              transform: "rotate(180deg)",
            },
          },
        }}
      >
        <Stack color={"white"} gap={1} direction="row" alignItems="center">
          <MyTvSvg />
          <span>TV shows</span>
          <ExpandMoreIcon
            className="expand-more-icon"
            sx={{ transition: "transform 0.3s ease" }}
          />
        </Stack>
      </Button>
    </Stack>
  );
};
