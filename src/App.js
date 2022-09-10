import React from 'react';

import { MainPage } from './components/MainPage';
import { WithSubnavigation } from './components/Navbar';
import { ChakraProvider, theme } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <WithSubnavigation />
      <MainPage />
    </ChakraProvider>
  );
}

export default App;
