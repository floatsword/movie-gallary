import React, { Component } from 'react';
import MgRow from '../components/MgRow';

import { connect } from 'react-redux';

export default class MgRowContainer extends Component {
  render() {
    return (
      <MgRow title={this.props.title} subjects={this.props.subjects} />
    )
  }
}
