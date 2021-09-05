import React, { useEffect } from 'react';

import Home from 'pages/Home';

const App: React.FC = () => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    console.log(vh);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return <Home />;
};

export default App;
