import React, { Component } from 'react';
import MgTrailers from './MgTrailers';
import '../mgless/slides.less';
export default class Slides extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this._shiftSlide()
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  componentWillUpdate() {
    clearInterval(this.timer)
  }
  componentDidUpdate() {
    this._shiftSlide()
  }

  _shiftSlide() {
    let trailers = this.props.trailers;
    let i = 1;
    this.timer = setInterval(() => {
        if (trailers.length <= 1) {
          return clearInterval(this.timer)
        }
        this.tempImg.style.backgroundImage = `url(${trailers[i]['medium']})`
        this.trailer.style.backgroundImage = `url(${trailers[i++]['medium']})`;
        if( i === trailers.length) i=0

    }, 4000)
  }
  render() {

    const trailers = this.props.trailers;
    return (
      <div className="slides">
        <div className="trailers" style={trailers.length >= 1 ? {backgroundImage: `url(${trailers[0]['medium']})`} : null} ref={(e) => this.trailer = e}></div>
        <div style={{display:'none'}} ref={(e) => this.tempImg = e}></div>
        <div className="mask"></div>
      </div>
    )
  }
}
