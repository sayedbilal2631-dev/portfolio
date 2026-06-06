'use client';

import React from 'react';
import { Box, Container, Typography, Chip, useTheme } from '@mui/material';
import { useInView } from '@/hooks/useInView';
import { SKILLS } from '@/lib/data';

const SKILL_SVG: Record<string, string> = {
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
};

export default function Skills() {
  const { ref, inView } = useInView();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        background: isDark
          ? 'linear-gradient(180deg, #0D0D16 0%, #0A0A0F 100%)'
          : 'linear-gradient(180deg, #EDEDFC 0%, #F5F5FF 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease',
          }}
        >
          <Chip
            label="MY SKILLS"
            size="small"
            sx={{
              background: 'rgba(108,99,255,0.15)',
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: '0.08em',
              mb: 2,
            }}
          />
          <Typography variant="h3" fontWeight={800} sx={{ fontSize: { xs: '2rem', md: '2.6rem' } }}>
            Technologies I work with
          </Typography>
        </Box>

        {/* Skills Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(3, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(5, 1fr)', lg: 'repeat(7, 1fr)' },
            gap: 2.5,
          }}
        >
          {SKILLS.map((skill, i) => (
            <Box
              key={skill.name}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.5,
                p: 2.5,
                borderRadius: '20px',
                background: isDark
                  ? 'rgba(18,18,26,0.7)'
                  : 'rgba(255,255,255,0.8)',
                border: '1px solid',
                borderColor: 'divider',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.06}s`,
                '&:hover': {
                  border: '1px solid',
                  borderColor: `${skill.color}60`,
                  background: isDark
                    ? `rgba(${hexToRgb(skill.color)}, 0.08)`
                    : `rgba(${hexToRgb(skill.color)}, 0.05)`,
                  transform: 'translateY(-6px) scale(1.02)',
                  boxShadow: `0 10px 30px ${skill.color}25`,
                },
              }}
            >
              <Box
                component="img"
                src={SKILL_SVG[skill.name] || ''}
                alt={skill.name}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.style.display = 'none';
                }}
                sx={{
                  width: 48,
                  height: 48,
                  objectFit: 'contain',
                  filter: skill.name === 'Next.js' && isDark ? 'invert(1)' : 'none',
                }}
              />
              <Typography
                variant="caption"
                fontWeight={700}
                sx={{ textAlign: 'center', fontSize: '0.78rem' }}
              >
                {skill.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '108, 99, 255';
}
