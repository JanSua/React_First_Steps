import React, { useState, useEffect } from 'react';
import { CircularProgress, Typography, List, ListItem, Box } from '@mui/material';

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(['React', 'Router', 'Hooks']);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box textAlign="center" mt={4}>
      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {data.map((item, index) => (
            <ListItem key={index}>
              <Typography>{item}</Typography>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default DataFetcher;
