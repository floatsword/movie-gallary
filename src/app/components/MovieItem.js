import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import cn from 'classnames';
import { throttle } from 'underscore';
import '../mgless/movie-item.less';
export default class MovieItem extends Component {
  static propTypes = {
    subject: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);

    this.state = { isSelected: false , selectionIndex: props.selectionIndex }
  }

  componentWillMount() {
    this.isSelected = false;
  }


  handleClick(subjectId, evt) {
    throttle(function() {
      console.log('throttle')
    }, 500)

    const { hasSelection , selectionIndex, index} = this.props;
    let isEqual = selectionIndex === index;
    this.setState({ isSelected: isEqual})

    if (!hasSelection) {
      this.setState({ isSeleted: true });
      this.props.onClick && this.props.onClick(index, subjectId, true)
    } else {
      this.props.onClick && this.props.onClick(index, subjectId, !isEqual)
    }

  }
  render() {
    const subject = this.props.subject;
    const selectionIndex = this.props.selectionIndex;
    return (
      <div className={cn('movie-cell', {selected: selectionIndex === this.props.index && this.props.hasSelection})} onClick={this.handleClick.bind(this, subject.id)}>
        <div className="movie-cell-cover">
          <div className="movie-item" style={{backgroundImage: `url(${subject.images.large})`}}>
          </div>
        </div>
      </div>
    )
  }
}
