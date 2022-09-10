import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import { WithSubnavigation } from './components/Navbar';
import Video from './components/Video';
import { InstitutionAccount } from './pages/InstitutionAccount';
import PersonalAccount from './pages/PersonalAccount';
import { School } from './pages/School';
import Taxes from './pages/Taxes';
import { ChakraProvider, theme } from '@chakra-ui/react';

function App() {
  const [documentsList, setDocumentsList] = useState([]);

  const [askedDocuments, setAskedDocuments] = useState([]);

  const getDocumentsList = newList => {
    setDocumentsList(documentsList.concat(newList));
  };

  const askDocumentHandler = doc => {
    setAskedDocuments(askedDocuments.concat(doc));
  };
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
            <Taxes
              setDocumentsList={getDocumentsList}
              askDocument={askDocumentHandler}
            />
          </Route>
          <Route path="/personal">
            <PersonalAccount />
          </Route>
          <Route path="/institution-account">
            <InstitutionAccount
              askedDocuments={askedDocuments}
              documentsList={documentsList}
            />
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
