import React, { Component, PropTypes } from 'react';
import ReactImageFallback from "react-image-fallback";
import importcss from 'importcss';
import cx from 'classnames';
import _ from 'lodash';

@importcss(require('./Avatar.css'))
export default class Avatar extends Component {
  static defaultProps = {
    placeholder: 'http://137.74.56.40:5000/assets/avatar/avatar.png',
    imgsrc: null,
    classes: '',
    alt: 'avatar-alt',
    title: 'avatar-title',
    bordercolor: null,
    badge: null,
  }

  static propTypes = {
    placeholder: PropTypes.string,
    imgsrc: PropTypes.string,
    classes: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    bordercolor: PropTypes.string,
    badge: PropTypes.string,
  };

  static contextTypes = {
  };
// <img style={{ border: `2px solid ${bordercolor}` }}
//      src={imgsrc || placeholder}
//      alt={alt}
//      title={title}
// />
  render() {
    const { placeholder, imgsrc, classes, alt, title, bordercolor, badge } = this.props;
    const border = (bordercolor == null) ? {} : { border: `2px solid ${bordercolor}` };
    const badgeurl = (badge == null) ? {} : { background: `url("${badge}") no-repeat` };
    return (
      <div
        styleName={`avatar-container ${classes}`}
      >
        <ReactImageFallback
          src={imgsrc || placeholder}
          fallbackImage={placeholder}
          alt={alt}
          title={title}
          style={border}
        />
        <div
          styleName="badge"
          style={badgeurl}
        />
      </div>
    );
  }
}
