import Stack from "@mui/material/Stack";

import MoviesList from "@/components/Movies";

export default function Home() {
  return (
    <Stack gap={2}>
      <MoviesList />
    </Stack>
  );
}
