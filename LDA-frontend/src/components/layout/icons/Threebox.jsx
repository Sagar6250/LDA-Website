import React from 'react';
import Box from '@mui/material/Box';

function Threebox() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          height: 100,
          border: '2px solid #FFA500',
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
        }}
      />
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          height: 100,
          border: '2px solid #FFA500',
        }}
      />
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          height: 100,
          border: '2px solid #FFA500',
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px',
        }}
      />
    </Box>
  );
}

export default Threebox;

