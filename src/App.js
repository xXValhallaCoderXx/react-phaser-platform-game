import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HudContainer from "./components/ui-hud";

function App() {
  const count = useSelector((state) => state.counter.value);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const canvas = document.getElementById("phaser").childNodes[0];
    setWidth(canvas ? canvas.width : 800);
  }, []);
  return (
    <HudContainer>
      <div
        style={{
          height: 50,
          color: "white",
          backgroundColor: "green",
          fontSize: 30,
        }}
      >
        COUNT {count}
      </div>
      <div style={{ position: "relative" }} className="phaser" id="phaser" />
    </HudContainer>
  );
}

export default App;
