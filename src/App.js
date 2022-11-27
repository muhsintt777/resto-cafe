import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  getDataStatus,
  selectAllData,
} from "./features/data/dataSlice";
import OrderPage from "./pages/order/OrderPage";
import CategoryPages from "./pages/categoryPages/CategoryPages";
import { nanoid } from "@reduxjs/toolkit";

function App() {
  const dispatch = useDispatch();
  const dataStatus = useSelector(getDataStatus);
  const allData = useSelector(selectAllData);

  //creating route path from data
  let routePathArr = [];
  allData.forEach((data) => {
    routePathArr.push(data.menu_category.split(" ").join(""));
  });
  routePathArr.shift();

  const renderedRouteArr = routePathArr.map((path, index) => {
    return (
      <Route
        key={nanoid()}
        path={path}
        element={<CategoryPages dataNum={index + 1} />}
      />
    );
  });

  useEffect(() => {
    if (dataStatus === "idle") {
      dispatch(fetchData());
    }
  }, [dataStatus, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CategoryPages />} />
          {renderedRouteArr}
        </Route>
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
