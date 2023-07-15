import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bruchetta from "../../assets/bruchetta.svg";


const ReservationPage = () => {
  const navigate = useNavigate();
  const [reservationData, setReservationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    numberOfPeople: '',
    dateTime: '',
    occasion: '',
    seatingPreferences: '',
    additionalComments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // Redirect to the reservations submitted page
    navigate('/reservation-submitted');
  };

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    numberOfPeople,
    dateTime,
    occasion,
    seatingPreferences,
    additionalComments
  } = reservationData;

  return (
    <div className="reservation-page">
      <header className="reservation-hero">
        <img src={Bruchetta} alt="bruchetta" />
        <h1>Reservations</h1>
      </header>
      <main>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="numberOfPeople">Number of People:</label>
            <input
              type="number"
              id="numberOfPeople"
              name="numberOfPeople"
              min="1"
              max="12"
              value={numberOfPeople}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateTime">Date and Time:</label>
            <input
              type="datetime-local"
              min={new Date().toISOString().slice(0, -8)}
              id="dateTime"
              name="dateTime"
              value={dateTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion:</label>
            <select
              id="occasion"
              name="occasion"
              value={occasion}
              onChange={handleChange}
              required
            >
              <option value="">Select an occasion</option>
              <option value="anniversary">Anniversary</option>
              <option value="birthday">Birthday</option>
              <option value="business">Business Event</option>
              <option value="party">Party</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="form-group">
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
          </div>

          <div className="form-group">
            <label htmlFor="additionalComments">Additional Comments:</label>
            <textarea
              id="additionalComments"
              name="additionalComments"
              value={additionalComments}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <button
              type="submit"
              disabled={
                !firstName ||
                !lastName ||
                !email ||
                !phoneNumber ||
                !numberOfPeople ||
                !dateTime ||
                !occasion ||
                !seatingPreferences
              }
            >
              Submit Reservation
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ReservationPage;
