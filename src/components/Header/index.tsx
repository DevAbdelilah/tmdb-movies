import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import LogoApp from "@/components/Header/icons/logo";
import MySettingIcon from "@/components/Header/icons/SettingIcon";
import LinksList from "@/components/Header/Links";

function Header() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      bgcolor={"red"}
      p={2}
      width={"80%"}
      mx={"auto"}
    >
      <Stack direction={"row"} alignItems={"center"} gap={4}>
        <LogoApp />
        <LinksList />
      </Stack>
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
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
          placeholder="search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          }}
        />
        <MySettingIcon />
      </Stack>
    </Stack>
  );
}

export default Header;
