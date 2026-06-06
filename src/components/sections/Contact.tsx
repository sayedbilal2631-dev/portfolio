'use client';

import React, { useState } from 'react';
import {
  Box, Container, Typography, Button, TextField, Grid, Snackbar, Alert,
  useTheme, Chip,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useInView } from '@/hooks/useInView';

export default function Contact() {
  const { ref, inView } = useInView();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '14px',
      '& fieldset': { borderColor: 'divider' },
      '&:hover fieldset': { borderColor: 'primary.main' },
      '&.Mui-focused fieldset': { borderColor: 'primary.main' },
    },
  };

  return (
    <>
      {/* CTA Banner */}
      <Box
        sx={{
          mx: { xs: 2, md: 6, lg: 12 },
          mb: 0,
          borderRadius: '24px',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #6C63FF 0%, #E040FB 100%)',
          p: { xs: 4, md: 5 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 3,
          boxShadow: '0 20px 60px rgba(108,99,255,0.35)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <TelegramIcon sx={{ color: 'white', fontSize: 32 }} />
          </Box>
          <Box>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.1em' }}>
              LET&apos;S WORK TOGETHER
            </Typography>
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 800, lineHeight: 1.2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
              Have a project in mind?
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.8)', mt: 0.5 }}>
              I&apos;m currently available for freelance work.
              Let&apos;s build something great together!
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          sx={{
            background: isDark ? '#12121A' : '#0A0A1A',
            color: 'white',
            px: 4,
            whiteSpace: 'nowrap',
            flexShrink: 0,
            '&:hover': { background: '#1a1a2e', transform: 'translateY(-2px)' },
          }}
        >
          Get In Touch
        </Button>
      </Box>

      {/* Contact Form Section */}
      <Box
        id="contact"
        ref={ref}
        sx={{
          py: { xs: 10, md: 14 },
          background: isDark
            ? 'linear-gradient(180deg, #0D0D16 0%, #0A0A0F 100%)'
            : 'linear-gradient(180deg, #EDEDFC 0%, #F5F5FF 100%)',
        }}
      >
        <Container maxWidth="lg">
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
              label="GET IN TOUCH"
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
              Let&apos;s work{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #6C63FF, #E040FB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                together
              </Box>
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 500, mx: 'auto' }}>
              Have a project in mind? Send me a message and let&apos;s discuss how we can work together.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1.5fr' },
              gap: 5,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease 0.2s',
            }}
          >
            {/* Info */}
            <Box>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>Contact Info</Typography>
              {[
                { icon: <EmailIcon />, label: 'Email', value: 'alex@developer.com' },
                { icon: <LocationOnIcon />, label: 'Location', value: 'Based in India' },
              ].map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 3,
                    p: 2.5,
                    borderRadius: '16px',
                    background: isDark ? 'rgba(108,99,255,0.06)' : 'rgba(108,99,255,0.04)',
                    border: '1px solid rgba(108,99,255,0.15)',
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      background: 'rgba(108,99,255,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" fontWeight={600}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" fontWeight={600}>{item.value}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    multiline
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    endIcon={<SendIcon />}
                    sx={{ py: 1.5 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      <Snackbar open={sent} autoHideDuration={4000} onClose={() => setSent(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" sx={{ borderRadius: '12px' }}>
          Message sent! I&apos;ll get back to you soon.
        </Alert>
      </Snackbar>
    </>
  );
}
