import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: 'center', mt: 'auto' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Personal Notes.
      </Typography>
    </Box>
  );
};

export default Footer;