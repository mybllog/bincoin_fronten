import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Use react-router-dom for routing

export const Upgrade = () => {
    return (
        <Box
            display='flex'
            alignItems="center"
            gap={2}
            sx={{ m: 3, p: 3, bgcolor: 'primary.light', borderRadius: '8px' }}
        >
            <Box>
                <Typography variant="h5" sx={{ width: "80px" }} fontSize='16px' mb={1}>
                    Haven&apos;t account ?
                </Typography>
                <Button
                    color="primary"
                    component={Link}
                    to="/authentication/register"
                    variant="contained"
                    aria-label="signup"
                    size="small"
                >
                    Sign Up
                </Button>
            </Box>
            <Box mt="-35px">
                <img 
                    src='/images/backgrounds/rocket.png' 
                    alt="Rocket" 
                    width={100} 
                    height={100} 
                />
            </Box>
        </Box>
    );
};
