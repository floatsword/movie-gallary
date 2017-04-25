import React, { Component } from 'react';
import Comment from './Comment';

import '../mgless/popularcomments.less';

export default class PopularComments extends Component {

  render() {
    const comments = this.props.comments;
    return (
      <div className="polular-comments">
        <ul className="comments">
          {comments && comments.map((comment, index) => {
            return (
              <li key={comment.id}>
                <Comment comment={comment}/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
