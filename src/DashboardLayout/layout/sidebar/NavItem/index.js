import React from 'react';
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  ListItemButton,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NavItem = ({ item, pathDirect, onClick }) => {
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

  const ListItemStyled = styled(ListItem)(({ theme }) => ({
    padding: 0,
    '.MuiButtonBase-root': {
      whiteSpace: 'nowrap',
      marginBottom: '2px',
      padding: '8px 10px',
      borderRadius: '8px',
      backgroundColor: 'inherit',
      color: theme.palette.text.secondary,
      paddingLeft: '10px',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
      },
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: 'white',
        },
      },
    },
  }));

  return (
    <List component="div" disablePadding key={item.id}>
      <ListItemStyled>
        <ListItemButton
          component={Link}
          to={item.href} // Use 'to' instead of 'href' for react-router-dom
          disabled={item.disabled}
          selected={pathDirect === item.href}
          target={item.external ? '_blank' : undefined} // Use 'undefined' instead of an empty string for 'target'
          onClick={onClick}
        >
          <ListItemIcon
            sx={{
              minWidth: '36px',
              p: '3px 0',
              color: 'inherit',
            }}
          >
            {itemIcon}
          </ListItemIcon>
          <ListItemText>
            <>{item.title}</>
          </ListItemText>
        </ListItemButton>
      </ListItemStyled>
    </List>
  );
};

export default NavItem;
