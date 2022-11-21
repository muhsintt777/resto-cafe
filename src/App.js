import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import BarnyardPage from "./pages/barnyard/BarnyardPage";
import FromSeaPage from "./pages/fromSea/FromSeaPage";
import HenHousePage from "./pages/henHouse/HenHousePage";
import SaladSoupPage from "./pages/saladSoup/SaladSoupPage";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099"
      );
      const arr = response.data;
      console.log(arr[0].table_menu_list[0].menu_category);
    };
    fetchData();
  }, []);

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
