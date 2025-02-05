import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Menu, MenuItem, Container } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

const Header: React.FC = () => {
  const { toggleTheme, isDarkTheme } = useTheme();
  const { data: session } = useSession();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signOut().then(() => router.push('/'));
  };

  const handleSignIn = () => {
    signIn();
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, }}>
            <Image width={40} height={40} src="/logo.png" alt="Personal Notes Logo" style={{ marginRight: '10px' }} />
            <Typography variant="h6" component={Link} href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
              Personal Notes
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button color="inherit" component={Link} href="/new">Create New Note</Button>
            {session ? (
              <Button color="inherit" onClick={handleSignOut}>Sign Out</Button>
            ) : (
              <Button color="inherit" onClick={handleSignIn}>Sign In</Button>
            )}
            <IconButton onClick={toggleTheme} color="inherit">
              {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} href="/new">Create New Note</MenuItem>
              {session ? (
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              ) : (
                <MenuItem onClick={handleSignIn}>Sign In</MenuItem>
              )}
              <MenuItem onClick={toggleTheme}>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>

    </AppBar>
  );
};

export default Header;