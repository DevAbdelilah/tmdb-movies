import Stack from "@mui/material/Stack";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const slug = (await params).title;

  return <Stack>My Movie: {slug}</Stack>;
}
