import type { ReactNode } from "react";

import Stack from "@mui/material/Stack";

import Header from "@/components/Header";

interface Props {
  children: ReactNode;
}
function LayoutPage({ children }: Props) {
  return (
    <Stack width={"70%"} mx={"auto"}>
      <Header />

      {children}
      {/* <Footer/> */}
    </Stack>
  );
}

export default LayoutPage;
