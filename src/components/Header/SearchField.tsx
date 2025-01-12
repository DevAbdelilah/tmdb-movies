"use client";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";

import { setSearchTerm } from "@/core/store/features/movieSlice";
import { useAppDispatch } from "@/core/store/hooks";

function SearchField() {
  const dispatch = useAppDispatch();
  return (
    <TextField
      onChange={(event) => dispatch(setSearchTerm(event.target.value))}
      sx={{
        "& .MuiOutlinedInput-root": {
          color: "#FFF",
          "& fieldset": {
            borderColor: "gray",
          },
          "&:hover fieldset": {
            borderColor: "white",
          },
          "&.Mui-focused fieldset": {
            borderColor: "gray",
          },
          "& .MuiOutlinedInput-input": {
            height: "20px",
            width: "298px",
            padding: "10px 6px",
          },
        },
      }}
      placeholder="Search your fav Movie..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search sx={{ color: "gray" }} />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchField;
