import { Header, ThemeToggle } from '@/components';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{ marginTop: 10 }}>
        <Box>
          <ThemeToggle />
        </Box>
      </Box>
    </>
  );
}
