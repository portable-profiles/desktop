import * as React from 'react';
import { TitleService } from '../../services/title-service';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  ProfileEditor,
  IProfileEditorState,
} from '../../profile/profile-editor';
import { Profile, Fields, Visibility } from '@paladin-privacy/profiles';

type NewProfileScreenComponentProps = RouteComponentProps<{}>;

/**
 * New Profile Screen
 *
 * This screen helps the user set up their profile. It includes
 * the standard profile editor, with a few customizations for the
 * first-time use case.
 */
export class NewProfileScreenComponent extends React.Component<
  NewProfileScreenComponentProps
> {
  public componentDidMount() {
    TitleService.setTitle('Create profile');
  }

  public render() {
    return <ProfileEditor onSave={this.handleSave} />;
  }

  public handleSave = (value: IProfileEditorState) => {
    const me = new Profile();
    me.createCredentials();
    me.setField(Fields.Nickname, value.about.nickname, Visibility.Public);
    me.setField(Fields.Email, value.about.email, Visibility.Private);
    me.sign();
    return true;
  };
}

export const NewProfileScreen = withRouter(NewProfileScreenComponent);
