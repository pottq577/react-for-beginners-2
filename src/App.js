import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  // 두 개의 argument를 가지고, 첫 번째엔 한 번만 실행할 코드, 두 번쨰엔 []을 넣어줌
  useEffect(() => {
    console.log("CALL THE API");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
