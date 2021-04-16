// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./theme/index";

import { worker } from "./mocks/browser";
worker.start();

export const CHAR_URL = "https://swapi.dev/api/people";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
