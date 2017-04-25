import React, { Component } from 'react';
import '../mgless/app.less';

import MgHeader from '../components/MgHeader';
import SearchBar from '../components/SearchBar';

import { fetch } from '../dbapi/utils';
import MgRow from '../components/MgRow';
import payload from '../dbapi/movies';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      comingSoon: null,
      inTheaters: null,
      top250: null
    }
  }

  componentWillMount() {
    payload.comingSoon().then((response) => {
      this.setState({ comingSoon: response})
    })
    payload.inTheaters().then((response) => {
      this.setState({ inTheaters: response})
    })
    payload.top250().then((response) => {
      this.setState({ top250: response})
    })
  }

  handleQuery(opt) {
    if (opt.query !== null) {
      console.log(opt.query);
    }
  }

  render() {
    return (
      <div className="mg-app">
        <MgHeader >
          <SearchBar placeholder="影片名或艺术家" onQuery={this.handleQuery.bind(this)}/>
        </MgHeader>
        <MgRow title={this.state.inTheaters ? this.state.inTheaters.title : '正在加载...'} subjects={this.state.inTheaters ? this.state.inTheaters.subjects : null} />
        <MgRow title={this.state.comingSoon ? this.state.comingSoon.title : '正在加载...'}
        subjects={this.state.comingSoon ? this.state.comingSoon.subjects : null} />
        <MgRow title={this.state.top250 ? this.state.top250.title : '正在加载...'}
        subjects={this.state.top250 ? this.state.top250.subjects : null} />
      </div>
    )
  }
}
