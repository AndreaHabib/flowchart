/*
author: Andrea Habib
distributed under MIT license
Feel free to use, however please give credit to the original author
email: andrea.atef@yahoo.com
*/

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FLOW_CHART_2018_2020 from "./flowcharts/FLOW_CHART_2018_2020";
import FLOW_CHART_2021_2022 from "./flowcharts/FLOW_CHART_2021_2022";
import FLOW_CHART_2013_2018 from "./flowcharts/FLOW_CHART_2013_2018";
import FLOW_CHART_2020_2021 from "./flowcharts/FLOW_CHART_2020_2021";
import Home from "./pages/Home";
import HeaderMenu from "./component/HeaderMenu";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderMenu />
        <Routes>
          <Route
            path="flowchart-cat2018-2020"
            element={<FLOW_CHART_2018_2020 />}
          />
          <Route
            path="flowchart-cat2021-2022"
            element={<FLOW_CHART_2021_2022 />}
          />
          <Route
            path="flowchart-cat2013-2018"
            element={<FLOW_CHART_2013_2018 />}
          />
          <Route
            path="flowchart-cat2020-2021"
            element={<FLOW_CHART_2020_2021 />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
