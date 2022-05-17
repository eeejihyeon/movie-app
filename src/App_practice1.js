import { useState, useEffect } from "react";
import Button from "./Button";

function App() {
  const [counter, setCounter] = useState(0);
  const [key, setKey] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKey(event.target.value);

  console.log("I run all the time");

  // 한 번만 실행
  useEffect(() => {
    console.log("I run only once");
  }, []);

  // []안의 keyword가 변화할 때 실행
  useEffect(() => {
    console.log("I run when 'key' changes");
  }, [key]);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'key' & 'counter' changes");
  }, [key, counter]);

  // useEffect(() => {
  //   if (key !== "" && key.length >= 2) {
  //     console.log("SEARCH FOR", key);
  //   }
  // }, [key]);

  return (
    <div>
      <input
        value={key}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;

// useEffect(function(){}, [dependency])
// dependency가 아무것도 없다면 렌더시 한 번만 호출
// dependency가 존재하면, 해당 리스트의 값이 변화할 때만 실행
//  - 코드가 딱 한 번만 실행될 수 있도록 보호
//  - 글자를 타이핑할 때마다 API를 새로 호출하는 경우 useEffect로 API 한 번만 호출
