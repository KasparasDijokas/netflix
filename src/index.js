import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'normalize.css';
import { GlobalStyles } from "./globalStyles";
import { firebase } from './lib/firebase.prod';
import {FirebaseContext} from './context/FirebaseContext';

ReactDOM.render(
  <FirebaseContext.Provider value={firebase}>
    <GlobalStyles />
    <App />
    </FirebaseContext.Provider>,
  document.getElementById("root")
);
