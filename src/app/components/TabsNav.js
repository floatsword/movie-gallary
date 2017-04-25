import React, { Component } from 'react';
import cn from 'classnames';
import '../mgless/tabsnav.less';
export default class TabsNav extends Component {
  handle4Click(index) {
    this.props.onClick && this.props.onClick(index)
  }

  render() {
    return (
      <div className="tabs-nav">
        <ul>
          <li className={cn({active: this.props.tabIndex === 0})} onClick={this.handle4Click.bind(this, 0)}>总览</li>
          <li className={cn({active: this.props.tabIndex === 1})} onClick={this.handle4Click.bind(this, 1)}>演员</li>
          <li className={cn({active: this.props.tabIndex === 2})} onClick={this.handle4Click.bind(this, 2)}>预告片</li>
          <li className={cn({active: this.props.tabIndex === 3})} onClick={this.handle4Click.bind(this, 3)}>评论</li>
        </ul>
      </div>
    )
  }
}
