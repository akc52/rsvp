import React, { Component } from 'react';
import './App.css'; // empty
import GuestList from './GuestList';

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

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if( index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
    });

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt("isEditing", index);

  setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if( index === indexToChange) {
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
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ""
    })
  }

  removeGuestAt = index =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    })

  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered });

  getTotalInvited = () => this.state.guests.length;
  // getAttendingGuests = () =>
  // getUnconfirmedGuests = () =>

  render() {
    return (
      <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form onSubmit={this.newGuestHandler}>
            <input type="text" placeholder="Invite Someone"
              value={this.state.pendingGuest}
              onChange={this.handleNameInput} />
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox"
              onChange={this.toggleFilter}
              checked={this.state.isFiltered} /> Hide those who haven't responded
          </label>
        </div>
        <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>

        <GuestList
          guests={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          removeGuestAt={this.removeGuestAt}
          isFiltered={this.state.isFiltered}
          pendingGuest={this.state.pendingGuest} />

      </div>
    </div>
    );
  }
}

export default App;
