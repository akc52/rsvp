import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = props =>
  <input type="text" placeholder="Invite Someone"
    value={props.pendingGuest}
    onChange={props.handleNameInput} />

GuestInputForm.propTypes = {
    pendingGuest: PropTypes.string.isRequred,
    handleNameInput: PropTypes.func.isRequired
}

export default GuestInputForm;
