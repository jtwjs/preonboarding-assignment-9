import React from 'react';

import Header from 'layout/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
