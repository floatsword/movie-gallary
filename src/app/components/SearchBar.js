import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class SearchBar extends Component {

  static propTypes = {
    onQuery: PropTypes.func.isRequired
  }

  handleChange4Search(evt) {
    const value = evt.target.value.trim();
    this._clearTimer();
    this._timer = setTimeout(() => {
      this.props.onQuery({query: value !== '' ? value : null});
    }, 400)
  }

  _clearTimer() {
    this._timer && clearTimeout(this._timer);
    this._timer = null;
  }

  render() {
    return (
      <div className="mg-search">
        <input type="search" placeholder={this.props.placeholder}
                onChange={this.handleChange4Search.bind(this)}/>
        <span className="icon-search search"></span>
      </div>

    )
  }
}
