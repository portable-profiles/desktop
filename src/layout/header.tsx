import * as React from 'react';
import styled from 'styled-components';
import { theme, ThemeKeys } from '../utils/theme';
import { Block } from './block';
import { Logo } from './logo';

const HeaderWrap = styled.div``;

export class Header extends React.Component<{}> {
  public render() {
    return (
      <HeaderWrap>
        <Block>
          <Logo />
        </Block>
      </HeaderWrap>
    );
  }
}
