/*
author: Andrea Habib
distributed under MIT license
Feel free to use, however please give credit to the original author
email: andrea.atef@yahoo.com
*/

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FLOW_CHART_2018_2021 from "./flowcharts/FLOW_CHART_2018_2021";
import FLOW_CHART_2021_2022 from "./flowcharts/FLOW_CHART_2021_2022";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="flowchart-cat2018-2021"
            element={<FLOW_CHART_2018_2021 />}
          />
          <Route
            path="flowchart-cat2021-2022"
            element={<FLOW_CHART_2021_2022 />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
