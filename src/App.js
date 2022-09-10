import React from 'react';

import MainPage from './components/MainPage';
import { WithSubnavigation } from './components/Navbar';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Video from './components/Video';
import Overlay from './components/Overlay';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <WithSubnavigation />
        <Video />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/taxes">
            <p>Taxes</p>
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
