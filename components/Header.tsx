import React from "react";
import MyLogoIcon from "./icons/MyLogoIcon";
import { InputAdornment, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { HomeButton } from "src/app/Header/HomeButton";
import { MoviesButton } from "src/app/Header/MoviesButton";
import { TvShowsButton } from "src/app/Header/TvShowsButton";
import { PeopleButton } from "src/app/Header/PeopleButton";
import { TrendingButton } from "src/app/Header/TrendingButton";
import MySettingIcon from "./icons/MySettingIcon";

export default function ButtonUsage() {
  return (
    <Stack direction={"row"} padding={2} justifyContent={"center"}>
      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <MyLogoIcon />

        <Stack direction={"row"} gap={20}>
          <Stack direction={"row"} gap={1}>
            <HomeButton />
            <MoviesButton />
            <TvShowsButton />
            <PeopleButton />
            <TrendingButton />
          </Stack>{" "}
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "white", // Border color when hovering
                },
                "&.Mui-focused fieldset": {
                  borderColor: "gray", // Border color when focused
                },
                "& .MuiOutlinedInput-input": {
                  height: "20px",
                  width: "298px",
                  padding: "10px 14px",
                },
              },
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
              "& .MuiOutlinedInput-input::placeholder": {
                color: "white",
              },
          
            }}
            id="outlined-basic"
            placeholder="search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "gray" }} />
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <MySettingIcon  />
      </Stack>
    </Stack>
  );
}
