import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h5">Count: {count}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </Button>
    </Box>
  );
}

export default Counter;
