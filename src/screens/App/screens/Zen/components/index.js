/* @flow */

import React, { Component } from 'react';
import PropType from 'prop-types';

class Zen extends Component {
  componentDidMount() {
    if (this.props.zen === '') {
      this.props.fetchZen();
    }
  }
  render() {
    return (
      <div className="zen-container">
        <div className="zen"> {this.props.zen} </div>
        <button
          disabled={this.props.fetching}
          onClick={() => this.props.fetchZen()}
        >
          New Zen
        </button>
      </div>
    );
  }
}

Zen.propTypes = {
  zen: PropType.string.isRequired,
  fetching: PropType.bool.isRequired,
  fetchZen: PropType.func.isRequired,
};

export default Zen;
