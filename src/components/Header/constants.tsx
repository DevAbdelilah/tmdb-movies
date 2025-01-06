import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import type { Link } from "@/components/Header/types";

export const Links: Link[] = [
  {
    label: "Home",
    icon: <HomeIcon />,
    dropdownContent: [],
    isHighlited: false,
  },
  {
    label: "Movies",
    icon: <MovieIcon />,
    icondrop: <KeyboardArrowDownOutlinedIcon />,
    dropdownContent: [
      {
        title: "Discover",
        description:
          "Uncover hidden gems and new releases in the world of cinema. Dive into a sea of movies waiting to be discovered by you.",
      },
      {
        title: "Now Playing",
        description:
          "Catch the latest movies now playing in theaters near you. Experience the magic.",
      },
      {
        title: "Top Rated",
        description:
          "Explore the pinnacle of cinematic excellence with our collection of top-rated movies. These films have been recognized for their outstanding storytelling.",
      },
      {
        title: "Popular",
        description:
          "Dive into the world of popular movies that have captured the hearts of audiences worldwide. From blockbuster hits to critically acclaimed films.",
      },
      {
        title: "Upcoming",
        description:
          "Stay ahead of the curve with our upcoming movies section. Be the first to know about the next big releases.",
      },
    ],
    isHighlited: false,
  },
  {
    label: "TV Shows",
    icon: <TvIcon />,
    icondrop: <KeyboardArrowDownOutlinedIcon />,
    dropdownContent: [
      {
        title: "Airing Today",
        description:
          "Stay up to date with the latest TV shows airing today. Don't miss your favorite series and discover new ones.",
      },
      {
        title: "On TV",
        description:
          "Find out what's currently showing on television. Get schedules and information about current programming.",
      },
      {
        title: "Popular",
        description:
          "Explore the most-watched TV shows right now. Join the conversation about trending series and fan favorites.",
      },
      {
        title: "Top Rated",
        description:
          "Discover critically acclaimed TV shows that have earned high ratings from audiences and critics alike.",
      },
    ],
    isHighlited: false,
  },
  {
    label: "People",
    icon: <PeopleIcon />,
    icondrop: <KeyboardArrowDownOutlinedIcon />,
    dropdownContent: [
      {
        title: "Popular People",
        description:
          "Explore profiles of the most popular actors, directors, and creators in the entertainment industry.",
      },
      {
        title: "Trending",
        description:
          "Keep up with celebrities making headlines and trending in the entertainment world.",
      },
      {
        title: "Born Today",
        description:
          "Discover which famous personalities are celebrating their birthdays today.",
      },
    ],
    isHighlited: false,
  },
  {
    label: "Trending",
    icon: <TrendingUpIcon />,
    icondrop: <KeyboardArrowDownOutlinedIcon />,
    dropdownContent: [
      {
        title: "Today",
        description:
          "See what's trending in entertainment right now. Get real-time updates on popular content.",
      },
      {
        title: "This Week",
        description:
          "Discover the most popular entertainment content from the past week.",
      },
      {
        title: "Upcoming",
        description:
          "Preview what's coming soon and generating buzz in the entertainment world.",
      },
      {
        title: "Popular",
        description:
          "Explore consistently popular content that audiences love across all categories.",
      },
    ],
    isHighlited: false,
  },
];
