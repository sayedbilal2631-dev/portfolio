'use client';

import {
  Box,
  Container,
  Typography,
  Chip,
  Card,
  CardContent,
  CardActions,
  Button,
  useTheme,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { PROJECTS } from '@/lib/data';

const PROJECT_GRADIENTS = [
  'linear-gradient(135deg, #1a0533 0%, #3d0066 50%, #6C63FF 100%)',
  'linear-gradient(135deg, #001833 0%, #003366 50%, #0066cc 100%)',
  'linear-gradient(135deg, #1a0a00 0%, #4d2200 50%, #cc5500 100%)',
];

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Full Stack', 'Automation'];



export default function Projects() {
  const { ref, inView } = useInView();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [projects] = useState(PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
            mb: 6,
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all .7s ease',
          }}
        >
          <Chip
            label="MY PROJECTS"
            size="small"
            sx={{
              background: 'rgba(108,99,255,0.15)',
              color: 'primary.main',
              fontWeight: 700,
              mb: 2,
            }}
          />

          <Typography variant="h3" fontWeight={800}>
            Some of my{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg,#6C63FF,#E040FB)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              recent
            </Box>{' '}
            work
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 650, mx: 'auto' }}>
            A collection of full-stack applications, automation tools, dashboards and web experiences.
          </Typography>
        </Box>

        {/* Filters */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap', mb: 5 }}>
          {CATEGORIES.map((category) => (
            <Chip
              key={category}
              label={category}
              clickable
              color={selectedCategory === category ? 'primary' : 'default'}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleProjects(6);
              }}
            />
          ))}
        </Box>

        {/* Projects Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' },
            gap: 3,
          }}
        >
          {filteredProjects.slice(0, visibleProjects).map((project, i) => (
            <Card
              key={project.id}
              sx={{
                overflow: 'hidden',
                transition: 'all .35s ease',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(40px)',
                '&:hover': { transform: 'translateY(-8px)' },
              }}
            >
              {/* Image */}
              <Box sx={{ position: 'relative', height: 220 }}>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    background:
                      project.image ||
                      PROJECT_GRADIENTS[i % PROJECT_GRADIENTS.length],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,.75)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    opacity: 0,
                    transition: 'opacity .3s ease',
                    '&:hover': { opacity: 1 },
                  }}
                >
                  {project.liveUrl && (
                    <Button
                      variant="contained"
                      href={project.liveUrl}
                      target="_blank"
                      startIcon={<OpenInNewIcon />}
                    >
                      Live
                    </Button>
                  )}

                  {project.githubUrl && (
                    <Button
                      variant="outlined"
                      href={project.githubUrl}
                      target="_blank"
                      startIcon={<GitHubIcon />}
                    >
                      Code
                    </Button>
                  )}
                </Box>
              </Box>

              <CardContent>

                <Typography variant="h6" fontWeight={700}>
                  {project.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ minHeight: 70 }}>
                  {project.description}
                </Typography>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2, flexWrap: 'wrap', gap: 1 }}>
                {project.technologies.map((tech) => (
                  <Chip key={tech} label={tech} size="small" />
                ))}
              </CardActions>
            </Card>
          ))}
        </Box>

        {/* Empty */}
        {!filteredProjects.length && (
          <Typography align="center" color="text.secondary" sx={{ mt: 5 }}>
            No projects found.
          </Typography>
        )}

        {/* Load More */}
        {visibleProjects < filteredProjects.length && (
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button variant="contained" onClick={() => setVisibleProjects((p) => p + 6)}>
              Load More Projects
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}