import { Provider } from 'mobx-react';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Routes from './router';
import { initializeStores } from './stores/core/stores';
import './styles/app.scss';

function App() {
  const stores = initializeStores();

  return (
    <HelmetProvider>
      <Provider {...stores}>
        {/* <Switch>
          <Route exact path="/login" component={(props) => <LoginContainer {...props} />} />

          <Route render={(props) => (!getSession() ? <Redirect to="/login" /> : <Routes />)} />
        </Switch> */}

        <Routes />
      </Provider>
    </HelmetProvider>
  );
}

export default App;
