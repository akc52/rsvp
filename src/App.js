import React, { Component } from 'react';
import './App.css'; // empty

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'John',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Jillian',
        isConfirmed: true,
        isEditing: false,
      },
      {
        name: 'Oliver K',
        isConfirmed: true,
        isEditing: true
      }
    ]
  }

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  toggleGuestProperty = (property, id) =>
    this.setState({
      guests: this.state.guests.map( guest => {
        if( id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
    });

  toggleConfirmation = id =>
    this.toggleGuestProperty("isConfirmed", id);

  toggleEditing = id =>
    this.toggleGuestProperty("isEditing", id);

  setName = (name, id) =>
    this.setState({
      guests: this.state.guests.map((guest) => {
        if( id === guest.id) {
          return {
            ...guest,
            name
          }
        }
        return guest;
      })
    });

  handleNameInput = e =>
    this.setState({ pendingGuest: e.target.value })

  newGuestHandler = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.guests
      ],
      pendingGuest: ""
    })
  }

  removeGuest = id =>
    this.setState({
      guests: [
        ...this.state.guests.filter( guest => id !== guest.id )
      ]
    })

  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered });

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0
    );

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
      <Header
        newGuestHandler={this.newGuestHandler}
        pendingGuest={this.state.pendingGuest}
        handleNameInput={this.handleNameInput} />
      <MainContent
        toggleFilter={this.toggleFilter}
        totalInvited={totalInvited}
        numberAttending={numberAttending}
        numberUnconfirmed={numberUnconfirmed}
        guests={this.state.guests}
        toggleConfirmationAt={this.toggleConfirmation}
        toggleEditingAt={this.toggleEditing}
        setNameAt={this.setName}
        removeGuestAt={this.removeGuest}
        isFiltered={this.state.isFiltered}
        pendingGuest={this.state.pendingGuest} />
    </div>
    );
  }
}

export default App;
