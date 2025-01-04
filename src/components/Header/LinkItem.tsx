"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import type { Link } from "@/components/Header/types";

interface Props {
  link: Link;
}

function LinkItem({ link }: Props) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <Stack
      style={{ position: "relative" }}
      onMouseEnter={() => link.icondrop && setHoveredItem(link.label)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <Button
        startIcon={link.icon}
        endIcon={
          link.icondrop && (
            <KeyboardArrowDownOutlinedIcon
              sx={{
                transform:
                  hoveredItem === link.label
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                transition: "transform 0.3s ease",
                color: "gray",
              }}
            />
          )
        }
        sx={{
          color: "white",
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "gray",
          },
        }}
      >
        {link.label}
      </Button>

      {hoveredItem === link.label && link.dropdownContent.length > 0 && (
        <Card
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "750px",
            minHeight: "300px",
            marginTop: "8px",
            zIndex: 1000,
            backgroundColor: "background.paper",
          }}
        >
          <CardContent>
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1}>
                {link.icon}
                <Typography variant="h6" sx={{ color: "gray" }}>
                  {link.label}
                </Typography>
              </Stack>
              <Stack direction="row" flexWrap="wrap" gap={2}>
                {link.dropdownContent.map((item, i) => (
                  <Stack
                    key={i}
                    sx={{
                      width: "350px",
                      p: 2,
                      borderRadius: 1,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ color: "gray" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      )}
    </Stack>
  );
}

export default LinkItem;
