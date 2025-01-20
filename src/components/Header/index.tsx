import Stack from "@mui/material/Stack";

import LogoApp from "@/components/assets/icons/logo";
import MySettingIcon from "@/components/assets/icons/SettingIcon";
import LinksList from "@/components/Header/Links";
import SearchField from "@/components/Header/SearchField";

function Header() {
  return (
    <Stack
      sx={{
        position: "fixed",
        zIndex: 1000,
        justifyContent: "space-between",
        backgroundColor: "rgba(255, 200, 200, 0.3)",
        backdropFilter: "blur(8px)",
        borderRadius: "6px",
        width: "70%",
      }}
      direction={"row"}
      p={2}
    >
      <Stack direction={"row"} alignItems={"center"} gap={4}>
        <LogoApp />
        <LinksList />
      </Stack>
      <Stack direction={"row"} gap={4} alignItems={"center"}>
        <SearchField />
        <MySettingIcon />
      </Stack>
    </Stack>
  );
}

export default Header;
