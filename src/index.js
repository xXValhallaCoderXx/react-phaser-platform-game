import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import Phaser from "phaser";
import { store } from "./config/store";
import { Provider } from "react-redux";
import GameScene from "./phaser-core/scenes/game-scene";

const config = {
  type: Phaser.AUTO,

  title: "Platform Quest",
  parent: "phaser",
  width: 360,
  height: 640,
  scaleMode: 3,
  scene: GameScene,
};

new Phaser.Game(config);

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
