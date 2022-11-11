import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("");
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setScreen((s) => `${s + current}`);
    if (
      current === "1" ||
      current === "2" ||
      current === "3" ||
      current === "4" ||
      current === "5" ||
      current === "6" ||
      current === "7" ||
      current === "8" ||
      current === "9" ||
      current === "0"
    )
      setCurrent("");
  }, [current]);

  return (
    <div className="container">
      <div className="calc">
        <div className="screen">{screen === "" ? 0 : screen}</div>
        <div className="btns">
          <div className="clear-del">
            <button onClick={() => setScreen("")}>AC</button>
            <button
              onClick={() => setScreen(screen.slice(0, screen.length - 1))}
            >
              Del
            </button>
          </div>
          <div className="small-btns">
            <div className="ops">
              <button onClick={() => setCurrent("**")}>^</button>
              <button onClick={() => setCurrent("*")}>x</button>
              <button onClick={() => setCurrent("/")}>/</button>
              <button onClick={() => setCurrent("+")}>+</button>
              <button onClick={() => setCurrent("-")}>-</button>
            </div>
            <div className="nums">
              <button onClick={() => setCurrent("(")}>(</button>
              <button onClick={() => setCurrent(")")}>)</button>
              <button onClick={() => setCurrent("1")}>1</button>
              <button onClick={() => setCurrent("2")}>2</button>
              <button onClick={() => setCurrent("3")}>3</button>
              <button onClick={() => setCurrent("4")}>4</button>
              <button onClick={() => setCurrent("5")}>5</button>
              <button onClick={() => setCurrent("6")}>6</button>
              <button onClick={() => setCurrent("7")}>7</button>
              <button onClick={() => setCurrent("8")}>8</button>
              <button onClick={() => setCurrent("9")}>9</button>
              <button onClick={() => setCurrent("0")}>0</button>
            </div>
          </div>
          <div className="dec-equal">
            <button className="dec" onClick={() => setCurrent(".")}>
              .
            </button>
            <button onClick={() => setScreen(eval(screen))}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
