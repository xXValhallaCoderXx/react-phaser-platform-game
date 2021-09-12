import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Phaser from "phaser";
import reportWebVitals from "./reportWebVitals";
import PhaserCore from "./phaser-core";
import { store } from "./config/store";
import { Provider } from "react-redux";

const config = {
  type: Phaser.AUTO,
  mode: Phaser.Scale.FIT,
  parent: "phaser",

  scene: PhaserCore,
};

const game = new Phaser.Game(config);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
