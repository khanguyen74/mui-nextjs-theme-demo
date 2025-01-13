'use client';

import { Box, Button, Switch, useColorScheme } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Cookie from 'js-cookie';
import {
  Theme,
  useThemeContext,
} from '../ThemeProviderWrapper/ThemeProviderWrapper';

type ThemeToggleProps = {
  defaultMode: 'dark' | 'light';
};

const ThemeToggle = ({ defaultMode }: ThemeToggleProps) => {
  const { mode, setMode } = useColorScheme();
  const { setTheme } = useThemeContext();
  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    Cookie.set('theme', theme);
  };

  const handleSwitchMode = (mode: 'dark' | 'light') => {
    setMode(mode);
    Cookie.set('mode', mode);
  };

  let currentMode = mode ?? defaultMode;

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
            backgroundColor: currentMode === 'dark' ? '#abbccf' : '#304154',
            color:
              currentMode === 'dark' ? 'rgb(7, 15, 24)' : 'rgb(231, 239, 248)',
          }}
        >
          Default Theme
        </Button>
        <Button
          variant="contained"
          onClick={() => handleThemeChange('secondTheme')}
          sx={{
            backgroundColor: currentMode === 'dark' ? '#dd7d08' : '#eb6d1e',
            color: currentMode === 'dark' ? 'rgb(1, 1, 4)' : '#191310',
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
          checked={currentMode === 'dark'}
          onChange={() =>
            handleSwitchMode(currentMode === 'dark' ? 'light' : 'dark')
          }
          name="theme"
          inputProps={{ 'aria-label': 'toggle theme' }}
        />
        <DarkModeOutlinedIcon />
      </Box>
    </Box>
  );
};

export default ThemeToggle;
