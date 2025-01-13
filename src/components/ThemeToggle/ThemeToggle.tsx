'use client';

import { Box, Button, Switch, useColorScheme } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Cookie from 'js-cookie';
import {
  Theme,
  useThemeContext,
} from '../ThemeProviderWrapper/ThemeProviderWrapper';

const ThemeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const { setTheme } = useThemeContext();
  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    Cookie.set('theme', theme);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
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
          onClick={() => handleThemeChange('secondTheme')}
          sx={{
            backgroundColor: mode === 'dark' ? '#dd7d08' : '#eb6d1e',
            color: mode === 'dark' ? 'rgb(1, 1, 4)' : '#191310',
          }}
        >
          Second Theme
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          my: 5,
        }}
      >
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
