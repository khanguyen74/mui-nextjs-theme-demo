'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import {
  createTheme,
  PaletteColorOptions,
  ThemeProvider,
} from '@mui/material/styles';

// Define themes
const themes = {
  secondTheme: createTheme({
    cssVariables: {
      colorSchemeSelector: 'class',
    },
    colorSchemes: {
      dark: {
        palette: {
          primary: {
            main: '#dd7d08',
            contrastText: 'rgb(1, 1, 4)',
          },
          secondary: {
            main: '#686841',
            contrastText: '#efe9e6',
          },
          accent: {
            main: '#438478',
            contrastText: 'rgb(10, 8, 5)',
          },
          divider: '#a6ae7e',
          text: {
            primary: 'rgb(239, 233, 230)',
            secondary: 'rgba(239, 233, 230, 0.6)',
            disabled: 'rgba(239, 233, 230, 0.38)',
          },
          background: {
            default: '#130f0c',
          },
        },
      },
      light: {
        palette: {
          primary: {
            main: '#eb6d1e',
            contrastText: '#191310',
          },
          secondary: {
            main: '#bebe97',
            contrastText: '#191310',
          },
          accent: {
            main: '#7bbcb0',
            contrastText: 'rgb(27, 19, 14)',
          },
          divider: '#798151',
          text: {
            primary: 'rgb(25, 19, 16)',
            secondary: 'rgba(25, 19, 16, 0.6)',
            disabled: 'rgba(25, 19, 16, 0.38)',
          },
          background: {
            default: '#f3efec',
          },
        },
      },
    },
  }),
  default: createTheme({
    cssVariables: {
      colorSchemeSelector: 'class',
    },
    colorSchemes: {
      dark: {
        palette: {
          primary: {
            main: '#abbccf',
            contrastText: 'rgb(7, 15, 24)',
          },
          secondary: {
            main: '#49515a',
            contrastText: '#d6e4f5',
          },
          accent: {
            main: '#a3d459',
            contrastText: 'rgb(7, 15, 24)',
          },
          divider: '#695e54',
          text: {
            primary: '#d6e4f5',
            secondary: 'rgba(247, 247, 248, 0.6)',
            disabled: 'rgba(247, 247, 248, 0.38)',
          },
          background: {
            default: '#070f18',
            paper: '#131920',
          },
        },
      },
      light: {
        palette: {
          primary: {
            main: '#304154',
            contrastText: 'rgb(231, 239, 248)',
          },
          secondary: {
            main: '#a5adb6',
            contrastText: '#0a1829',
          },
          divider: '#aba096',
          text: {
            primary: '#0a1829',
            secondary: 'rgba(7, 7, 8, 0.6)',
            disabled: 'rgba(7, 7, 8, 0.38)',
          },
          accent: {
            main: '#75a62b',
            contrastText: 'rgb(10, 24, 41)',
          },
          background: {
            default: '#e7eff8',
            paper: '#dfe5ec',
          },
        },
      },
    },
  }),
};

export type Theme = keyof typeof themes;

type ThemeContextType = {
  theme: Theme;
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: Theme) => void;
};
const ThemeModeContext = createContext<ThemeContextType>({
  theme: 'default',
  setTheme: (_) => {},
});

// expand the palette to include an accent color
declare module '@mui/material' {
  // eslint-disable-next-line no-unused-vars
  interface PaletteOptions {
    accent?: PaletteColorOptions;
  }

  // eslint-disable-next-line no-unused-vars
  interface ButtonPropsColorOverrides {
    accent: true;
  }
}

// Custom Hook for Theme Mode
export const useThemeContext = () => useContext(ThemeModeContext);

type ThemeProviderWrapperProps = {
  children: ReactNode;
  currentTheme: Theme;
};

const ThemeProviderWrapper = ({
  children,
  currentTheme,
}: Readonly<ThemeProviderWrapperProps>) => {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  return (
    <ThemeModeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themes[theme]} defaultMode="dark">
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeProviderWrapper;
