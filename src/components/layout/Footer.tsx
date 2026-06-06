'use client';

import React from 'react';
import { Box, Container, Typography, IconButton, Divider, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CodeIcon from '@mui/icons-material/Code';
import { NAV_LINKS } from '@/lib/data';

export default function Footer() {
  const theme = useTheme();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box
      component="footer"
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(0deg, rgba(10,10,15,1) 0%, rgba(12,12,20,1) 100%)'
          : 'linear-gradient(0deg, #F0F0FA 0%, #F5F5FF 100%)',
        borderTop: '1px solid',
        borderColor: 'divider',
        pt: 4,
        pb: 3,
        mt: 0,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'center' },
            gap: 2,
            mb: 3,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <CodeIcon sx={{ color: 'primary.main', fontSize: 24 }} />
            <Typography
              variant="h6"
              sx={{ fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif', fontWeight: 800 }}
            >
              ALEX <Box component="span" sx={{ color: 'primary.main' }}>DEV</Box>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {NAV_LINKS.map((link) => (
              <Typography
                key={link.label}
                component="a"
                href={link.href}
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  px: 1,
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {[
              { icon: <GitHubIcon fontSize="small" />, href: '#' },
              { icon: <LinkedInIcon fontSize="small" />, href: '#' },
              { icon: <TwitterIcon fontSize="small" />, href: '#' },
              { icon: <InstagramIcon fontSize="small" />, href: '#' },
            ].map((s, i) => (
              <IconButton
                key={i}
                size="small"
                href={s.href}
                sx={{
                  color: 'text.secondary',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '10px',
                  '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
                  transition: 'all 0.2s',
                }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'divider', mb: 3 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2024 Alex Developer. All rights reserved.
          </Typography>

          <IconButton
            onClick={scrollTop}
            size="small"
            sx={{
              background: 'linear-gradient(135deg, #6C63FF, #E040FB)',
              color: 'white',
              borderRadius: '10px',
              '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 4px 20px rgba(108,99,255,0.4)' },
              transition: 'all 0.3s',
            }}
          >
            <ArrowUpwardIcon fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
