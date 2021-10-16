import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

function App() {
  return (

    <>
    <BrowserRouter>

      <Routes />

    </BrowserRouter>
    
    <GlobalStyles/>
    
    </>
  );
}

export default App;