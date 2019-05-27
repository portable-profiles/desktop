import * as React from 'react';

export class Segment extends React.Component {
  public render() {
    const { children } = this.props;
    return (
      <div className="segment">{children}</div>
    )
  }
}
