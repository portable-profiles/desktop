import { Button } from '@material-ui/core';
import * as React from 'react';
import { Block } from '../layout/block';
import { Segment } from '../layout/segment';
import { AboutEditor, IAboutEditorState } from './about-editor';

export interface IProfileEditorProps {
  onSave: (value: IProfileEditorState) => boolean;
}

export interface IProfileEditorState {
  about: IAboutEditorState;
}

/**
 * Profile Editor
 *
 * This form edits a user's profile information and invokes
 * a callback with completed data. It does not process the
 * data, only edit it.
 */
export class ProfileEditor extends React.Component<
  IProfileEditorProps,
  IProfileEditorState
> {
  public constructor(props: IProfileEditorProps) {
    super(props);
    this.state = {
      about: {
        nickname: '',
        email: '',
      },
    };
  }

  public render() {
    return (
      <React.Fragment>
        <AboutEditor onChange={this.handleAboutChange} />
        <Block>
          <Button variant="contained" color="primary" onClick={this.handleSave}>
            Save
          </Button>
        </Block>
      </React.Fragment>
    );
  }

  private handleAboutChange = (about: IAboutEditorState) => {
    this.setState({ about });
    return true;
  };

  private handleSave = () => {
    this.props.onSave(this.state);
  };
}
