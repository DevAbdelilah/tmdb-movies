"use client";

import { usePathname, useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import type { Link } from "@/components/Header/types";

interface Props {
  link: Link;
  activeLink?: Link;
}

function LinkItem({ link }: Props) {
  const pathname = usePathname();

  const router = useRouter();

  return (
    <Stack sx={{ position: "relative" }}>
      <Button
        onClick={() => router.push(link.href)}
        startIcon={link.icon}
        sx={{
          color: pathname === link.href ? "#a9a9a9" : "black",
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            color: "gray",
          },
        }}
      >
        {link.label}
      </Button>
    </Stack>
  );
}

export default LinkItem;
