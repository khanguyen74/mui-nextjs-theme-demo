import { Box, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3">Demo</Typography>
      <IconButton
        sx={{ width: '40px', height: '40px' }}
        href="https://github.com/khanguyen74"
        target="_blank"
      >
        <GitHubIcon color="primary" />
      </IconButton>
    </Box>
  );
};

export default Header;
