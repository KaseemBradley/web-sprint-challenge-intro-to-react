// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { worker } from "./mocks/browser";
worker.start();

export const CHAR_URL = 'https://swapi.dev/api/people';

ReactDOM.render(<App />, document.getElementById("root"));
