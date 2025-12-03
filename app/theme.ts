'use client';
import { createTheme } from '@mui/material/styles';
import { Poppins, Playfair_Display } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF5722', // Red Orange
      light: '#FF8A50',
      dark: '#C41C00',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D4AF37', // Yellow Brown / Gold
      light: '#FFE06D',
      dark: '#A08000',
      contrastText: '#000000',
    },
    background: {
      default: '#FFF8F0', // Warm White
      paper: '#FFFFFF',
    },
    text: {
      primary: '#3E2723', // Dark Brown
      secondary: '#5D4037',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
    },
    h2: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
    },
    h3: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
    },
    h4: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
    },
    h5: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
    },
    h6: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

export default theme;
