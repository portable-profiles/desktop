import { TextField } from '@material-ui/core';
import * as React from 'react';
import { Block } from '../layout/block';
import { Segment } from '../layout/segment';

export interface IAboutEditorProps {
  onChange: (value: IAboutEditorState) => boolean;
}

export interface IAboutEditorState {
  nickname: string;
  email: string;
}

/**
 * About Editor
 *
 * This form edit's a user's most basic profile information:
 * nickname and email address.
 */
export class AboutEditor extends React.Component<
  IAboutEditorProps,
  IAboutEditorState
> {
  public constructor(props: IAboutEditorProps) {
    super(props);
    this.state = {
      nickname: '',
      email: '',
    };
  }
  public render() {
    return (
      <Block>
        <Segment>
          <strong>About you</strong>
        </Segment>
        <Segment>
          Enter as much or as little as you want; a nickname is all that is required.
        </Segment>
        <Segment>
          <TextField label="Nickname" style={{ maxWidth: '400px' }} fullWidth required />
        </Segment>
        <Segment>
          <TextField label="Email" style={{ maxWidth: '400px' }} fullWidth />
        </Segment>
      </Block>
    );
  }

  public handleNicknameChange = (event: any) => {
    this.handleChange('nickname', event);
  };

  public handleEmailChange = (event: any) => {
    this.handleChange('email', event);
  };

  private handleChange(field: 'email' | 'nickname', event: any) {
    this.setState({
      [field]: event.target.value,
    } as any);
    this.props.onChange(this.state);
  }
}
