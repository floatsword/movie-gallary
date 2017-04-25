import React, { Component } from 'react';
import '../mgless/ratingstars.less';
import cn from 'classnames';
export default class RatingStars extends Component {



  render() {
    const stars = this.props.value / (this.props.rating.max / 5);

    const ret = [];
    for(let i=0; i<5; i++) {
      ret.push(
        (
          <div key={i} className={cn(
            'icon-star',
            {half: stars>i && stars<i+1 && stars < 4.5},
            {star: stars >= 4.5 ||stars>=i+1}
          )}>
            {stars>i && stars<i+1 && stars < 4.5 ? <div className="icon-star-half"></div> : null}
          </div>
        )
      )
    }
    return (
      <div className="rating-stars">
        {ret}
      </div>
    )
  }
}
