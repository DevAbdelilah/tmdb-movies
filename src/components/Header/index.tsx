import Stack from "@mui/material/Stack";

import LogoApp from "@/components/assets/icons/logo";
import MySettingIcon from "@/components/assets/icons/SettingIcon";
import LinksList from "@/components/Header/Links";
import SearchField from "@/components/Header/SearchField";

function Header() {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} p={2}>
      <Stack direction={"row"} alignItems={"center"} gap={4}>
        <LogoApp />
        <LinksList />
      </Stack>
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <SearchField />
        <MySettingIcon />
      </Stack>
    </Stack>
  );
}

export default Header;
