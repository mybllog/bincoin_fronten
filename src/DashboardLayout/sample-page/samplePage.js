/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Sample from './Sample';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Navbar from '../../DashboardLayout/layout/header/Header'
const samplePage = () => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
    <Navbar />
    <Box display="flex" flexGrow={1} flexDirection={isMdUp ? 'row' : 'column'}>
      <Box flexGrow={1}>
        <Sample />
      </Box>
    </Box>
  </Box>
  );
};

export default samplePage;
