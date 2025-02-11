"use client"
import React, { ReactNode } from 'react';
import { Container, Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container component="main" sx={{ flex: 1, mt: 2 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;