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
          position: "relative",
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
        <AccessTimeIcon fontSize="large" sx={{ position: "absolute", top: '-15px', right: -20, fontSize: '6em', opacity: 0.2 }} /> 
        <div >
        <AccessTimeIcon fontSize="large" sx={{ marginLeft: '10px' }} /> 

        </div>
      </Box>
    </ThemeProvider>
  );
}
