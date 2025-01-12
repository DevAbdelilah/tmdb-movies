import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";

import type { Link } from "@/components/Header/types";

export const Links: Link[] = [
  {
    label: "Home",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    label: "Movies",
    icon: <MovieIcon />,
    href: "/movies",
  },
  {
    label: "TV Shows",
    icon: <TvIcon />,
    href: "/tv-shows",
  },
];
