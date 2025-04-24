import React from 'react';
import { Container, Grid, Card, CardMedia, Typography, Box, Link, IconButton, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const Gallery = () => {
  // Mock data
  const galleryImages = [
    { id: 1, url: '/logo.svg', caption: 'Nail Art Design 1' },
    { id: 2, url: '/logo.svg', caption: 'Nail Art Design 2' },
    { id: 3, url: '/logo.svg', caption: 'Nail Art Design 3' },
    { id: 4, url: '/logo.svg', caption: 'Nail Art Design 4' },
    { id: 5, url: '/logo.svg', caption: 'Nail Art Design 5' },
    { id: 6, url: '/logo.svg', caption: 'Nail Art Design 6' },
  ];

  const instagramUsername = 'paintedbypeytt';
  const instagramUrl = `https://www.instagram.com/${instagramUsername}`;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        align="center" 
        gutterBottom
        sx={{ mb: 4, color: 'primary.main' }}
      >
        Nail Art Gallery
      </Typography>

      <Grid container spacing={3}>
        {galleryImages.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <Card 
              sx={{ 
                height: '100%',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6
                }
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={image.url}
                alt={image.caption}
                sx={{ 
                  objectFit: 'cover',
                  bgcolor: 'grey.100'
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Divider sx={{ mb: 4 }} />
        <Typography variant="h6" gutterBottom color="text.secondary">
          Follow Us on Instagram
        </Typography>
        <Link 
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            color: 'primary.main',
            textDecoration: 'none',
            '&:hover': {
              color: 'primary.dark'
            }
          }}
        >
          <IconButton color="inherit" sx={{ mr: 1 }}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6">
            @{instagramUsername}
          </Typography>
        </Link>
      </Box>
    </Container>
  );
};

export default Gallery; 