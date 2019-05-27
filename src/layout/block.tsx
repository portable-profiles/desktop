import * as React from 'react';
import styled from 'styled-components';
import { ThemeKeys, theme } from '../utils/theme';
import { Container } from './container';

const BlockOuter = styled.div`
  border-bottom: 1px solid ${theme(ThemeKeys.FaintGray)};
`;

export class Block extends React.Component {
  public render() {
    const { children } = this.props;
    return (
      <BlockOuter>
        <Container>{children}</Container>
      </BlockOuter>
    );
  }
}
