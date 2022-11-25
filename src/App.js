import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import BarnyardPage from "./pages/barnyard/BarnyardPage";
import FromSeaPage from "./pages/fromSea/FromSeaPage";
import HenHousePage from "./pages/henHouse/HenHousePage";
import SaladSoupPage from "./pages/saladSoup/SaladSoupPage";
import BiriyaniPage from "./pages/biriyani/BiriyaniPage";
import FastFoodPage from "./pages/fastFood/FastFoodPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, getDataStatus } from "./features/data/dataSlice";
import OrderPage from "./pages/order/OrderPage";

function App() {
  const dispatch = useDispatch();
  const dataStatus = useSelector(getDataStatus);

  useEffect(() => {
    if (dataStatus === "idle") {
      dispatch(fetchData());
    }
  }, [dataStatus, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SaladSoupPage />} />
          <Route path="barnyard" element={<BarnyardPage />} />
          <Route path="henHouse" element={<HenHousePage />} />
          <Route path="fromSea" element={<FromSeaPage />} />
          <Route path="biriyani" element={<BiriyaniPage />} />
          <Route path="fastFood" element={<FastFoodPage />} />
        </Route>
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
