import React, { Component } from 'react';
import cn from 'classnames';
import '../mgless/MgRow.less';
import MovieItem from './MovieItem';
import MgJumbotro from './MgJumbotro';
import QueueAnim from 'rc-queue-anim';
import payload from '../dbapi/movies';

export default class MgRow extends Component {

  constructor() {
    super();
    this.state = {
      hasSelection: false,
      selectionIndex: 0,
      selectionSubject: null
    }
  }

  handle4CloseBtn() {
    this.setState({
      hasSelection: !this.state.hasSelection
    })
  }

  handleClick4MovieItem(index, subjectId, hasSelection) {
    this.setState({
      hasSelection: hasSelection,
      selectionIndex: index
    })
    payload.subject(subjectId).then((response) => {
      this.setState({
        selectionSubject: response
      })
    })
  }

  _scroll(direction, step) {
    let scrollBox = this.scrollBox,
        scrollWidth = scrollBox.scrollWidth,
        clientWidth = scrollBox.clientWidth,
        dis = clientWidth - 40,
        originLeft = parseInt(scrollBox.style.left),
        retDis = direction === 'LEFT' ? originLeft + dis : originLeft - dis;

        if (Math.abs(retDis) > (scrollWidth - clientWidth)) retDis = clientWidth - scrollWidth;
        if (retDis > 0) retDis = 0;

        scrollBox.style.left = retDis + 'px';

  }

  handleScrollLeft() {
    this._scroll('LEFT', 6)
  }
  handleScrollRight() {
    this._scroll('RIGHT', 6)
  }

  render() {
    const title = this.props.title;
    const subjects = this.props.subjects || [];
    return(
      <div>
        <div className={cn('mg-row', {'no-selection': !this.state.hasSelection})}>
          <div className="row-head">
            <div className="title h3">{title}</div>
          </div>
          <div className="row-body">
            <div className="row-scroll-left" onClick={this.handleScrollLeft.bind(this)}>
              <div className="row-scroll-btn icon-chevron-left">

              </div>
            </div>
            <div className="row-scroll-right" onClick={this.handleScrollRight.bind(this)}>
              <div className="row-scroll-btn icon-chevron-right">

              </div>
            </div>
            <div className="row-scroll-container" style={{left: 0}} ref={(e) => this.scrollBox = e}>

              {subjects.map((subject, index) => {
                return (
                  <MovieItem key={subject.id} onClick={this.handleClick4MovieItem.bind(this)} subject={subject} index={index} selectionIndex={this.state.selectionIndex} hasSelection={this.state.hasSelection}/>
                )
              })}
            </div>
          </div>
        </div>
        {this.state.hasSelection ? <MgJumbotro onClose={this.handle4CloseBtn.bind(this)} showOrHide={this.state.hasSelection} subject={subjects[this.state.selectionIndex]} subjectDetail={this.state.selectionSubject || null}/> : null}
      </div>
    )
  }
}
