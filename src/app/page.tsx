import { cookies } from 'next/headers';
import { Header, ThemedComponentsShowcase, ThemeToggle } from '@/components';
import { Box, Typography } from '@mui/material';

export default async function Home() {
  const cookieStore = await cookies();
  let mode = cookieStore.get('mode')?.value as 'dark' | 'light';
  return (
    <>
      <Header />
      <Box sx={{ marginTop: 10 }}>
        <Typography sx={{ textAlign: 'center', my: 5 }} variant="h5">
          Toggle the theme to see the changes. Theme should persist on page
          reload.
        </Typography>
        <ThemeToggle defaultMode={mode} />
        <ThemedComponentsShowcase />
      </Box>
    </>
  );
}
