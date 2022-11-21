import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import BarnyardPage from "./pages/barnyard/BarnyardPage";
import FromSeaPage from "./pages/fromSea/FromSeaPage";
import HenHousePage from "./pages/henHouse/HenHousePage";
import SaladSoupPage from "./pages/saladSoup/SaladSoupPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SaladSoupPage />} />
          <Route path="barnyard" element={<BarnyardPage />} />
          <Route path="henHouse" element={<HenHousePage />} />
          <Route path="fromSea" element={<FromSeaPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
