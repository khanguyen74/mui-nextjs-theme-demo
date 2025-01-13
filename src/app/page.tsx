import { Header, ThemedComponentsShowcase, ThemeToggle } from '@/components';
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{ marginTop: 10 }}>
        <Typography sx={{ textAlign: 'center', my: 5 }} variant="h5">
          Toggle the theme to see the changes. Theme should persist on page
          reload.
        </Typography>
        <ThemeToggle />
        <ThemedComponentsShowcase />
      </Box>
    </>
  );
}
