import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HudContainer from "./shared/components/ui-hud";

function App() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div style={{ backgroundColor: "pink", height: "100vh" }}>
      <div
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HudContainer>
          <div
            style={{
              height: 50,
              color: "white",
              backgroundColor: "green",
              fontSize: 30,
            }}
          >
            COUssNT {count}
          </div>
          <div id="phaser" />
        </HudContainer>
      </div>
    </div>
  );
}

export default App;
