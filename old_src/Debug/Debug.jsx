import React, { Component, PropTypes } from 'react';

export default class Debug extends Component {
  static defaultProps = {
    children: null,
  }
  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    if (!__DEV__) return null;
    if (this.props.children) {
      return <div style={{ border: '1px dotted red' }}>{this.props.children}</div>;
    }
    return <pre style={{ border: '1px dotted red' }}>{JSON.stringify(this.props)}</pre>;
  }
}
