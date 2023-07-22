import React from "react";
import BookingForm from '../BookingForm.js';
import Bruchetta from "../../assets/bruchetta.svg";


const BookingPage = (props) => {
    return (
        <div className="reservation-page">
            <header className="reservation-hero">
                <img src={Bruchetta} alt="bruchetta" />
                <h1>Table Reservations</h1>
            </header>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch}/>
        </div>
    );
};

export default BookingPage;