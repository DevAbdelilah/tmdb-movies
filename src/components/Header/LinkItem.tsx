"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import type { Link } from "@/components/Header/types";

interface Props {
  link: Link;
  onOpen: (item: Link) => void;
  activeLink?: Link;
  onClose: () => void;
}

function LinkItem({ link, onOpen, activeLink, onClose }: Props) {
  const currentLink = link.label === activeLink?.label;

  const handleMouseEnter = () => {
    onOpen(link);
  };

  const handleMouseLeave = () => {
    onClose();
  };

  return (
    <Stack sx={{ position: "relative" }}>
      <Button
        startIcon={link.icon}
        onClick={() => onOpen(link)}
        onMouseEnter={handleMouseEnter}
        endIcon={
          link.icondrop && (
            <KeyboardArrowDownOutlinedIcon
              sx={{
                transform: currentLink ? "rotate(180deg)" : "rotate(0deg)",
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

      {currentLink && link.dropdownContent.length > 0 && (
        <ClickAwayListener onClickAway={onClose}>
          <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
                          backgroundColor: "darkgray",
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
        </ClickAwayListener>
      )}
    </Stack>
  );
}

export default LinkItem;
