import React, { Component, PropTypes } from 'react';
import importcss from 'importcss';

@importcss(require('./Page.css'))
export default class Page extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };
  render() {
    return (
      <div styleName="Page">
        {this.props.children}
      </div>
    );
  }
}
