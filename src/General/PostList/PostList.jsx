import React, { Component, PropTypes } from 'react'; //eslint-disable-line
import importcss from 'importcss'; //eslint-disable-line
import Post from '../Post';

@importcss(require('./PostList.css')) //eslint-disable-line
export default class PostList extends Component {
  static contextTypes = {
  };

  static propTypes = {
    postObjs: PropTypes.array,
  };

  static defaultProps = {
    postObjs: [],
  }

  render() {
    const { postObjs } = this.props;
    return (
      <article styleName="post-list">
        <header styleName="post-list__header">
          <h1 styleName="post-list__title">Интересные публикации</h1>
          <div styleName="post-list__filter">post-list__filter</div>
        </header>
        {postObjs.map(el => <Post postObj={el.postObj} styles="post-list__item" coverPosition={el.coverPosition} shortDescription={el.shortDescription} />)}
        <footer styleName="post-list__footer">
          <div styleName="post-list_pagination">post-list_pagination</div>
        </footer>
      </article>
    );
  }
}
