import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';

const NoMatch = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/'); // Replace '/' with your desired home page path
    }, 5000); // 5000 ms = 5 seconds

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <Typography variant="h2">404 Not Found</Typography>
      </Box>
      <Typography variant="body1">
        The page you are looking for could not be found.
        <br />
        Please try again or <Link to="/" className='link-to-home' >go to the homepage</Link>.
      </Typography>
    </Box>
  );
};

export default NoMatch;