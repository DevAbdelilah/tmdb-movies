"use client";

import { Button, Stack, Typography } from "@mui/material";
import MyMoviesSvg from "components/icons/MyMoviesSvg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { useState } from "react";
import MyDiscoverIcon from "components/icons/MyDiscoverIcon";
import MyPlayIcon from "components/icons/MyPlayIcon";
import MyStarIcon from "components/icons/MyStarIcon";
import MyHeartIcon from "components/icons/MyHeartIcon";
import MyCalendarIcon from "components/icons/MyCalendarIcon";

export const MoviesButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Stack style={{ position: "relative" }}>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Button
          onMouseEnter={() => setIsOpen(true)}
          onClick={() => setIsOpen(!isOpen)}
          sx={{
            color: "black",
            "&:hover": {
              backgroundColor: "gray",
              cursor: "pointer",
            },
          }}
        >
          <Stack
            color={"white"}
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <MyMoviesSvg />
            <span>Movies</span>
            <ExpandMoreIcon
              className="expand-more-icon"
              sx={{
                transition: "transform 0.3s ease",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </Stack>
        </Button>
      </Stack>

      {isOpen && (
        <Stack
          color={"white"}
          p={2}
          onMouseLeave={() => setIsOpen(false)}
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "750px",
            height: "auto",

            marginTop: "8px",
            bgcolor: "gray",
          }}
        >
          <Stack gap={2}>
            <Stack color={"black "} direction="row" alignItems="center">
              <MyMoviesSvg />
              <span>Movies</span>
            </Stack>
            <Stack direction={"row"} flexWrap={"wrap"}>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
                variant="body2"
                color="text.secondary"
              >
                Embark on a cinematic adventure with our vast collection of
                movies. From timeless classics to the latest blockbusters, find
                your next favorite film today.
              </Typography>
              <Typography
                gap={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "309px",
                  maxHeight: "88px",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                variant="body2"
                color="text.secondary"
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <MyDiscoverIcon />
                  Discover
                </span>
                Uncover hidden gems and new releases in the world of cinema.
                Dive into a sea of movies waiting to be discovered by you.
              </Typography>
              <Typography
                gap={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "309px",
                  maxHeight: "84px",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                variant="body2"
                color="text.secondary"
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <MyPlayIcon />
                  Now Playing
                </span>
                catch the latest movies new playing in teaters near
                you.Experience the magic.
              </Typography>
              <Typography
                gap={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "309px",
                  maxHeight: "110px",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                variant="body2"
                color="text.secondary"
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <MyStarIcon />
                  Top Rated
                </span>
                Explore the pinnacle of cinematic excellence with our collection
                of top-rated movies. These films have been recognized for their
                outstanding storytelling, direction, and performances.
              </Typography>

              <Typography
                gap={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "309px",
                  maxHeight: "120px",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                variant="body2"
                color="text.secondary"
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <MyHeartIcon />
                  Popular{" "}
                </span>
                Dive into the world of popular movies that have captured the
                hearts of audiences worldwide. From blockbuster hits to
                critically acclaimed films, discover what&apos;s trending in the
                cinematic universe.
              </Typography>
              <Typography
                gap={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "309px",
                  maxHeight: "84px",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                variant="body2"
                color="text.secondary"
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <MyCalendarIcon />
                  UpComing{" "}
                </span>
                Dive into the world of popular movies that have captured the
                hearts of audiences worldwide.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
