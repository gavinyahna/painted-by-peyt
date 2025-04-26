import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface NavItem {
  path: string;
  label: string;
  external?: boolean;
}

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems: NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <AppBar position="static" sx={{ bgcolor: 'white' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/"
            sx={{ 
              color: 'primary.main',
              textDecoration: 'none'
            }}
          >
            Painted By Peyt
          </Typography>
          <Box
            component="img"
            src="/logo.png"
            alt="Painted By Peyt Logo"
            sx={{ 
              height: 40,
              width: 40,
              borderRadius: 2,
              objectFit: 'cover'
            }}
          />
        </Box>
        
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              onClick={handleMenu}
              sx={{ color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {navItems.map((item) => (
                <MenuItem 
                  key={item.path}
                  onClick={handleClose}
                  component={item.external ? 'a' : Link}
                  href={item.external ? item.path : undefined}
                  to={!item.external ? item.path : undefined}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  selected={!item.external && location.pathname === item.path}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button 
                key={item.path}
                component={item.external ? 'a' : Link}
                href={item.external ? item.path : undefined}
                to={!item.external ? item.path : undefined}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                color="primary"
                sx={{
                  fontWeight: !item.external && location.pathname === item.path ? 'bold' : 'normal',
                  borderBottom: !item.external && location.pathname === item.path ? 2 : 0
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header; 