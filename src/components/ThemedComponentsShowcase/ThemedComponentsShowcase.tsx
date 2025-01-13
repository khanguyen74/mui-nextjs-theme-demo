'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';

const ThemedComponentsShowcase = () => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Divider sx={{ my: 5 }} />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          flexWrap: 'wrap',
        }}
      >
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary Button
        </Button>
        <Button variant="text" color="error">
          Text Button
        </Button>
      </Box>

      <Divider sx={{ my: 5 }} />

      <Box>
        <Button variant="contained" color="accent" onClick={handleMenuOpen}>
          Open Menu
        </Button>
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Box>

      <Divider sx={{ my: 5 }} />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Option 1"
          checked
        />
        <FormControlLabel
          control={<Checkbox color="secondary" />}
          label="Option 2"
          checked
        />
        <FormControlLabel
          control={<Checkbox color="success" />}
          label="Option 3"
          checked
        />
      </Box>

      <Divider sx={{ my: 5 }} />

      <Card sx={{ maxWidth: 400, mx: 'auto' }}>
        <CardContent>
          <Typography variant="h6" color="text.primary">
            Themed Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This card showcases how theme colors are applied to text and
            backgrounds. Try toggling the theme to see the changes.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ThemedComponentsShowcase;
