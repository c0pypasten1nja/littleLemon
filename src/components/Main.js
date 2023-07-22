import React, { useReducer } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResSubmitted from "./pages/ResSubmitted";
import BookingPage from "./pages/BookingPage";

export default function Main() {

    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const [state, dispatch] = useReducer(updateTimes, availableTimes);

    function updateTimes() {
        setAvailableTimes(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
    }
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/reservation" element={<BookingPage availableTimes={state} dispatch={dispatch}/>} />
            <Route path="/reservation-submitted" element={<ResSubmitted/>} />
        </Routes>
    );
}