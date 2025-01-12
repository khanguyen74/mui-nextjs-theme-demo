'use client';

import { Box, Button, Switch, useColorScheme } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import {
  Theme,
  useThemeContext,
} from '../ThemeProviderWrapper/ThemeProviderWrapper';

const ThemeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const { setTheme } = useThemeContext();
  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box>
        <Button
          variant="contained"
          onClick={() => handleThemeChange('default')}
          sx={{
            backgroundColor: mode === 'dark' ? '#abbccf' : '#304154',
            color: mode === 'dark' ? 'rgb(7, 15, 24)' : 'rgb(231, 239, 248)',
          }}
        >
          Default Theme
        </Button>
        <Button
          variant="contained"
          onClick={() => handleThemeChange('sunrise')}
          sx={{
            backgroundColor: mode === 'dark' ? '#dd7d08' : '#eb6d1e',
            color: mode === 'dark' ? 'rgb(1, 1, 4)' : '#191310',
          }}
        >
          Sunrise Theme
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LightModeOutlinedIcon />
        <Switch
          checked={mode === 'dark'}
          onChange={() => setMode(mode === 'dark' ? 'light' : 'dark')}
          name="theme"
          inputProps={{ 'aria-label': 'toggle theme' }}
        />
        <DarkModeOutlinedIcon />
      </Box>
    </Box>
  );
};

export default ThemeToggle;
