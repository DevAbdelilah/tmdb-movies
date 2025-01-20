import type { ReactNode } from "react";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

interface Props {
  title?: string;
  children: ReactNode;
}

function CarouselSection({ children, title }: Props) {
  return (
    <Stack position={"relative"} gap={2}>
      <Typography fontSize={24} lineHeight={"28px"} fontWeight={400}>
        {title}
      </Typography>
      <Stack
        direction="row"
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          width: "1400px",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          onClick={() => {}}
          sx={{
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <ChevronLeft sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton
          onClick={() => {}}
          sx={{
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <ChevronRight sx={{ fontSize: 40 }} />
        </IconButton>
      </Stack>
      {children}
    </Stack>
  );
}

export default CarouselSection;
