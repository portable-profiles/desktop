import * as React from 'react';
import { Block } from '../../layout/block';
import { Button } from '@material-ui/core';
import { Segment } from '../../layout/segment';
import { TitleService } from '../../services/title-service';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type WelcomeScreenComponentProps = RouteComponentProps<{}>;

/**
 * Welcome Screen
 *
 * This is the first screen that the user sees in the app. Its
 * main purpose is to orient the user before they start the
 * profile creation process.
 */
export class WelcomeScreenComponent extends React.Component<
  WelcomeScreenComponentProps
> {
  public componentDidMount() {
    TitleService.setTitle('Get started');
  }

  public render() {
    return (
      <Block>
        <Segment>
          <strong>Your data. Your choice.</strong>
        </Segment>
        <Segment>
          Paladin helps you take control over your data. Your likes, posts, and
          profile are stored on your computer, and only shared with the services
          that you choose. Start by creating your profile.
        </Segment>
        <Segment>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleCreateProfile}
          >
            Create profile
          </Button>
        </Segment>
      </Block>
    );
  }

  public handleCreateProfile = () => {
    this.props.history.push('/new-profile');
  };
}

export const WelcomeScreen = withRouter(WelcomeScreenComponent);
