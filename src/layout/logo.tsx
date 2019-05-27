import * as React from 'react';
import styled from 'styled-components';
import { ThemeKeys, theme } from '../utils/theme';
import { Application } from '../constants';

const Image = styled.img`
  height: 25px;
`;

export interface LogoProps {}

export class Logo extends React.Component<LogoProps> {
  public render() {
    return (
      <React.Fragment>
        <Image src="/logo.svg" alt={Application.Name} />
      </React.Fragment>
    );
  }
}
