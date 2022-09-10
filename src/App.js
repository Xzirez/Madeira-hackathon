import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import { WithSubnavigation } from './components/Navbar';
import Video from './components/Video';
import { GovAccount } from './pages/GovAccount';
import PersonalAccount from './pages/PersonalAccount';
import { PrivateAccount } from './pages/PrivateAccount';
import { School } from './pages/School';
import Taxes from './pages/Taxes';
import { ChakraProvider, theme } from '@chakra-ui/react';

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
          <Route path="/personal">
            <PersonalAccount />
          </Route>
          <Route path="/account">
            <PrivateAccount />
          </Route>
          <Route path="/institution-account">
            <GovAccount />
          </Route>
          <Route path="/school">
            <School />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
