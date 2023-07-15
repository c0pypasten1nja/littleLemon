import Bruchetta from "../../assets/bruchetta.svg";

export default function ResSubmitted() {
    return (
        <div className="reservation-page">
            <header className="reservation-hero">
                <img src={Bruchetta} alt="bruchetta" />
                <h1>Reservations</h1>
            </header>
            <section className="reservations-submitted">
            <br></br>
            <h1>Please check your email to confirm and we look foward to your visit.</h1>
            <br></br>
        </section>
        </div>
    );
}