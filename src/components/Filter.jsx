import { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filterFunction } = this.props;
    return (
      <div>
        <p>Find contacts by name</p>
        <input type="text" name="filter" onChange={filterFunction} required />
      </div>
    );
  }
}

Filter.propTypes = {
  filterFunction: PropTypes.func.isRequired,
};

export default Filter;
