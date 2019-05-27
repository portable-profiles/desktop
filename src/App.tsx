import * as React from 'react';
import './App.css';
import { muiTheme } from './theme';
import { Header } from './layout/header';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './screens/routes';
import { ThemeProvider } from '@material-ui/styles';;

export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
