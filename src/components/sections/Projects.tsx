'use client';

import React from 'react';
import {
  Box, Container, Typography, Chip, Card, CardContent, CardActions, Button, useTheme,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useInView } from '@/hooks/useInView';
import { PROJECTS } from '@/lib/data';

const PROJECT_GRADIENTS = [
  'linear-gradient(135deg, #1a0533 0%, #3d0066 50%, #6C63FF 100%)',
  'linear-gradient(135deg, #001833 0%, #003366 50%, #0066cc 100%)',
  'linear-gradient(135deg, #1a0a00 0%, #4d2200 50%, #cc5500 100%)',
];

const PROJECT_LABELS = [
  { main: 'Interior Design', sub: 'Website' },
  { main: 'Organize work,', sub: 'smarter, not harder' },
  { main: 'Where good food', sub: 'meets good mood' },
];

export default function Projects() {
  const { ref, inView } = useInView();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="projects"
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        background: isDark
          ? 'linear-gradient(180deg, #0A0A0F 0%, #0D0D16 100%)'
          : 'linear-gradient(180deg, #F5F5FF 0%, #EDEDFC 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
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
            label="MY PROJECTS"
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
            Some of my{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #6C63FF, #E040FB)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              recent
            </Box>{' '}
            work
          </Typography>
        </Box>

        {/* Project Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {PROJECTS.map((project, i) => (
            <Card
              key={project.title}
              sx={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s`,
                overflow: 'hidden',
                '&:hover .project-image': {
                  transform: 'scale(1.04)',
                },
                '&:hover .project-overlay': {
                  opacity: 1,
                },
              }}
            >
              {/* Image area */}
              <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <Box
                  className="project-image"
                  sx={{
                    width: '100%',
                    height: '100%',
                    background: PROJECT_GRADIENTS[i],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    p: 3,
                    transition: 'transform 0.5s ease',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: 'white', fontWeight: 700, lineHeight: 1.3, zIndex: 1 }}
                  >
                    {PROJECT_LABELS[i].main}
                    <br />
                    <Box component="span" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9em' }}>
                      {PROJECT_LABELS[i].sub}
                    </Box>
                  </Typography>
                </Box>

                {/* Hover overlay */}
                <Box
                  className="project-overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(108,99,255,0.85)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<OpenInNewIcon />}
                    href={project.liveUrl}
                    sx={{ background: 'white', color: '#6C63FF', '&:hover': { background: '#f0f0ff' } }}
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<GitHubIcon />}
                    href={project.githubUrl}
                    sx={{ borderColor: 'white', color: 'white', '&:hover': { background: 'rgba(255,255,255,0.1)' } }}
                  >
                    Code
                  </Button>
                </Box>
              </Box>

              <CardContent sx={{ pb: 1.5 }}>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1, fontSize: '1rem' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {project.description}
                </Typography>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2, gap: 0.8, flexWrap: 'wrap' }}>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      background: isDark ? 'rgba(108,99,255,0.12)' : 'rgba(108,99,255,0.08)',
                      color: 'primary.light',
                      fontWeight: 600,
                      fontSize: '0.72rem',
                    }}
                  />
                ))}
                <Box sx={{ ml: 'auto' }}>
                  <Button
                    size="small"
                    endIcon={<OpenInNewIcon sx={{ fontSize: '0.9rem !important' }} />}
                    href={project.liveUrl}
                    sx={{ color: 'text.secondary', minWidth: 'auto', p: 0.5, '&:hover': { color: 'primary.main' } }}
                  />
                </Box>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
