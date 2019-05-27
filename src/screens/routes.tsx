import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { WelcomeScreen } from './welcome/welcome-screen';
import { InitializationScreen } from './initialization/initialization-screen';

/**
 * Routes
 *
 * This component is a switchboard for top-level screens,
 * routing paths to the correct view depending on the current
 * loaded URL.
 */
export class Routes extends React.Component {
  public render() {
    return (
      <Switch>
        <Route path="/welcome" component={WelcomeScreen} />
        <Route path="" component={InitializationScreen} />
      </Switch>
    );
  }
}
