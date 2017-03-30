import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class Component extends React.Component {
  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  setStateAsync(state) {
    return new Promise(resolve => this.setState(state, resolve));
  }

  getStatePath(path) {
    return _.get(this.state, path);
  }

  setStatePath(path, value) {
    const state = _.cloneDeep(this.state);
    _.set(state, path, value);
    return this.setStateAsync(state);
  }

  redirect(...args) {
    this.context.history.push(...args);
  }

  _ie() {
    const ie = typeof window !== 'undefined' && (
      window.navigator.userAgent.indexOf('MSIE ') > 0 ||
      !!window.navigator.userAgent.match(/Trident.*rv\:11\./)
    );
    // ie && console.log('ie', ie);
    return ie;
  }

}
