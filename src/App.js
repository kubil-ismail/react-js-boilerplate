import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Use Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Imports: Redux Persist Persister
import { store, persistor } from './redux/store'; // Import redux store

// Import routes
import { Home, Profile } from './routes';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
