import React from 'react';
import PropTypes from 'prop-types';
import GuestList from './GuestList';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = props =>
<div className="main">
  <div>
    <h2>Invitees</h2>
    <ConfirmedFilter
      toggleFilter={props.toggleFilter}
      isFiltered={props.isFiltered}  />
  </div>
  <Counter
    totalInvited={props.totalInvited}
    numberAttending={props.numberAttending}
    numberUnconfirmed={props.numberUnconfirmed} />
  <GuestList
    guests={props.guests}
    toggleConfirmationAt={props.toggleConfirmationAt}
    toggleEditingAt={props.toggleEditingAt}
    setNameAt={props.setNameAt}
    removeGuestAt={props.removeGuestAt}
    isFiltered={props.isFiltered}
    pendingGuest={props.pendingGuest} />
</div>

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequred,
  isFiltered: PropTypes.func.isRequred,
  totalInvited: PropTypes.number.isRequred,
  numberAttending: PropTypes.number.isRequred,
  numberUnconfirmed: PropTypes.number.isRequred,
  guests: PropTypes.array.isRequred,
  toggleConfirmationAt: PropTypes.func.isRequred,
  toggleEditingAt: PropTypes.func.isRequred,
  setNameAt: PropTypes.func.isRequred,
  removeGuestAt: PropTypes.func.isRequred,
  isFiltered: PropTypes.bool.isRequred,
  pendingGuest: PropTypes.string.isRequred
}

export default MainContent;
