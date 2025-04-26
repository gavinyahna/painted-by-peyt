import React from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Box
} from '@mui/material';

const services = [
  { name: 'Structured Manicure', price: '$60', description: 'Full Set or Fill' },
  { name: 'Tier 1', price: '$7', description: 'Basic nail art design' },
  { name: 'Tier 2', price: '$12', description: 'Intermediate nail art design' },
  { name: 'Tier 3', price: '$18', description: 'Advanced nail art design' },
];

const Pricing = () => {
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
        Service Pricing
      </Typography>

      <TableContainer component={Paper} elevation={3} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Service</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.name}>
                <TableCell component="th" scope="row">
                  {service.name}
                </TableCell>
                <TableCell>{service.price}</TableCell>
                <TableCell>{service.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          backgroundColor: 'background.paper'
        }}
      >
        <Typography variant="body1" color="text.secondary" paragraph>
          All prices are subject to change based on nail length, design complexity, and additional services. We offer a range of nail art tiers to suit your style and preferences.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          * Prices are estimates and may vary based on individual needs
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ** Contact us for custom designs and special requests
        </Typography>
      </Paper>
    </Container>
  );
};

export default Pricing; 