import React from 'react';
import { Container, Grid, Card, CardMedia, Typography, Box } from '@mui/material';

// This would be replaced with actual Instagram data
const placeholderImages = [
  // We'll replace these with real Instagram data
  { id: 1, url: 'placeholder1.jpg', caption: 'Nail Art Design 1' },
  { id: 2, url: 'placeholder2.jpg', caption: 'Nail Art Design 2' },
  // ... more images
];

const Gallery = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Latest Nail Designs
      </Typography>
      <Box sx={{ width: '100%', height: '800px' }}>
        <iframe
          src="https://embedsocial.com/facebook_album/pro_instagram/[YOUR_FEED_ID]"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </Box>
    </Container>
  );
};

export default Gallery; 