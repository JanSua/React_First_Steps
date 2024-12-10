import React from 'react';
import { Typography, Box } from '@mui/material';

function HelloWorld({ name }) {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4">Hello, {name}!</Typography>
    </Box>
  );
}

export default HelloWorld;
