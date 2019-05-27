import * as React from 'react';
import { Redirect } from 'react-router';

/**
 * Initialization Screen
 *
 * This screen checks to see which screen the user should start
 * out at and redirects to that screen
 */
export class InitializationScreen extends React.Component {
  public render() {
    return <Redirect to="/welcome" />;
  }
}
