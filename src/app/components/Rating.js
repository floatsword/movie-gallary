import React, { Component } from 'react';
import RatingStars from './RatingStars';
import '../mgless/rating.less';

export default class Rating extends Component {
  render() {
    const rating = this.props.rating;
    return (
      <div className="rating">
        <div className="rating-average">{rating.average ? rating.average+'分' : '暂无'}</div>
        <RatingStars rating={rating} value={rating.average}/>
      </div>
    )
  }
}
