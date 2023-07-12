import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div class="container">
        <Header />
        <NavBar />
        <Routing />
        <Footer />
      </div>

    </>
  );
}

export default App;
