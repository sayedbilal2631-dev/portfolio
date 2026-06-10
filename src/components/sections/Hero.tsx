'use client';

import { Box, Container, Typography, Button, IconButton, useTheme, } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React, { useEffect, useState } from 'react';

const ROLES = ['Web Developer', 'React Expert', 'Freelancer'];
const STATS = [
  { value: '3+', label: 'Years\nExperience' },
  { value: '50+', label: 'Projects\nCompleted' },
  { value: '20+', label: 'Happy\nClients' },
];

export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let i = typing ? 0 : role.length;
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(role.slice(0, i + 1));
        i++;
        if (i > role.length) {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 1800);
        }
      } else {
        setDisplayed(role.slice(0, i - 1));
        i--;
        if (i < 0) {
          clearInterval(interval);
          setRoleIndex((p) => (p + 1) % ROLES.length);
          setTyping(true);
        }
      }
    }, typing ? 75 : 40);
    return () => clearInterval(interval);
  }, [roleIndex, typing]);

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
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 8 },
        pb: { xs: 6, md: 4 },
        background: isDark
          ? '#0A0A0F'
          : '#F5F5FF',
      }}
    >
      {/* Background mesh */}
      <Box sx={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: isDark
          ? 'radial-gradient(ellipse 80% 60% at 65% 40%, rgba(108,99,255,0.10) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 70%, rgba(224,64,251,0.07) 0%, transparent 60%)'
          : 'radial-gradient(ellipse 80% 60% at 65% 40%, rgba(108,99,255,0.08) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 70%, rgba(224,64,251,0.05) 0%, transparent 60%)',
      }} />

      {/* Grid dots pattern */}
      <Box sx={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: isDark ? 0.25 : 0.15,
        backgroundImage: 'radial-gradient(rgba(108,99,255,0.6) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* ── LEFT CONTENT ── */}
          <Box
            sx={{
              animation: 'fadeSlideLeft 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
              '@keyframes fadeSlideLeft': {
                from: { opacity: 0, transform: 'translateX(-48px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            {/* Greeting badge */}
            <Box
              sx={{
                display: 'inline-flex', alignItems: 'center', gap: 1,
                px: 2, py: 0.8, mb: 3,
                borderRadius: '100px',
                background: isDark ? 'rgba(108,99,255,0.12)' : 'rgba(108,99,255,0.08)',
                border: '1px solid rgba(108,99,255,0.25)',
              }}
            >
              <Box sx={{
                width: 8, height: 8, borderRadius: '50%',
                background: 'linear-gradient(135deg, #6C63FF, #E040FB)',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%,100%': { transform: 'scale(1)', opacity: 1 },
                  '50%': { transform: 'scale(1.5)', opacity: 0.6 },
                },
              }} />
              <Typography
                variant="body2"
                sx={{ color: 'primary.main', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.04em' }}
              >
                Available for Work
              </Typography>
            </Box>

            {/* Name */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', sm: '3.8rem', md: '4.4rem', lg: '5rem' },
                mb: 1,
              }}
            >
              Hi, I&apos;m{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #6C63FF 0%, #E040FB 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                Bilal
              </Box>
            </Typography>

            {/* Typewriter role */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3, minHeight: 44 }}>
              <Box sx={{
                width: 3, height: 36, borderRadius: '2px', flexShrink: 0,
                background: 'linear-gradient(180deg, #6C63FF, #E040FB)',
              }} />
              <Typography
                variant="h4"
                sx={{
                  color: isDark ? 'rgba(255,255,255,0.75)' : 'rgba(10,10,26,0.65)',
                  fontWeight: 500,
                  fontSize: { xs: '1.3rem', md: '1.65rem' },
                  letterSpacing: '-0.01em',
                }}
              >
                {displayed}
                <Box component="span" sx={{
                  borderRight: '2.5px solid',
                  borderColor: 'primary.main',
                  ml: 0.4,
                  animation: 'blink 1s step-end infinite',
                  '@keyframes blink': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
                }} />
              </Typography>
            </Box>

            <Typography
              color="text.secondary"
              sx={{ mb: 4.5, maxWidth: 480, fontSize: '1.05rem', lineHeight: 1.8 }}
            >
              I build responsive, fast and modern websites with clean code and
              great user experience. Turning your ideas into beautiful digital products.
            </Typography>

            {/* CTA buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{ px: 3.5, py: 1.4, fontSize: '0.95rem' }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />}
                sx={{
                  px: 3.5, py: 1.4, fontSize: '0.95rem',
                  borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.18)',
                  color: 'text.primary',
                  '&:hover': { borderColor: 'primary.main', color: 'primary.main', background: 'rgba(108,99,255,0.05)' },
                }}
                onClick={handleDownloadCV}
              >
                Download CV
              </Button>
            </Box>

            {/* Stats row */}
            <Box sx={{ display: 'flex', gap: 4, mb: 5, flexWrap: 'wrap' }}>
              {STATS.map((s, i) => (
                <Box key={i}>
                  <Typography
                    sx={{
                      fontSize: '2rem', fontWeight: 800,
                      fontFamily: '"Bricolage Grotesque", sans-serif',
                      background: 'linear-gradient(135deg, #6C63FF, #E040FB)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ whiteSpace: 'pre-line', fontSize: '0.75rem', fontWeight: 600, lineHeight: 1.4 }}
                  >
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Socials */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[
                { icon: <GitHubIcon fontSize="small" />, href: 'https://github.com/sayedbilal2631-dev' },
                {
                  icon: <LinkedInIcon fontSize="small" />, href: 'https://www.linkedin.com/in/sayed-bilal-245b81378/'
                },
              ].map((s, i) => (
                <IconButton
                  key={i}
                  size="small"
                  href={s.href}
                  target="_blank"
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

          {/* ── RIGHT: DEVELOPER IMAGE ── */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              animation: 'fadeSlideRight 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both',
              '@keyframes fadeSlideRight': {
                from: { opacity: 0, transform: 'translateX(48px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            {/* Outer glow ring */}
            <Box sx={{
              position: 'absolute',
              width: 420, height: 420,
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #6C63FF, #E040FB, #6C63FF)',
              animation: 'spin 8s linear infinite',
              '@keyframes spin': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
              opacity: 0.15,
              filter: 'blur(1px)',
            }} />

            {/* Mid ring */}
            <Box sx={{
              position: 'absolute',
              width: 390, height: 390,
              borderRadius: '50%',
              border: '1.5px dashed rgba(108,99,255,0.3)',
              animation: 'spin 20s linear infinite reverse',
            }} />

            {/* Floating skill badges */}
            {[
              { label: 'React', color: '#61DAFB', angle: -30, dist: 195 },
              { label: 'Next.js', color: isDark ? '#fff' : '#000', angle: 60, dist: 195 },
              { label: 'TypeScript', color: '#3178C6', angle: 150, dist: 195 },
              { label: 'Node.js', color: '#339933', angle: 240, dist: 195 },
            ].map((badge) => {
              const rad = (badge.angle * Math.PI) / 180;
              const x = Math.cos(rad) * badge.dist;
              const y = Math.sin(rad) * badge.dist;
              return (
                <Box
                  key={badge.label}
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    zIndex: 10,
                    animation: `float${badge.angle} 4s ease-in-out infinite alternate`,
                    [`@keyframes float${badge.angle}`]: {
                      from: { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` },
                      to: { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y - 10}px))` },
                    },
                  }}
                >
                  <Box sx={{
                    px: 1.5, py: 0.6,
                    borderRadius: '10px',
                    background: isDark ? 'rgba(12,12,20,0.95)' : 'rgba(255,255,255,0.95)',
                    border: `1px solid ${badge.color}50`,
                    boxShadow: `0 4px 20px ${badge.color}30`,
                    backdropFilter: 'blur(10px)',
                    whiteSpace: 'nowrap',
                  }}>
                    <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: badge.color }}>
                      {badge.label}
                    </Typography>
                  </Box>
                </Box>
              );
            })}

            {/* Image container */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 5,
                width: 320,
                height: 320,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid',
                borderColor: 'rgba(108,99,255,0.4)',
                boxShadow: isDark
                  ? '0 0 0 6px rgba(108,99,255,0.08), 0 30px 80px rgba(108,99,255,0.3)'
                  : '0 0 0 6px rgba(108,99,255,0.06), 0 30px 80px rgba(108,99,255,0.18)',
              }}
            >
              {/* Developer placeholder using UI Faces / DiceBear */}
              <Box
                component="img"
                src="https://api.dicebear.com/9.x/notionists/svg?seed=Felix&backgroundColor=6C63FF,8B85FF&backgroundType=gradientLinear&size=320"
                alt="Alex Developer"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  // Fallback to a styled avatar
                  e.currentTarget.style.display = 'none';
                }}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Overlay gradient at bottom */}
              <Box sx={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
                background: 'linear-gradient(to top, rgba(108,99,255,0.5), transparent)',
              }} />
            </Box>

            {/* Experience badge – bottom left */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 30, left: 0,
                zIndex: 10,
                display: 'flex', alignItems: 'center', gap: 1.5,
                px: 2, py: 1.5,
                borderRadius: '16px',
                background: isDark ? 'rgba(12,12,20,0.9)' : 'rgba(255,255,255,0.95)',
                border: '1px solid rgba(108,99,255,0.2)',
                boxShadow: '0 8px 32px rgba(108,99,255,0.2)',
                backdropFilter: 'blur(12px)',
                animation: 'floatCard 3s ease-in-out infinite alternate',
                '@keyframes floatCard': {
                  from: { transform: 'translateY(0)' },
                  to: { transform: 'translateY(-8px)' },
                },
              }}
            >
              <Box sx={{
                width: 38, height: 38, borderRadius: '10px',
                background: 'linear-gradient(135deg, #6C63FF, #E040FB)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem',
              }}>
                🚀
              </Box>
              <Box>
                <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, lineHeight: 1, color: 'primary.main' }}>
                  2+ Years
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                  Experience
                </Typography>
              </Box>
            </Box>

            {/* Projects badge – top right */}
            <Box
              sx={{
                position: 'absolute',
                top: 20, right: -10,
                zIndex: 10,
                display: 'flex', alignItems: 'center', gap: 1.5,
                px: 2, py: 1.5,
                borderRadius: '16px',
                background: isDark ? 'rgba(12,12,20,0.9)' : 'rgba(255,255,255,0.95)',
                border: '1px solid rgba(224,64,251,0.2)',
                boxShadow: '0 8px 32px rgba(224,64,251,0.2)',
                backdropFilter: 'blur(12px)',
                animation: 'floatCard2 3.5s ease-in-out infinite alternate',
                '@keyframes floatCard2': {
                  from: { transform: 'translateY(0)' },
                  to: { transform: 'translateY(10px)' },
                },
              }}
            >
              <Box sx={{
                width: 38, height: 38, borderRadius: '10px',
                background: 'linear-gradient(135deg, #E040FB, #6C63FF)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem',
              }}>
                💼
              </Box>
              <Box>
                <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, lineHeight: 1, color: 'secondary.main' }}>
                  20+ Projects
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                  Completed
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
