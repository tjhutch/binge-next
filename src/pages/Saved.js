import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatefulSearchResults from '../containers/StatefulSearchResults';
import '../css/Saved.css';

class Saved extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className='saved-container'>
        <StatefulSearchResults items={this.props.items.filter(item => !item.watched)} title='Saved'/>
        <StatefulSearchResults items={this.props.items.filter(item => item.watched)} title='Watched'/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.saved,
  }
}

export default connect(mapStateToProps)(Saved);
