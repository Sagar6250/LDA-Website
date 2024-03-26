import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function CustomBox() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#FFA500', 
            dark: '#CC7A00', 
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 200,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          color: 'white', 
          '&:hover': {
            bgcolor: 'primary.dark'
          },
        }}
      >
        <AccessTimeIcon fontSize="large" sx={{ marginLeft: '10px' }} /> 
      </Box>
    </ThemeProvider>
  );
}
