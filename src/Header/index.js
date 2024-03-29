import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

const Header = props =>
<header>
  <h1>RSVP</h1>
  <p>A Treehouse App</p>
  <form onSubmit={props.newGuestHandler}>
      <GuestInputForm
      pendingGuest={props.pendingGuest}
      handleNameInput={props.handleNameInput} />
      <button type="submit" name="submit" value="submit">Submit</button>
  </form>
</header>

Header.propTypes = {
  newGuestHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired
}

export default Header;
