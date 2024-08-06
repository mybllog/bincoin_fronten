import React from 'react';
import { useLocation } from 'react-router-dom'; // Use react-router-dom for routing
import { Box, List } from '@mui/material';
import NavItem from './NavItem';
import NavGroup from './NavGroup/NavGroup';
import Menuitems from './MenuItems';

const SidebarItems = ({ toggleMobileSidebar }) => {
  const location = useLocation();
  const pathDirect = location.pathname;

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item) => {
          // SubHeader
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;
          } else {
            // If Sub Menu
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
                onClick={toggleMobileSidebar}
              />
            );
          }
        })}
      </List>
    </Box>
  );
};

export default SidebarItems;
