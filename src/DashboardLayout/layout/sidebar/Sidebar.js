import React, { useState, useEffect} from 'react';
import { useMediaQuery, Box, Drawer, useTheme } from '@mui/material';
import Logo from '../shared/logo/Logo';
import SidebarItems from './SidebarItems';
import { NavLink } from 'react-router-dom';
//import { Upgrade } from './Upgrade';  // Corrected spelling from "Updrade"

const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen,user_id }) => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const sidebarWidth = '270px';
  //const [error,setError] = useState(null)
  const [balance,setBalance] = useState(0)
  const API_URL = process.env.REACT_APP_BINCOIN_API_URL;
 
  useEffect(() => {
    const getAmount = async () => {
      try {
        const response = await fetch(`${API_URL}/wallet/${user_id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        const data = await response.json();
        console.log('API response:', data);
        if (data.status && data.result) {
          setBalance(data.result.balances || 0); // Update state with the balances
        } else {
          console.error('Unexpected API response structure');
        }
         // Assuming 'amount' is the correct field
      } catch (error) {
        console.error('Error fetching token:', error.message);
      }
    }
    getAmount();
  }, [API_URL, user_id]);
  

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        {/* Sidebar for desktop */}
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Box
            sx={{
              height: '100%',
            }}
          >
            {/* Logo */}
            <Box px={3}>
              <Logo />
            </Box>

            {/* Custom Box with Tailwind CSS */}
            <Box px={2} color={"blue"} bgcolor={"orange"} borderRadius={5}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>Account Balance</p>
                  <p>Main Wallet</p>
        
                </div>
                <div>
                  <button className="bg-white w-18 rounded-full text-sm shadow-lg">WALLET</button>
                  <p className='text-black'>{balance}</p>
                  
                </div>
              </div>
            </Box>

            <div className="grid grid-cols-2 gap-2 my-10">
              <div className="border bg-blue-400 text-center">
              <NavLink to='/deposit'><p>Deposit</p></NavLink>
                
              </div>
              <div className="border bg-green-400 text-center">
                <p>Invest Now</p>
              </div>
            </div>

            <Box>
              {/* Sidebar Items */}
              <SidebarItems />
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      {/* Logo */}
      <Box px={2}>
        <Logo />
      </Box>

      {/* Sidebar For Mobile */}
      <SidebarItems />
     
    </Drawer>
  );
};

export default Sidebar;
