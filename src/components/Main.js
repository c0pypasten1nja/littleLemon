import React, { useReducer } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResSubmitted from "./pages/ResSubmitted";
import BookingPage from "./pages/BookingPage";
import { useNavigate } from 'react-router-dom';

export default function Main() {

    const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function (date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function (formData) {
        return true;
    };

    const initialState = { availableTimes: fetchAPI(new Date()) }

    const [state, dispatch] = useReducer(updateTimes, initialState);

    const navigate = useNavigate();

    function updateTimes(state, date) {
        return { availableTimes: fetchAPI(new Date(date)) }
    }

    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/reservation-submitted")
        }
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservation" element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
            <Route path="/reservation-submitted" element={<ResSubmitted />} />
        </Routes>
    );
}