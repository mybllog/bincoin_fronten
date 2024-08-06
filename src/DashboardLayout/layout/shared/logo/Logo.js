import React from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom for navigation
import { styled } from '@mui/material/styles';

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '180px',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <img
        src="/images/logos/dark-logo.svg"
        alt="logo"
        height={70}
        width={174}
        style={{ objectFit: 'cover' }} // Ensures image fits container properly
      />
    </LinkStyled>
  );
};

export default Logo;
