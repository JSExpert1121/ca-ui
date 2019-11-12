import React from 'react';
import './styles.scss';

import PublicHeader from './PublicHeader';
import PublicFooter from './PublicFooter';

const PublicLayout = props => {
  const { children } = props;

  return (
    <div className="w-100 vh-100 position-relative">
      <PublicHeader />
      <main className="flex-grow-1 w-100">{children}</main>
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;
