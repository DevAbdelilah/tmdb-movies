"use client";

import Stack from "@mui/material/Stack";

import { Links } from "@/components/Header/constants";
import LinkItem from "@/components/Header/LinkItem";

function LinksList() {
  return (
    <Stack  direction="row" gap={6}>
      {Links.map((link, index) => (
        <LinkItem key={index} link={link} />
      ))}
    </Stack>
  );
}

export default LinksList;
