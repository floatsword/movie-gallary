import React, { Component } from 'react';
import RatingStars from './RatingStars';
import '../mgless/comment.less'
export default class Comment extends Component {



  render() {
    const comment = this.props.comment;
    return (
      <div>
        <div className="comment-content">
          {comment ? comment.content : ''}
        </div>
        <div className="comment-info">
          <div className="comment-author">
            {comment ? comment.author.name: ''}
          </div>
          <div className="comment-rating">
            <RatingStars rating={comment.rating} value={comment.rating.value}/>
          </div>
        </div>
      </div>
    )
  }
}
