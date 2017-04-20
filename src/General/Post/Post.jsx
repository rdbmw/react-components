import React, {Component, PropTypes} from 'react'; //eslint-disable-line
import importcss from 'importcss'; //eslint-disable-line

@importcss(require('./Post.css')) //eslint-disable-line
export default class Post extends Component {
  static contextTypes = {};

  static propTypes = {
    postObj: PropTypes.object,
    fullPost: PropTypes.boolean,
    coverPosition: PropTypes.oneOf(0, 1, 2, 3),
    shortDescription: PropTypes.numeric,
    styles: PropTypes.string,
  };

  static defaultProps = {
    postObj: null,
    fullPost: false,
    coverPosition: 1,
    shortDescription: 300,
    styles: '',
  }

  render() {
    const { postObj, fullPost, coverPosition, shortDescription, styles } = this.props;
    let PostContent = fullPost ? postObj.content : `${postObj.content.slice(0, shortDescription)}...`;
    if (coverPosition === 1) {
      PostContent = `<img src=${postObj.cover} alt="" />${PostContent}`;
    } else if (coverPosition === 2) {
      PostContent = `${PostContent}<img src=${postObj.cover} alt="" />`;
    }
    return (
      <article styleName={`post ${styles}`}>
        <header styleName="post__header">
          <div styleName="post__author">
            <img src={postObj.author.avatar} alt="" styleName="post__author-avatar" />
            <a href={postObj.author.blog} styleName="post__author-name">{postObj.author.name}</a>
            <span styleName="post__author-position">{` - ${postObj.author.position}`}</span>
          </div>
          <time styleName="post__date" dateTime={postObj.date}>{postObj.date}</time>
          <h1 styleName="post__title">
            {(!fullPost && <a href={postObj.link} styleName="post__link">{postObj.title}</a>) || postObj.title}
            <sup styleName="post__category">{postObj.category}</sup>
          </h1>
          <div styleName="post__tags-list">
            {postObj.tags.map(tag => <span><a href={tag.url} key={tag.tag} styleName="post__tag">{tag.tag}</a> </span>)}
          </div>
        </header>
        {(!fullPost && <a href={postObj.link} styleName="post__link"><div styleName="post__content" dangerouslySetInnerHTML={{ __html: PostContent }} /></a>) || <div styleName="post__content" dangerouslySetInnerHTML={{ __html: PostContent }} />}
        {(coverPosition === 3) && <a href={postObj.link} styleName="post__link"><img src={postObj.cover} alt="" styleName="post__cover" /></a>}
        <footer styleName="post__footer">
          <div styleName="post__ratings"> {'post__ratings'} </div>
          <div styleName="post__comments"> {'post__comments'} </div>
        </footer>
      </article>
    );
  }
}
