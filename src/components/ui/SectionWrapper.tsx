'use client';

import React from 'react';
import { Box } from '@mui/material';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
}

export default function SectionWrapper({ children, id }: SectionWrapperProps) {
  return (
    <Box id={id} component="section" sx={{ width: '100%' }}>
      {children}
    </Box>
  );
}
