import React, { Component } from 'react';
import cn from 'classnames';
import '../mgless/Mgtabs.less';

export default class MgTabs extends Component {
  render() {
    
    return (
      <div className={cn('mg-tabs', {selected: this.props.selected})}>
        <div className="tab-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}
