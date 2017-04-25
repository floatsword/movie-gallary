import React, { Component } from 'react';
import '../mgless/app-header.less';
import { throttle } from 'underscore';
import cn from 'classnames';
export default class MgHeader extends Component {

  constructor() {
    super();
    this.state = {
      translucent: false
    }
  }

  componentDidMount() {
    function handleScroll(e) {
      const translucent = document.body.scrollTop > 5;
      if (this.state.translucent !== translucent) {
        this.setState({ translucent })
      }
    }
    window.addEventListener('scroll', throttle(handleScroll.bind(this), 100), false)
  }


  render() {

    return (
      <div className={cn('mg-app-header', {translucent: this.state.translucent})}>
        <div className="mg-logo">
          {/* <img src="" alt="Logo"/> */}
          Logo
        </div>

        {this.props.children}

      </div>
    )
  }
}
