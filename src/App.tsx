import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF69B4', // Hot pink
    },
    secondary: {
      main: '#ff9ed4', // Light pink
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Header />
          <Box
            sx={{
              backgroundImage: 'url(/HomePageNailsCrop.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat',
              minHeight: 'calc(100vh - 64px)', // Subtract header height
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.6)', // Semi-transparent white overlay
              }
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
              </Routes>
            </Box>
          </Box>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
