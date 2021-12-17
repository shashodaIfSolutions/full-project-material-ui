import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Campaign from "./routes/campaign";
import Analytics from "./routes/analytics";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="campaign" element={<Campaign />} />
      <Route path="analytics" element={<Analytics />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);