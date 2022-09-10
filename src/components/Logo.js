import React from 'react';

import { Image, keyframes, usePrefersReducedMotion } from '@chakra-ui/react';
import logo from '../madeira-logo.svg';
import { Link } from 'react-router-dom';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Logo = props => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 60s linear`;

  return (
    <Link to="/">
      <Image width="40px" animation={animation} src={logo} {...props} />
    </Link>
  );
};
