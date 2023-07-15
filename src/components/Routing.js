import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReservationForm from "./pages/ReservationForm";
import ResSubmitted from "./pages/ResSubmitted";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/reservation" element={<ReservationForm/>} />
            <Route path="/reservation-submitted" element={<ResSubmitted/>} />
        </Routes>
    );
}