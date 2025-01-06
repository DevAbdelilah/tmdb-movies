"use client";

import { useState } from "react";
import Stack from "@mui/material/Stack";

import { Links } from "@/components/Header/constants";
import LinkItem from "@/components/Header/LinkItem";
import { Link } from "./types";

function LinksList() {
  const [activeLink, setActiveLink] = useState<Link>();

  const handleLinkOpen = (item: Link) => {
    setActiveLink(undefined);
    const links = Links.map((link) => {
      return { ...link, isHighlited: false };
    });

    const _activeLink = links
      .filter((link) => link.label === item.label)
      .map((link) => {
        return { ...link, isHighlited: true };
      });

    setActiveLink(_activeLink[0]);
  };


  return (
    <Stack direction="row" gap={6}>
      {Links.map((link, index) => (
        <LinkItem
         

          key={index}
          link={link}
          onOpen={handleLinkOpen}
          activeLink={activeLink}
          onClose={() => setActiveLink(undefined)}
        />
      ))}
    </Stack>
  );
}

export default LinksList;
