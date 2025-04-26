import React from 'react';
import Box from '@mui/material/Box';
import {
  Container,
  Grid as MuiGrid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import logo from '../logo.svg';

const blogPosts = [
  {
    title: "Summer Nail Art Trends 2024",
    date: "March 15, 2024",
    description: "Discover the hottest nail art trends for this summer, featuring vibrant colors and unique patterns that will make your nails stand out!",
    image: logo
  },
  {
    title: "Perfect French Manicure Tips",
    date: "March 10, 2024",
    description: "Learn the secrets to achieving the perfect French manicure that lasts longer and looks professionally done.",
    image: logo
  },
  {
    title: "Nail Care Essentials",
    date: "March 5, 2024",
    description: "Everything you need to know about maintaining healthy nails and making your manicure last longer.",
    image: logo
  }
];

const Blog = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography 
        variant="h3" 
        component="h1" 
        align="center" 
        gutterBottom
        sx={{ 
          mb: 6,
          color: 'primary.main'
        }}
      >
        Latest Nail Art Blog Posts
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <MuiGrid container spacing={4}>
          {blogPosts.map((post, index) => (
            <MuiGrid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3
                  }
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ 
                    height: 200,
                    objectFit: 'contain',
                    bgcolor: 'grey.50',
                    p: 2
                  }}
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {post.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button 
                    size="medium" 
                    color="primary" 
                    variant="contained"
                    sx={{ borderRadius: 28 }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </MuiGrid>
          ))}
        </MuiGrid>
      </Box>
    </Container>
  );
};

export default Blog; 