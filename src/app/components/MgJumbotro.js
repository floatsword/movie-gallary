import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import Slides from './Slides';
import MgTabs from './MgTabs';
import TabsNav from './TabsNav';
import Rating from './Rating';
import PopularComments from './PopularComments';

import '../mgless/mgjumbotro.less'

export default class MgJumbotro extends Component {
  constructor(props) {
    super(props);
    this.state = { show: props.showOrHide, tabIndex: 0 }
  }
  onAnimationEnd(arg) {
    if (arg.type === 'enter') {
      let viewHeight = document.documentElement.clientHeight,
          scrollTop = document.body.scrollTop,
          containerOffsetTop = this.jbtContainer.offsetTop,
          containerHeight = this.jbtContainer.clientHeight,
          dis = containerOffsetTop - (viewHeight - containerHeight);

      this._scrollAnimation(dis, 200)
    }
  }

  _scrollAnimation(dis, time) {
    let middleTemp = 0;
    let currentY = document.body.scrollTop;
    let direction = currentY <= dis ? 'down' : 'up';
    let step = (dis - currentY)/time * 10;
    this.timer = window.setInterval(() =>{
      var prevScrollTop = document.body.scrollTop;
      currentY += step;
      document.body.scrollTop = currentY;
      if (Math.abs(prevScrollTop - dis) <= Math.abs(step)) {
        document.body.scrollTop = dis;
        window.clearInterval(this.timer)
      }

    }, 10)
  }

  handleTabsNavClick(index) {
    this.setState({
      tabIndex: index
    })
  }

  handle4CloseBtn() {
    this.props.onClose && this.props.onClose();
  }

  render() {
    const subject = this.props.subject;
    const detailInfo = this.props.subjectDetail;
    return (
      <QueueAnim duration={500} animConfig={{opacity:[1, 0],scaleY:[1, 0]}} onEnd={this.onAnimationEnd.bind(this)}>

            <div className="mg-jumbotro" key={271252561} ref={ (e) => this.jbtContainer = e}>
              <div className="jumbotro-container">
                <div className="jumbotro-head">
                  <div className="subject-title">
                    <div className="h2">{subject.title}</div>
                  </div>
                </div>
                <div className="jumbotro-body">
                  {detailInfo ? (
                  <div className="mg-tabs-container">
                    <MgTabs selected={this.state.tabIndex === 0}>
                      <div className="mg-tabs-general">
                        <div className="rating-and-year">
                          <Rating rating={detailInfo.rating}/>
                          <div className="year">{detailInfo.year}</div>
                        </div>
                        <div className="details">
                          <dl className="mg-detail-row casts">
                            <dt>演员</dt>
                            <dd>
                              <ul>
                                {detailInfo.casts.map((item, index) => {
                                  return <li key={index}>{item.name}</li>
                                })}
                              </ul>
                            </dd>
                          </dl>
                          <dl className="mg-detail-row directors">
                            <dt>导演</dt>
                            <dd>
                              <ul>
                                {detailInfo.directors.map((item, index) => {
                                  return <li key={index}>{item.name}</li>
                                })}
                              </ul>
                            </dd>
                          </dl>
                          <dl className="mg-detail-row genres">
                            <dt>导演</dt>
                            <dd>
                              <ul>
                                {detailInfo.genres.map((item, index) => {
                                  return <li key={index}>{item}</li>
                                })}
                              </ul>
                            </dd>
                          </dl>
                        </div>
                        <div className="summary">
                          <div className="content">
                            {detailInfo.summary}
                          </div>
                        </div>
                      </div>
                    </MgTabs>
                    <MgTabs selected={this.state.tabIndex === 1}>
                      {
                        detailInfo.casts && detailInfo.casts.length >0 ?
                        <div className="mg-tabs-casts">
                          {detailInfo.casts.map((cast, index) => {
                            return (
                              <div key={cast.id || index} className="cast-item">
                                <div className="cast-ava" style={{backgroundImage: `url(${cast.avatars ? cast.avatars.medium : 'http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'})`}}></div>
                                <p>{cast.name}</p>
                              </div>
                            )
                          })}
                        </div> :
                        <div className="mg-tabs-casts">
                          <h5>暂时没有该电影相关的演员消息</h5>
                        </div>
                      }
                    </MgTabs>
                    <MgTabs selected={this.state.tabIndex === 2}>
                      {
                        detailInfo.trailers && detailInfo.trailers.length >0 ?
                        <div className="mg-tabs-trailers">
                          {detailInfo.trailers.map((trailer, index) => {

                            return (
                              <div key={trailer.id || index} className="trailer-item">
                                <div className="trailer" style={{backgroundImage: `url(${trailer.medium ? trailer.medium : 'http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'})`}}></div>
                                <p>{trailer.title}</p>
                              </div>
                            )
                          })}
                        </div> :
                        <div className="mg-tabs-trailers">
                          <h5>暂时没有该电影相关的预告片</h5>
                        </div>
                      }
                    </MgTabs>
                    <MgTabs selected={this.state.tabIndex === 3}>
                      {
                        detailInfo.popular_comments && detailInfo.popular_comments.length >0 ?
                        <div className="mg-tabs-comments">
                          <PopularComments comments={detailInfo.popular_comments}/>
                        </div> :
                        <div className="mg-tabs-casts">
                          暂时没有该电影相关的评论
                        </div>
                      }
                    </MgTabs>
                  </div>
                  ) : null}
                </div>
                <div className="jumbotro-footer">
                  <TabsNav onClick={this.handleTabsNavClick.bind(this)} tabIndex={this.state.tabIndex}/>
                </div>
                <div className="jumbotro-bg">
                  {detailInfo ? <Slides trailers={detailInfo.trailers}/> : null}
                </div>
                <div className="close" onClick={this.handle4CloseBtn.bind(this)}>
                  <span className="icon-close"></span>
                </div>
              </div>

            </div>

      </QueueAnim>
    )
  }
}
