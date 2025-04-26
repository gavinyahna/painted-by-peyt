import React from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  Grid, 
  Card, 
  CardContent,
  CardMedia,
  Link
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        align="center"
        sx={{ 
          mb: 4,
          color: 'primary.main'
        }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardMedia
              component="img"
              height="300"
              image="/contact-image.jpg"
              alt="Contact us"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                We'd love to hear from you! Whether you have questions about our services or want to schedule an appointment, feel free to reach out.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneIcon color="primary" />
                <Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    Phone
                  </Typography>
                  <Link 
                    href="tel:+18018676269" 
                    color="primary"
                    sx={{ textDecoration: 'none' }}
                  >
                    (801) 867-6269
                  </Link>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmailIcon color="primary" />
                <Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    Email
                  </Typography>
                  <Link 
                    href="mailto:peytonlchristensen@gmail.com" 
                    color="primary"
                    sx={{ textDecoration: 'none' }}
                  >
                    peytonlchristensen@gmail.com
                  </Link>
                </Box>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Business Hours:
                </Typography>
                <Typography variant="body2">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </Typography>
                <Typography variant="body2">
                  Saturday: 10:00 AM - 4:00 PM
                </Typography>
                <Typography variant="body2">
                  Sunday: Closed
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 