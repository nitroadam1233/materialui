import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication"; // This our Authentication component in our pages folder that got imported
import MachineLearning from "./pages/MachineLearning/MachineLearning";
import Hosting from "./pages/Hosting/Hosting";
import Functions from "./pages/Functions/Functions";
import Database from "./pages/Database/Database";
import Storage from "./pages/Storage/Storage";
import { ThemeProvider } from "@mui/material";
import { dashboardTheme } from "./dashboardTheme";

ReactDOM.render(
  <BrowserRouter>
    {/* This is a wrapper component for the Routes component*/}
    <ThemeProvider theme={dashboardTheme}>
      {/* This makes all the styles global, dashboardTheme has all our global styles */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="authentication" element={<Authentication />} />{" "}
          {/* This is one of our pages inside our pages folder*/}
          <Route path="database" element={<Database />} />{" "}
          {/* The url for this path will be /database  */}
          <Route path="functions" element={<Functions />} />
          {/* The element attribute displays the content of all the different pages we created */}
          <Route path="hosting" element={<Hosting />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="storage" element={<Storage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
