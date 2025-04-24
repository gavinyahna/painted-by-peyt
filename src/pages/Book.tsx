import React from 'react';
import { Container, Typography } from '@mui/material';

const Book = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Book an Appointment
      </Typography>
      {/* Add booking form or embed booking widget here */}
    </Container>
  );
};

export default Book; 