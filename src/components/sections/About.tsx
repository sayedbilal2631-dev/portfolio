'use client';

import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Match the exact metrics and aesthetics from the image banner
const BANNER_STATS = [
  { value: '50+', label: 'Projects Completed', icon: '🚀', darkColor: '#9d4edd', lightColor: '#6c5ce7' },
  { value: '3+', label: 'Years Learning', icon: '📅', darkColor: '#ff007f', lightColor: '#e84393' },
  { value: '10+', label: 'Technologies', icon: '💻', darkColor: '#00b4d8', lightColor: '#0984e3' },
  { value: '100%', label: 'Client Satisfaction', icon: '😊', darkColor: '#ffb703', lightColor: '#e17055' },
];

const SERVICES_DATA = [
  {
    title: 'Frontend Development',
    desc: 'React, Next.js, Tailwind CSS. Building responsive and modern UIs.',
    icon: '💻',
    darkColor: '#00b4d8',
    lightColor: '#0984e3',
  },
  {
    title: 'Backend Development',
    desc: 'Node.js, Express, REST APIs. Scalable backend solutions and API development.',
    icon: '⚙️',
    darkColor: '#9d4edd',
    lightColor: '#6c5ce7',
  },
  {
    title: 'Database Design',
    desc: 'MySQL, MongoDB, Firebase. Designing efficient and optimized databases.',
    icon: '🗄️',
    darkColor: '#ffb703',
    lightColor: '#e17055',
  },
  {
    title: 'Web Scraping',
    desc: 'Playwright, Puppeteer, Cheerio. Extracting valuable data automatically.',
    icon: '🕷️',
    darkColor: '#00e676',
    lightColor: '#00b894',
  },
];

export default function About() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        // Adaptive primary background mapping
        background: isDark ? '#03030c' : '#f8f9fa',
        color: isDark ? '#ffffff' : '#2d3436',
        transition: 'background 0.3s ease, color 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        
        {/* SECTION 1: Horizontal Inline Stats Banner */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: 3,
            p: 3,
            mb: 10,
            borderRadius: '16px',
            // Adaptive card backgrounds and borders
            background: isDark ? 'rgba(15, 15, 30, 0.6)' : 'rgba(255, 255, 255, 0.9)',
            border: '1px solid',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.06)',
            boxShadow: isDark ? 'none' : '0px 10px 30px rgba(0, 0, 0, 0.04)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {BANNER_STATS.map((stat) => {
            const currentAccent = isDark ? stat.darkColor : stat.lightColor;
            return (
              <Box
                key={stat.label}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  justifyContent: { xs: 'flex-start', md: 'center' },
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    border: `1.5px solid ${currentAccent}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                    boxShadow: `0 0 12px ${currentAccent}25`,
                  }}
                >
                  {stat.icon}
                </Box>
                <Box>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 800, 
                      color: isDark ? '#ffffff' : '#2d3436', 
                      lineHeight: 1.1 
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: isDark ? '#8a8aa3' : '#636e72', 
                      display: 'block', 
                      mt: 0.3 
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* SECTION 2: Split Layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '4.5fr 7.5fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'flex-start',
          }}
        >
          {/* Left Block: About Info */}
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: isDark ? '#00b4d8' : '#0984e3',
                fontWeight: 700,
                letterSpacing: '0.12em',
                display: 'block',
                mb: 2,
              }}
            >
              ABOUT ME
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 3,
                lineHeight: 1.25,
                fontSize: { xs: '2.2rem', md: '2.5rem' },
                color: isDark ? '#ffffff' : '#2d3436',
              }}
            >
              Building digital experiences
              <br />
              that make an{' '}
              <Box
                component="span"
                sx={{
                  background: isDark 
                    ? 'linear-gradient(135deg, #00b4d8, #00e676)' 
                    : 'linear-gradient(135deg, #0984e3, #00b894)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                impact.
              </Box>
            </Typography>

            <Typography sx={{ color: isDark ? '#8a8aa3' : '#636e72', mb: 2, lineHeight: 1.7, fontSize: '0.95rem' }}>
              I&apos;m a passionate web developer focused on creating beautiful, functional and
              user-friendly websites. I love turning ideas into real products.
            </Typography>

            <Typography sx={{ color: isDark ? '#8a8aa3' : '#636e72', mb: 4, lineHeight: 1.7, fontSize: '0.95rem' }}>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies or
              working on side projects.
            </Typography>

            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderColor: isDark ? 'rgba(0, 180, 216, 0.4)' : 'rgba(9, 132, 227, 0.4)',
                color: isDark ? '#00b4d8' : '#0984e3',
                borderRadius: '6px',
                textTransform: 'none',
                fontWeight: 600,
                px: 2.5,
                py: 1,
                '&:hover': {
                  background: isDark ? 'rgba(0, 180, 216, 0.08)' : 'rgba(9, 132, 227, 0.06)',
                  borderColor: isDark ? '#00b4d8' : '#0984e3',
                  transform: 'translateX(4px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              More About Me
            </Button>
          </Box>

          {/* Right Block: Services Feature Grid Container */}
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography
                variant="caption"
                sx={{ color: isDark ? '#00e676' : '#00b894', fontWeight: 700, letterSpacing: '0.12em' }}
              >
                SERVICES
              </Typography>
              <Button
                variant="text"
                endIcon={<ArrowForwardIosIcon sx={{ fontSize: '0.7rem !important' }} />}
                sx={{
                  color: isDark ? '#9d4edd' : '#6c5ce7',
                  textTransform: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  '&:hover': { background: 'transparent', opacity: 0.8 },
                }}
              >
                View All Services
              </Button>
            </Box>

            {/* Subgrid matching image layout */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2.5,
              }}
            >
              {SERVICES_DATA.map((service) => {
                const currentAccent = isDark ? service.darkColor : service.lightColor;
                return (
                  <Box
                    key={service.title}
                    sx={{
                      p: 3,
                      borderRadius: '12px',
                      background: isDark ? 'rgba(10, 10, 20, 0.5)' : '#ffffff',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.05)',
                      borderLeft: `3px solid ${currentAccent}`,
                      boxShadow: isDark ? 'none' : '0px 4px 20px rgba(0, 0, 0, 0.02)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        borderColor: currentAccent,
                        boxShadow: isDark 
                          ? `0 4px 20px ${currentAccent}15` 
                          : '0px 10px 25px rgba(0, 0, 0, 0.06)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                      <Box sx={{ fontSize: '1.25rem', color: currentAccent }}>
                        {service.icon}
                      </Box>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          fontWeight: 700, 
                          color: isDark ? '#ffffff' : '#2d3436' 
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: isDark ? '#8a8aa3' : '#636e72', 
                        lineHeight: 1.5 
                      }}
                    >
                      {service.desc}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}