import React from "react";
import { Button, Stack } from "@mui/material";
import MyPeopleSvg from "components/icons/MyPeopleSvg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const PeopleButton = () => {
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
        <Stack color={"white"} direction="row" spacing={1} alignItems="center">
          <MyPeopleSvg />
          <span>People</span>
          <ExpandMoreIcon
            className="expand-more-icon"
            sx={{ transition: "transform 0.3s ease" }}
          />
        </Stack>
      </Button>
    </Stack>
  );
};
