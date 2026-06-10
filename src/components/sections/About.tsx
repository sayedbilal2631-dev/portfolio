'use client';

import {Box, Container, Typography, Button, useTheme, Dialog, DialogContent, IconButton, Chip, LinearProgress,} from '@mui/material';
import { PERSONAL_FACTS, SERVICES_DATA, ABOUTSKILLS, TIMELINE, BANNER_STATS } from '@/lib/data';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

export default function About() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [open, setOpen] = useState(false);
  const accent = isDark ? '#00b4d8' : '#0984e3';
  const accentGreen = isDark ? '#00e676' : '#00b894';
  const accentPurple = isDark ? '#9d4edd' : '#6c5ce7';
  const bg = isDark ? '#03030c' : '#f8f9fa';
  const cardBg = isDark ? 'rgba(10,10,22,0.85)' : '#ffffff';
  const textPrimary = isDark ? '#ffffff' : '#2d3436';
  const textMuted = isDark ? '#8a8aa3' : '#636e72';
  const borderColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: bg,
        color: textPrimary,
        transition: 'background 0.3s ease, color 0.3s ease',
      }}
    >
      <Container maxWidth="lg">

        {/* Stats Banner */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: 3,
            p: 3,
            mb: 10,
            borderRadius: '16px',
            background: isDark ? 'rgba(15,15,30,0.6)' : 'rgba(255,255,255,0.9)',
            border: '1px solid',
            borderColor,
            boxShadow: isDark ? 'none' : '0px 10px 30px rgba(0,0,0,0.04)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {BANNER_STATS.map((stat) => {
            const ca = isDark ? stat.darkColor : stat.lightColor;
            return (
              <Box key={stat.label} sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: { xs: 'flex-start', md: 'center' } }}>
                <Box sx={{ width: 52, height: 52, borderRadius: '50%', border: `1.5px solid ${ca}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0, boxShadow: `0 0 12px ${ca}25` }}>
                  {stat.icon}
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: textPrimary, lineHeight: 1.1 }}>{stat.value}</Typography>
                  <Typography variant="caption" sx={{ color: textMuted, display: 'block', mt: 0.3 }}>{stat.label}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Split Layout */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '4.5fr 7.5fr' }, gap: { xs: 6, md: 8 }, alignItems: 'flex-start' }}>

          {/* Left: About Info */}
          <Box>
            <Typography variant="caption" sx={{ color: accent, fontWeight: 700, letterSpacing: '0.12em', display: 'block', mb: 2 }}>
              ABOUT ME
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, lineHeight: 1.25, fontSize: { xs: '2.2rem', md: '2.5rem' }, color: textPrimary }}>
              Building digital experiences
              <br />
              that make an{' '}
              <Box component="span" sx={{ background: isDark ? 'linear-gradient(135deg, #00b4d8, #00e676)' : 'linear-gradient(135deg, #0984e3, #00b894)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                impact.
              </Box>
            </Typography>
            <Typography sx={{ color: textMuted, mb: 2, lineHeight: 1.7, fontSize: '0.95rem' }}>
              I&apos;m a passionate web developer focused on creating beautiful, functional and user-friendly websites. I love turning ideas into real products.
            </Typography>
            <Typography sx={{ color: textMuted, mb: 4, lineHeight: 1.7, fontSize: '0.95rem' }}>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies or working on side projects.
            </Typography>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              onClick={() => setOpen(true)}
              sx={{
                borderColor: isDark ? 'rgba(0,180,216,0.4)' : 'rgba(9,132,227,0.4)',
                color: accent,
                borderRadius: '6px',
                textTransform: 'none',
                fontWeight: 600,
                px: 2.5,
                py: 1,
                '&:hover': {
                  background: isDark ? 'rgba(0,180,216,0.08)' : 'rgba(9,132,227,0.06)',
                  borderColor: accent,
                  transform: 'translateX(4px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              More About Me
            </Button>
          </Box>

          {/* Right: Services */}
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="caption" sx={{ color: accentGreen, fontWeight: 700, letterSpacing: '0.12em' }}>SERVICES</Typography>
              <Button variant="text" endIcon={<ArrowForwardIosIcon sx={{ fontSize: '0.7rem !important' }} />} sx={{ color: accentPurple, textTransform: 'none', fontSize: '0.85rem', fontWeight: 600, '&:hover': { background: 'transparent', opacity: 0.8 } }}>
                View All Services
              </Button>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
              {SERVICES_DATA.map((service) => {
                const ca = isDark ? service.darkColor : service.lightColor;
                return (
                  <Box key={service.title} sx={{ p: 3, borderRadius: '12px', background: isDark ? 'rgba(10,10,20,0.5)' : '#ffffff', border: '1px solid', borderColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.05)', borderLeft: `3px solid ${ca}`, boxShadow: isDark ? 'none' : '0px 4px 20px rgba(0,0,0,0.02)', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-3px)', borderColor: ca, boxShadow: isDark ? `0 4px 20px ${ca}15` : '0px 10px 25px rgba(0,0,0,0.06)' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                      <Box sx={{ fontSize: '1.25rem' }}>{service.icon}</Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: textPrimary }}>{service.title}</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: textMuted, lineHeight: 1.5 }}>{service.desc}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

        </Box>
      </Container>

      {/* ── More About Me Dialog ── */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        scroll="paper"
        PaperProps={{
          sx: {
            background: isDark ? '#0a0a16' : '#f8f9fa',
            color: textPrimary,
            borderRadius: '20px',
            border: '1px solid',
            borderColor,
            backgroundImage: 'none',
            maxHeight: '90vh',
          },
        }}
      >
        <DialogContent sx={{ p: 0, '&::-webkit-scrollbar': { width: 6 }, '&::-webkit-scrollbar-thumb': { background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)', borderRadius: 3 } }}>

          {/* Header */}
          <Box sx={{ p: { xs: 3, md: 4 }, pb: 3, borderBottom: '1px solid', borderColor, position: 'relative', background: isDark ? 'rgba(0,180,216,0.04)' : 'rgba(9,132,227,0.03)' }}>
            <IconButton onClick={() => setOpen(false)} size="small" sx={{ position: 'absolute', top: 16, right: 16, color: textMuted, '&:hover': { color: textPrimary, background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' } }}>
              <CloseIcon fontSize="small" />
            </IconButton>
            <Typography variant="caption" sx={{ color: accent, fontWeight: 700, letterSpacing: '0.12em', display: 'block', mb: 1 }}>FULL PROFILE</Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, color: textPrimary, mb: 1, fontSize: { xs: '1.6rem', md: '2rem' } }}>
              A bit more about me 👋
            </Typography>
            <Typography sx={{ color: textMuted, fontSize: '0.95rem', maxWidth: 520 }}>
              Developer, tinkerer, and lifelong learner. Here&apos;s the deeper look — skills I&apos;ve sharpened, milestones I&apos;ve hit, and a few personal facts.
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', gap: 5 }}>

            {/* Personal Facts */}
            <Box>
              <Typography variant="caption" sx={{ color: accentGreen, fontWeight: 700, letterSpacing: '0.12em', display: 'block', mb: 2.5 }}>QUICK FACTS</Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
                {PERSONAL_FACTS.map((f) => (
                  <Box key={f.label} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 2, borderRadius: '10px', background: cardBg, border: '1px solid', borderColor }}>
                    <Box sx={{ fontSize: '1.1rem', mt: 0.1 }}>{f.icon}</Box>
                    <Box>
                      <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: textMuted, letterSpacing: '0.08em', textTransform: 'uppercase', mb: 0.3 }}>{f.label}</Typography>
                      <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: textPrimary }}>{f.value}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Skill Bars */}
            <Box>
              <Typography variant="caption" sx={{ color: accentPurple, fontWeight: 700, letterSpacing: '0.12em', display: 'block', mb: 2.5 }}>SKILL PROFICIENCY</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {ABOUTSKILLS.map((skill) => {
                  const ca = isDark ? skill.darkColor : skill.lightColor;
                  return (
                    <Box key={skill.name}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.8 }}>
                        <Typography sx={{ fontSize: '0.88rem', fontWeight: 600, color: textPrimary }}>{skill.name}</Typography>
                        <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: ca }}>{skill.level}%</Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 3,
                            background: `linear-gradient(90deg, ${ca}aa, ${ca})`,
                          },
                        }}
                      />
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* Journey Timeline */}
            <Box>
              <Typography variant="caption" sx={{ color: isDark ? '#ffb703' : '#e17055', fontWeight: 700, letterSpacing: '0.12em', display: 'block', mb: 2.5 }}>MY JOURNEY</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {TIMELINE.map((item, i) => (
                  <Box key={item.year} sx={{ display: 'flex', gap: 2.5 }}>
                    {/* Spine */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <Box sx={{ width: 38, height: 38, borderRadius: '50%', background: isDark ? 'rgba(255,183,3,0.12)' : 'rgba(225,112,85,0.1)', border: `1.5px solid ${isDark ? '#ffb703' : '#e17055'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>
                        {item.icon}
                      </Box>
                      {i < TIMELINE.length - 1 && (
                        <Box sx={{ width: '1px', flex: 1, minHeight: 24, background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)', my: 0.5 }} />
                      )}
                    </Box>
                    {/* Content */}
                    <Box sx={{ pb: i < TIMELINE.length - 1 ? 3 : 0, pt: 0.5 }}>
                      <Chip label={item.year} size="small" sx={{ mb: 0.8, fontWeight: 700, fontSize: '0.7rem', height: 20, background: isDark ? 'rgba(255,183,3,0.12)' : 'rgba(225,112,85,0.1)', color: isDark ? '#ffb703' : '#e17055', border: 'none' }} />
                      <Typography sx={{ fontWeight: 700, color: textPrimary, fontSize: '0.95rem', mb: 0.3 }}>{item.title}</Typography>
                      <Typography sx={{ fontSize: '0.78rem', fontWeight: 600, color: isDark ? '#ffb703' : '#e17055', mb: 0.7 }}>{item.place}</Typography>
                      <Typography sx={{ fontSize: '0.875rem', color: textMuted, lineHeight: 1.6 }}>{item.desc}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* CTA Footer */}
            <Box sx={{ p: 3, borderRadius: '12px', background: isDark ? `linear-gradient(135deg, rgba(0,180,216,0.08), rgba(0,230,118,0.06))` : `linear-gradient(135deg, rgba(9,132,227,0.06), rgba(0,184,148,0.05))`, border: '1px solid', borderColor: isDark ? 'rgba(0,180,216,0.15)' : 'rgba(9,132,227,0.12)', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', gap: 2 }}>
              <Box>
                <Typography sx={{ fontWeight: 700, color: textPrimary, mb: 0.4 }}>Ready to work together?</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: textMuted }}>I&apos;m currently available for freelance and full-time roles.</Typography>
              </Box>
              <Button
                component="a"
                href="#contact"
                variant="contained"
                sx={{ background: `linear-gradient(135deg, ${accent}, ${accentGreen})`, color: '#fff', fontWeight: 700, borderRadius: '8px', textTransform: 'none', px: 3, py: 1, flexShrink: 0, boxShadow: 'none', '&:hover': { boxShadow: `0 4px 16px ${accent}40`, transform: 'translateY(-1px)' }, transition: 'all 0.25s ease' }}
              >
                Get in Touch
              </Button>
            </Box>

          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}