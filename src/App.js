import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);
  /* useEffect(function (){
    console.log("hi")
    return function(){
      console.log("bye")
    }
  }, []); 
   같은 코드지만 위 방식이 더 선호됨
    Cleanup 함수는 컴포넌트가 삭제될 때 실행됨
    가끔 필요하지만, 웬만해선 필요 없을 기능
  */
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    // 자바스크립트 사용 시 {} 필요
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
