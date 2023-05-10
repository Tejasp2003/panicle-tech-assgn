import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./pages/Chart";
import CountryPopulationChart from "./components/charts/CountryPopulationChart";
import UserWithAgeAbove30 from "./components/charts/UserWithAgeAbove30Chart";
import values from "../public/data.json";
import DataTable from "./pages/Table";
import UserDetails from "./components/table/UserDetails";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/userSlice";

import Form from "./pages/UserForm";
import Home from "./pages/Home";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />}>
            <Route
              path="country-population"
              element={<CountryPopulationChart values={values} />}
            />
            <Route
              path="user-with-age-above-30"
              element={<UserWithAgeAbove30 values={values} />}
            />
          </Route>
          <Route path="/table" element={<DataTable />} />
          <Route path="/user/:id" element={<UserDetails />} />

          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
