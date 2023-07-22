import React, { useState } from 'react';

const BookingForm = (props) => {

  const [reservationData, setReservationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    seatingPreferences: '',
    additionalComments: ''
  });

  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDateChange = (e) => {
    setDate(e);
    props.dispatch(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // Redirect to the reservations submitted page
    props.submitForm(e);
  };

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    seatingPreferences,
    additionalComments
  } = reservationData;

  return (
    <form onSubmit={handleSubmit} className="booking-form">

      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={handleChange}
        required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleChange}
        required
      />

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        min={new Date().toISOString().slice(0, -14)}
        value={date}
        onChange={(e) => handleDateChange(e.target.value)}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={times}
        onChange={(e) => setTimes(e.target.value)}
        required
      >
        <option value="">Select a Time</option>
        {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
      </select>

      <label htmlFor="guests">Number of guests (Max:10)</label>
      <input
        type="number"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select an occasion</option>
        <option value="anniversary">Anniversary</option>
        <option value="birthday">Birthday</option>
        <option value="business">Business Event</option>
        <option value="party">Party</option>
        <option value="others">Others</option>
      </select>

      <label htmlFor="seatingPreferences">Seating Preferences:</label>
      <select
        id="seatingPreferences"
        name="seatingPreferences"
        value={seatingPreferences}
        onChange={handleChange}
        required
      >
        <option value="">Select seating preferences</option>
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
        <option value="childFriendly">Child Friendly</option>
      </select>

      <label htmlFor="additionalComments">Additional Comments:</label>
      <textarea
        id="additionalComments"
        name="additionalComments"
        value={additionalComments}
        onChange={handleChange}
      ></textarea>

      <button aria-label="On Click" type="submit" disabled={
        !firstName ||
        !lastName ||
        !email ||
        !phoneNumber ||
        !guests ||
        !date ||
        !times ||
        !occasion ||
        !seatingPreferences
      } > Make Your Reservation
      </button>
      <br />
    </form>
  );
};

export default BookingForm;
