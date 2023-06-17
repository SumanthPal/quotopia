import './App.css';
import LandingSection from "./components/LandingSection";
import RandomQuoteGenerator from "./components/RandomQuoteGenerator";
import NavBar from "./components/NavBar/NavBar";
import ByTitleQuoteGenerator from "./components/ByTitleQuoteGenerator";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingSection />
        <RandomQuoteGenerator />
        <ByTitleQuoteGenerator />

    </div>
  );
}

export default App;
