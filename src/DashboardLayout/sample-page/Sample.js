import React from 'react';
import { Button, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import DashboardCard from '../components/shared/DashboardCard';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import Sidebar from '../../DashboardLayout/layout/sidebar/Sidebar';
import Navbar from '../../DashboardLayout/layout/header/Header';

const Sample = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box >
    <Navbar/>
     <Box display="flex" flexDirection={isSmUp ? 'row' : 'column'}>
      
     {isSmUp && <Sidebar />}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Sample Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is a sample page
        </Typography>

        <Box
          display="grid"
          gridTemplateColumns={isMdUp ? 'repeat(2, 1fr)' : '1fr'}
          gap={2}
        >
          <Box
            sx={{
              border: '1px solid',
              height: 240,
              width: 240,
              borderRadius: '50%',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              margin: '0 auto'
            }}
          >
            <Box>
              <Typography>Level 1</Typography>
              <Typography>Hyip Member</Typography>
            </Box>
          </Box>

          <DashboardCard width="100%">
            <Typography>Referral URL</Typography>
            <Box
              sx={{
                border: '1px solid',
                width: '100%',
                my: 1,
              }}
            />
            <Box display="flex" alignItems="center" gap={1} my={2}>
              <Box
                sx={{
                  border: '1px solid',
                  width: '100%',
                  height: 40,
                  position: 'relative',
                }}
              />
              <Button
                sx={{ backgroundColor: 'orange', color: 'white' }}
                variant="contained"
                disableElevation
              >
                Copy URL
              </Button>
            </Box>
            <Typography>0 people have joined using this URL</Typography>
          </DashboardCard>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns={isMdUp ? 'repeat(4, 1fr)' : isSmUp ? 'repeat(2, 1fr)' : '1fr'}
          gap={2}
          my={8}
        >
          <Box>
            <DashboardCard>
              <Typography>1</Typography>
              <Typography>All</Typography>
              <Typography>Transactions</Typography>
            </DashboardCard>
            <DashboardCard>
              <Typography>$0</Typography>
              <Typography>Total Deposit</Typography>
            </DashboardCard>
            <DashboardCard>
              <Typography>$0</Typography>
              <Typography>Investment</Typography>
              <Typography>Bonus</Typography>
            </DashboardCard>
          </Box>
          <Box>
            <DashboardCard>
              <Typography>$0</Typography>
              <Typography>Total Deposit</Typography>
            </DashboardCard>
            <DashboardCard>
              <Typography>$0</Typography>
              <Typography>Total</Typography>
              <Typography>Withdraw</Typography>
            </DashboardCard>
            <DashboardCard>
              <Typography>1</Typography>
              <Typography>Rank</Typography>
              <Typography>Achieved</Typography>
            </DashboardCard>
          </Box>
          <Box>
            <DashboardCard>
              <Typography>$0</Typography>
              <Typography>Total</Typography>
              <Typography>Investment</Typography>
            </DashboardCard>
            <DashboardCard>
              <Typography>$0</Typography>
              <Typography>Referral</Typography>
              <Typography>Bonus</Typography>
            </DashboardCard>
            <DashboardCard>
              <Typography>0</Typography>
              <Typography>Total Ticket</Typography>
            </DashboardCard>
          </Box>
          <Box>
            <DashboardCard>
              <Typography>$5</Typography>
              <Typography>Total Profit</Typography>
            </DashboardCard>
            <DashboardCard>
              <Typography>$0</Typography>
              <Typography>Total Deposit</Typography>
            </DashboardCard>
            <DashboardCard>
              <Typography>$0</Typography>
              <Typography>Total Deposit</Typography>
            </DashboardCard>
          </Box>
        </Box>
        <RecentTransactions />
      </Box>
     </Box>
    </Box>
  );
};

export default Sample;
