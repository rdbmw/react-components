import React, { Component, PropTypes } from 'react'; //eslint-disable-line
import importcss from 'importcss'; //eslint-disable-line


@importcss(require('./StatusButton.css')) //eslint-disable-line
export default class StatusButton extends Component {
  static contextTypes = {
  };

  static propTypes = {
    classes: PropTypes.string,
    btntxt: PropTypes.string,
    btnstatus: PropTypes.string,
    fetchfunc: PropTypes.function,
  };

  static defaultProps = {
    classes: '',
    btntxt: 'button',
    btnstatus: '',
    fetchfunc: undefined,
  }

  constructor(props) {
    super(props);
    this.state = {
      pressed: '',
      result: props.btnstatus ? `status-button--${props.btnstatus}` : '',
      btnanimation: props.btnstatus ? `status-button__text--${props.btnstatus}` : '',
    };
  }

  async update() {
    if (this.props.fetchfunc) {
      this.setState({
        pressed: 'status-button--pressed',
        result: 'status-button--loading',
        btnanimation: 'status-button__text--loading',
      });
      const res = await this.props.fetchfunc();
      this.setState({
        pressed: '',
        result: res ? 'status-button--success' : 'status-button--error',
        btnanimation: res ? 'status-button__text--success' : 'status-button__text--error',
      });
    }
  }

  render() {
    const { classes, btntxt } = this.props;
    return (
      <button
        type="button"
        styleName={`status-button  ${classes}  ${this.state.pressed}  ${this.state.result}`}
        onClick={() => this.update()}
      >
        <span
          styleName={`status-button__text  ${this.state.btnanimation}`}
        >
          {btntxt}
        </span>
      </button>
    );
  }
}
