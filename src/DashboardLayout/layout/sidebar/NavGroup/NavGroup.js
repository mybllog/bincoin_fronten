import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { ListSubheader } from '@mui/material';

const ListSubheaderStyled = styled(ListSubheader)(({ theme }) => ({
  ...theme.typography.overline,
  fontWeight: '700',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(0),
  color: theme.palette.text.primary,
  lineHeight: '26px',
  padding: '3px 12px',
}));

const NavGroup = ({ item }) => {
  return (
    <ListSubheaderStyled disableSticky>{item.subheader}</ListSubheaderStyled>
  );
};

NavGroup.propTypes = {
  item: PropTypes.shape({
    subheader: PropTypes.string.isRequired, // Specify expected shape and type
  }).isRequired,
};

export default NavGroup;
