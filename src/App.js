import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import BarnyardPage from "./pages/barnyard/BarnyardPage";
import FromSeaPage from "./pages/fromSea/FromSeaPage";
import HenHousePage from "./pages/henHouse/HenHousePage";
import SaladSoupPage from "./pages/saladSoup/SaladSoupPage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <Navbar />
        <SaladSoupPage />
        <BarnyardPage />
        <HenHousePage />
        <FromSeaPage />
      </div>
    </div>
  );
}

export default App;
