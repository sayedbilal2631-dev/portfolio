'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  useMediaQuery, useTheme, Tooltip, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import { useThemeMode } from '@/theme/ThemeProvider';
import { useActiveSection } from '@/hooks/useInView';
import { NAV_LINKS } from '@/lib/data';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mode, toggleTheme } = useThemeMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const activeSection = useActiveSection();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setDrawerOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = async () => {
    const filePath = '/Resume.pdf';

    try {
      const res = await fetch(filePath, { method: 'HEAD' });
      if (!res.ok) {
        console.error('CV file not found on server');
        alert('CV is not available at the moment. Please try again later.');
        return;
      }
    } catch {
      alert('Could not reach the server. Check your connection.');
      return;
    }

    const link = document.createElement('a');
    link.href = filePath;
    link.setAttribute('download', 'Bilal_CV.pdf');
    link.setAttribute('target', '_blank');
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? (mode === 'dark'
            ? '0 4px 30px rgba(108,99,255,0.15)'
            : '0 4px 30px rgba(108,99,255,0.1)') : 'none',
        }}
      >
        <Toolbar sx={{ maxWidth: '1200px', mx: 'auto', width: '100%', px: { xs: 2, md: 4 }, py: 1 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexGrow: 1 }}>
            <CodeIcon sx={{ color: 'primary.main', fontSize: 28 }} />
            <Typography
              variant="h6"
              sx={{ fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif', fontWeight: 800, letterSpacing: '-0.02em', color: 'text.primary' }}
            >
              Bilal{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>DEV</Box>
            </Typography>
          </Box>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mr: 3 }}>
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <Button
                    key={link.label}
                    onClick={() => handleNav(link.href)}
                    sx={{
                      color: isActive ? 'primary.main' : 'text.secondary',
                      fontWeight: isActive ? 700 : 500,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        transform: `translateX(-50%) scaleX(${isActive ? 1 : 0})`,
                        width: '70%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #6C63FF, #E040FB)',
                        borderRadius: '2px',
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover::after': { transform: 'translateX(-50%) scaleX(1)' },
                      '&:hover': { color: 'primary.main', background: 'transparent', transform: 'none' },
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'}>
              <IconButton
                onClick={toggleTheme}
                size="small"
                sx={{
                  color: 'text.secondary',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '10px',
                  p: 0.8,
                  '&:hover': { color: 'primary.main', borderColor: 'primary.main', transform: 'rotate(20deg)' },
                  transition: 'all 0.3s ease',
                }}
              >
                {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              </IconButton>
            </Tooltip>

            {!isMobile && (
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                size="small"
                sx={{ ml: 1 }}
                onClick={handleDownloadCV}
              >
                Download CV
              </Button>
            )}

            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'text.primary' }}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: mode === 'dark' ? '#0A0A0F' : '#F5F5FF',
            borderLeft: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {NAV_LINKS.map((link) => (
            <ListItem key={link.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => handleNav(link.href)}
                sx={{
                  borderRadius: '12px',
                  color: activeSection === link.href.replace('#', '') ? 'primary.main' : 'text.primary',
                  '&:hover': { background: 'rgba(108, 99, 255, 0.1)', color: 'primary.main' },
                }}
              >
                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600 }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <Button variant="contained" startIcon={<DownloadIcon />} fullWidth onClick={handleDownloadCV}>
              Download CV
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
