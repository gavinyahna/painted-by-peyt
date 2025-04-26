import React from 'react';
import { 
  Container, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box 
} from '@mui/material';
import logo from '../logo.svg';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Card 
        elevation={3} 
        sx={{ 
          borderRadius: 2,
          bgcolor: 'background.paper'
        }}
      >
        <CardContent 
          sx={{ 
            p: 6,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Painted By Peyt
          </Typography>
          <Typography variant="h6" paragraph>
            Professional Nail Art & Design
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button 
              variant="contained" 
              size="large"
              href="https://app.squareup.com/appointments/book/b3eppg68rn4z7h/L479VQHB60A78/start"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                py: 2,
                px: 4,
                fontSize: '1.2rem',
                borderRadius: 2
              }}
            >
              Book an Appointment
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home; 