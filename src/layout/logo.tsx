import * as React from 'react';
import styled from 'styled-components';
import { Application } from '../constants';

const Image = styled.img`
  height: 25px;
`;

export class Logo extends React.Component<{}> {
  public render() {
    return (
      <React.Fragment>
        <Image src="/logo.svg" alt={Application.Name} />
      </React.Fragment>
    );
  }
}
