import './App.css';
import LandingSection from "./components/LandingSection";
import RandomQuoteGenerator from "./components/RandomQuoteGenerator";
import NavBar from "./components/NavBar/NavBar";
import ByTitleQuoteGenerator from "./components/ByTitleQuoteGenerator";
import TagQuoteGenerator from "./components/ByTagQuoteGenerator";
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingSection
      />
        <RandomQuoteGenerator
        />
        <ByTitleQuoteGenerator
        />
        <TagQuoteGenerator
        />

    </div>
  );
}

export default App;
