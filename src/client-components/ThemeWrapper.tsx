"use client";
import {  CssBaseline } from '@mui/material';
import { ThemeProvider as CustomThemeProvider } from '../context/ThemeContext';


export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CustomThemeProvider>
      <CustomThemeProvider>
        <CssBaseline />
        {children}
      </CustomThemeProvider>
    </CustomThemeProvider>
  );
}