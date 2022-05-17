import { useState, useEffect } from "react";
import Button from "./Button";

function Hello() {
  useEffect(() => {
    console.log("Created :)");

    // Cleanup
    // 메모리 누수가 발생하지 않도록 정리
    return () => {
      console.log("Distroyed :(");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      {show ? <Hello /> : null}
      <button onClick={onClick}>{show ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
