import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReservationForm from "./pages/ReservationForm";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/reservation" element={<ReservationForm/>} />
        </Routes>
    );
}