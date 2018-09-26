import React from 'react';
import PropTypes from 'prop-types';

const ConfirmedFilter = props =>
  <label>
    <input type="checkbox"
      onChange={props.toggleFilter}
      checked={props.isFiltered} /> Hide those who havent responded
  </label>

ConfirmedFilter.propTypes = {
  toggleFilter: PropTypes.func.isRequred,
  isFiltered: PropTypes.func.isRequred
}

export default ConfirmedFilter;
