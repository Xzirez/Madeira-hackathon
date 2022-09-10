import React from 'react';

import MainPage from './components/MainPage';
import { WithSubnavigation } from './components/Navbar';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Video from './components/Video';
import Taxes from './pages/Taxes';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <WithSubnavigation />
        <Switch>
          <Route exact path="/">
            <MainPage />
            <Video />
          </Route>
          <Route path="/taxes">
            <Taxes />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
