import * as React from 'react';
import styled from 'styled-components';
import { ThemeKeys, theme } from '../utils/theme';
import { Block } from './block';
import { Logo } from './logo';

const HeaderWrap = styled.div``;

export interface HeaderProps {}

export class Header extends React.Component<HeaderProps> {
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
