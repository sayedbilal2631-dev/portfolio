import { createTheme, ThemeOptions } from '@mui/material/styles';

const baseTypography = {
  fontFamily: '"Plus Jakarta Sans", "DM Sans", system-ui, sans-serif',
  h1: { fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05 },
  h2: { fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif', fontWeight: 700, letterSpacing: '-0.025em' },
  h3: { fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif', fontWeight: 700, letterSpacing: '-0.02em' },
  h4: { fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif', fontWeight: 600, letterSpacing: '-0.015em' },
  h5: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, letterSpacing: '-0.01em' },
  h6: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, letterSpacing: '-0.005em' },
  body1: { fontFamily: '"Plus Jakarta Sans", sans-serif', letterSpacing: '-0.01em', lineHeight: 1.75 },
  body2: { fontFamily: '"Plus Jakarta Sans", sans-serif', letterSpacing: '-0.005em', lineHeight: 1.65 },
  button: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, letterSpacing: '0.01em' },
  caption: { fontFamily: '"Plus Jakarta Sans", sans-serif', letterSpacing: '0.04em' },
  overline: { fontFamily: '"Plus Jakarta Sans", sans-serif', letterSpacing: '0.1em', fontWeight: 700 },
};

const baseComponents: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '12px',
        textTransform: 'none',
        padding: '10px 24px',
        fontSize: '0.95rem',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': { transform: 'translateY(-2px)' },
      },
      contained: {
        background: 'linear-gradient(135deg, #6C63FF 0%, #E040FB 100%)',
        boxShadow: '0 4px 20px rgba(108, 99, 255, 0.4)',
        '&:hover': {
          background: 'linear-gradient(135deg, #5a52e0 0%, #d030eb 100%)',
          boxShadow: '0 8px 30px rgba(108, 99, 255, 0.6)',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: '16px', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: { borderRadius: '8px', fontWeight: 600, fontSize: '0.75rem' },
    },
  },
};

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#6C63FF', light: '#8B85FF', dark: '#4D46CC' },
    secondary: { main: '#E040FB', light: '#EA6FFB', dark: '#B000C8' },
    background: { default: '#0A0A0F', paper: '#12121A' },
    text: { primary: '#FFFFFF', secondary: '#B0B0C8' },
    divider: 'rgba(108, 99, 255, 0.15)',
  },
  typography: baseTypography,
  components: {
    ...baseComponents,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          background: 'rgba(18, 18, 26, 0.8)',
          border: '1px solid rgba(108, 99, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            border: '1px solid rgba(108, 99, 255, 0.4)',
            boxShadow: '0 8px 40px rgba(108, 99, 255, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 10, 15, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(108, 99, 255, 0.15)',
        },
      },
    },
  },
  shape: { borderRadius: 12 },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#6C63FF', light: '#8B85FF', dark: '#4D46CC' },
    secondary: { main: '#E040FB', light: '#EA6FFB', dark: '#B000C8' },
    background: { default: '#F5F5FF', paper: '#FFFFFF' },
    text: { primary: '#0A0A1A', secondary: '#5A5A7A' },
    divider: 'rgba(108, 99, 255, 0.12)',
  },
  typography: baseTypography,
  components: {
    ...baseComponents,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          background: '#FFFFFF',
          border: '1px solid rgba(108, 99, 255, 0.12)',
          boxShadow: '0 2px 20px rgba(108, 99, 255, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            border: '1px solid rgba(108, 99, 255, 0.35)',
            boxShadow: '0 8px 40px rgba(108, 99, 255, 0.18)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(245, 245, 255, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(108, 99, 255, 0.12)',
          boxShadow: 'none',
        },
      },
    },
  },
  shape: { borderRadius: 12 },
});
