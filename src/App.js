import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import { Helmet } from 'react-helmet';
import MarioAdrian from "./assets/Mario and Adrian A.jpg";

function App() {
  return (
    <>
      <Helmet>
        <title>Little Lemon - Mediterranean Restaurant</title>
        <meta name="description" content="Little Lemon is a family-owned Mediterranean restaurant based in Chicago, Illinois, offering traditional recipes with a modern twist." />
        <meta name="keywords" content="Mediterranean restaurant, Chicago restaurant, traditional recipes, family-owned restaurant" />
        <meta name="author" content="Little Lemon" />
        <meta property="og:title" content="Little Lemon - Mediterranean Restaurant" />
        <meta property="og:description" content="Little Lemon is a family-owned Mediterranean restaurant based in Chicago, Illinois, offering traditional recipes with a modern twist." />
        <meta property="og:image" content={MarioAdrian} />
        <meta property="og:url" content="https://littlelemon.com" />
      </Helmet>
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
