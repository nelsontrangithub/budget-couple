import { css, cx } from 'emotion';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { ReactComponent as Logo } from '../logo.svg';

export const Header: React.FC = () => {
  return (
    <header
      className={'mb-4 lg:mb-8 flex items-center justify-between'}
    >
      <h1>
        <Link to={ROUTES.HOME}>
          <Logo />
        </Link>
      </h1>
    </header>
  );
};
